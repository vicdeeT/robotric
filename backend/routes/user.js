const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require("jsonwebtoken");
const User = require("../model/userModel");

const dotenv = require("dotenv")
dotenv.config()

const jwtSecret = `${process.env.SECRET}`;



const fetchuser = (req, res, next) => {
    const token = req.header("auth-token");
    console.log("Auth Token:success");

    if (!token) {
        return res.status(401).json({ error: "Please authenticate using a valid token" });
    }

    try {
        const decoded = jwt.verify(token, jwtSecret);
        req.user = decoded;
        next();

    } catch (error) {
        console.error("Token verification error:", error);
        res.status(401).json({ error: "Please authenticate using a valid token" });
    }
};



const router = express.Router();


router.post("/user", fetchuser, async (req, res) => {
    const userId = req.user.id;
    try {

        const user = await User.findById(userId).select("-password");
        if (!user) return res.status(404).json({ error: "User not found" });

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



router.get("/referalls/:userId", fetchuser, async (req, res) => {
    const { userId } = req.params;
    try {
        const user = await User.findOne({ userId }).select("-password");
        if (!user) return res.status(404).json({ error: "User not found" });

        let referalls = user?.referrals

        let directUser = await User.find({ userId: { $in: referalls } }).select("-password")
        console.log(directUser)
        res.status(200).json(directUser)

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})




router.get("/", fetchuser, async (req, res) => {
    try {

        const users = await User.find().select("-password");
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});




router.post("/referall/:referallId", async (req, res) => {
    const { referallId } = req.params;

    try {

        if (referallId) {

            const referrerUserId = referallId.replace("RT", "");
            const referrer = await User.findOne({ userId: referrerUserId });
            console.log("referrer", referrer)

            if (referrer) {

                res.status(200).json({ valid: true, user: { name: referrer?.username } });
            }
            else {
                res.status(400).json({ valid: false })
            }
        } else {
            res.status(400).json({ message: "Referral Id missing" })
        }

    } catch (error) {
        console.error('Error adding user:', error);
        res.status(500).json({ errors: "Internal Server Error" });
    }
});



const getReferredUsers = async (userId, allReferredUsers = []) => {
    console.log("user in getrefereedUser", userId)
    const user = await User.findOne({ userId: userId });
    if (user && user.referrals.length > 0) {
        allReferredUsers.push(...user.referrals);

        for (const referralId of user.referrals) {
            await getReferredUsers(referralId, allReferredUsers);
        }
    }
    return allReferredUsers;
};



router.get("/referrals/:userId", async (req, res) => {
    const { userId } = req.params;
    console.log("userid", userId)

    try {
        const allReferredUserIds = await getReferredUsers(userId);
        console.log("allReferredIds", allReferredUserIds)

        const allReferredUsers = await User.find({ userId: { $in: allReferredUserIds } });
        console.log("allreferess", allReferredUsers)
        res.status(200).json(allReferredUsers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



router.put("/user", fetchuser, async (req, res) => {
    const id = req.user.id;
    try {
        const data = req.body
        const user = await User.findById(id).select("-password");

        const salt = await bcryptjs.genSalt(10);
        if (req?.body?.password) {
            const hashedPassword = await bcryptjs.hash(req?.body?.password, salt);
            data.password = hashedPassword
        }
        let da = await User.findByIdAndUpdate(id, data, {
            new: true
        })
        if (!user) return res.status(404).json({ error: "User not found" });

        res.status(200).json(da);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



router.put("/user/:id", async (req, res) => {
    let { id } = req.params;
    console.log(id)
    const data = req.body
    console.log(data)

    try {
        const user = await User.findOne({ userId: id }).select("-password");
        const _id = user._id
        if (data.data == "paid") user.paid = !user.paid
        else if (data.data == "Activation") user.Activation = !user.Activation
        else if (data.data == "Block") user.block = !user.block
        let da = await User.findByIdAndUpdate(_id, user, {
            new: true
        })
        if (!user) return res.status(404).json({ error: "User not found" });

        res.status(200).json(da);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.put("/user/block/:id", async (req, res) => {
    const id = { id }
    try {
        const user = await User.findOne({ userId: id }).select("-password");
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;