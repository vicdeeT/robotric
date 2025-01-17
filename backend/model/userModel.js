const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({

  username: { type: String, required: true },
  userId: { type: String, required: true, unique: true },
  email: {
    type: String,
    required: true,
    unique: true
  },
  block:{type:Boolean,default:false},
  Activation: { type: Boolean, default: false },
  paid: { type: Boolean, default: false },
  mobile: {
    type: String
  },
  image: { type: String },
  password: { type: String, required: true },
  admin:{type:String,default:false},

  referrerId: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return !v || v.startsWith("RT");
      },
      message: "Referral ID must start with 'RT'",
    },
  },


  referrals: [{ type: String }],

  date: { type: String, default: Date }
}, { timestamps: true })


userSchema.pre("save", function (next) {
  if (this.referrerId && !this.referrerId.startsWith("RT")) {
    this.referrerId = `RT${this.referrerId}`
  }
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;



