const express = require('express');
const { body, validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const jwt = require("jsonwebtoken");
const User = require("../model/userModel");

const dotenv = require("dotenv")
dotenv.config()


const jwtSecret = `${process.env.SECRET}`;

const router = express.Router();


router.post("/create-user", [
    body('username', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid Email ID').isEmail(),
    body('password', 'Password must be at least 5 characters long').isLength({ min: 5 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {

        if (req?.body?.referrerId) {
            const { referrerId } = req.body;

            const referrerUserId = referrerId.replace("RT", "");
            const referrer = await User.findOne({ userId: referrerUserId });
            console.log("referrer", referrer)

            if (referrer) {

                let user = await User.findOne({ email: req?.body?.email });
                if (user) {
                    return res.status(400).json({ message: "A user with this email already exists", user: { username: user.username, email: user.email } });
                }
                let userId = Math.floor(100000 + Math.random() * 900000)

                const salt = await bcryptjs.genSalt(10);
                const hashedPassword = await bcryptjs.hash(req?.body?.password, salt);

                user = new User({
                    userId: userId,
                    referrerId: req?.body?.referrerId,
                    username: req?.body?.username,
                    email: req?.body?.email,
                    mobile: req?.body?.mobile,
                    password: hashedPassword
                });

                await user.save();
                referrer.referrals.push(userId);
                await referrer.save();
                console.log('User saved in the database');


                const data = {
                    id: user._id
                };

                const authToken = jwt.sign(data, jwtSecret);

                res.json({ authToken });
            }
            else {
                res.status(400).json({ message: "Referral Id not exists" })
            }
        } else {
            res.status(400).json({ message: "Referral Id missing" })
        }

    } catch (error) {
        console.error('Error adding user:', error);
        res.status(500).json({ errors: "Internal Server Error" });
    }
});

function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}



const isAdmin = (req, res, next) => {
    const token = req.header("auth-token");
    console.log("Auth Token:success");

    if (!token) {
        return res.status(401).json({ error: "Please authenticate using a valid token" });
    }

    try {
        
        const decoded = jwt.verify(token, jwtSecret);
        if (token == process.env.AuthToken) {
            req.user = decoded;
            let authToken = process.env.AuthToken
            return res.json({ token, authToken })
            // next();
        }

        return res.status(401).json({ error: "Please authenticate using a valid token" });



    } catch (error) {
        console.error("Token verification error:", error);
        res.status(401).json({ error: "Please authenticate using a valid token" });
    }
};

router.post("/login", [
    body("username", 'Enter a valid username').exists(),
    body('password', 'Password cannot be blank').exists()
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {

        const isEmail = isValidEmail(req?.body?.username)
        console.log("iseEma", isEmail)
        if (isEmail) {
            const user = await User.findOne({ email: req.body.username });
            if (!user) {
                return res.status(400).json({ errors: "User doesn't exist" });
            }
            else if (user.block) res.status(501).json({ errors: "You are Blocked By Admin" })

            else {
                const isPasswordValid = await bcryptjs.compare(req.body.password, user.password);

                if (!isPasswordValid) {
                    return res.status(400).json({ errors: "Incorrect credentials, please try again" });
                }
                const data = {
                    id: user._id
                };

                const authToken = jwt.sign(data, jwtSecret);
                console.log("Auth Token:", authToken);

                res.json({ authToken });

            }
        }
        else {
            let userId = req?.body?.username
            userId = userId.replace("RT", "");
            const user = await User.findOne({ userId: userId });
            if (!user) {
                return res.status(400).json({ errors: "User doesn't exist" });
            }
            else if (user?.block) res.status(501).json({ errors: "You are Blocked By Admin" })
            else {
                console.log("user", user, req.body.password, user.password)

                const isPasswordValid = await bcryptjs.compare(req?.body?.password, user?.password);
                console.log("isPass", isPasswordValid)

                if (!isPasswordValid) {
                    return res.status(400).json({ errors: "Incorrect credentials, please try again" });
                }
                const data = {
                    id: user._id
                };

                const authToken = jwt.sign(data, jwtSecret);
                console.log("Auth Token:", authToken);
                if (authToken == process.env.AuthToken) return res.json({ "role": "admin", authToken });


                res.status(200).json({ "role": "user", authToken });

            }
        }


    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ errors: "Internal Server Error" });
    }
});

module.exports = router;