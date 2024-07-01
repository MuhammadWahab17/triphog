const mongoose = require("mongoose");
const { paymentSchema } = require("./paymentSchema");
const bcrypt = require("bcrypt");
const adminSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: [true, "Please Enter First Name"],
    },
    lastName: {
      type: String,
      trim: true,
      required: [true, "Please Enter Last Name"],
    },
    email: {
      type: String,
      trim: true,
      required: [true, "Please Enter Email Adress"],
      unique: [true, "This Email Already Used"],
    },
    phoneNumber: {
      type: Number,
    },
    role: {
      type: String,
      enum: ["admin"],
      default: "admin",
    },
    gender: {
      type: String,
      enum: ["male", "female"],
      default: "male",
    },
    photo: {
      type: String,
    },
    features: {
      type: [String],
    },
    paymentStatus: {
      type: String,
      default: "Pending",
    },
    status: {
      type: String,
      default: "pending",
    },
    plan: {
      type: String,
      default: "Ultimate",
    },
    // Add this to your existing adminSchema
    googleCalendarTokens: {
      access_token: String,
      refresh_token: String,
      scope: String,
      token_type: String,
      expiry_date: Number,
    },
    password: {
      type: String,
    },
    payments: [{ type: mongoose.Schema.ObjectId, ref: "Payment" }],
    passwordResetToken: String,
    passwordResetExpires: Date,
  },
  { timestamps: true }
);

// Password encryption middleware
adminSchema.pre("save", async function (next) {
  // Only run this function if password was actually modified
  if (!this.isModified("password")) return next();

  try {
    // Generate a salt
    const salt = await bcrypt.genSalt(10);

    // Hash the password along with our new salt
    this.password = await bcrypt.hash(this.password, salt);

    next();
  } catch (error) {
    next(error);
  }
});
// Method to check if provided password is correct
adminSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
