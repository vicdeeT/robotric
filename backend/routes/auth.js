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


router.post("/login", [
    body("email", 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists()
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {

        const user = await User.findOne({ email: req.body.email });
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



    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ errors: "Internal Server Error" });
    }
});

module.exports = router;