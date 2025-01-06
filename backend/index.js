

const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config()

mongoose
  .connect(`${process.env.MONGO_URI}`)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));



const express = require("express")
const bodyParser = require("body-parser")

const cors = require("cors");

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'uploads'));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage });


const app = express()

app.use(express.json())
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api/auth', require('./routes/auth.js'));
app.use('/api/users', require('./routes/user.js'));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get("/", (req, res) => {
  res.status(200).send("<h1>Welocme to Our Robotrik Backend</h1>")
})

app.post('/upload', upload.single('image'), (req, res) => {
  if (req.file) {
    res.status(200).json({ filePath: `/uploads/${req.file.filename}` });
  } else {
    res.status(400).json({ message: 'File upload failed' });
  }
});


app.listen(`${process.env.PORT}`, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});


