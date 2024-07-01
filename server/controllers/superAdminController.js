const { findById } = require("../models/adminSchema");

const AdminModel = require(`${__dirname}/../models/adminSchema`);
const PaymentModel = require(`${__dirname}/../models/paymentSchema`);

const crypto = require("crypto");
const nodemailer = require("nodemailer");

// Email transport configuration
const transport = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  port: 465,
  auth: {
    user: "contact.alinventors@gmail.com",
    pass: "sxmp lxuv jckd savw",
  },
});

// Admin Signup Controller
exports.adminSignUp = async function (req, res) {
  try {
    console.log(req.body);

    // Generate a token
    const token = crypto.randomBytes(20).toString("hex");
    const tokenExpiry = Date.now() + 10 * 60 * 1000; // 10 minutes from now

    // Create admin without password
    const adminData = {
      ...req.body,
      passwordResetToken: token,
      passwordResetExpires: tokenExpiry,
    };

    const admin = await AdminModel.create(adminData);

    // Send email with token
    const resetURL = `${process.env.FRONTEND_URL}admin/create-password/${token}`;
    const message = `Click on the link to create your password Link Expired after 10 minutes: ${resetURL}`;

    await transport.sendMail({
      from: "admin@triphog.com",
      to: admin.email,
      subject: "Create Your Admin Password",
      text: message,
    });

    res.status(201).json({
      status: "success",
      message:
        "Admin created successfully. Check your email to create a password.",
      data: admin,
    });
  } catch (err) {
    console.log("🧨 Error Occurred ", err);
    res.status(500).json({
      status: "failed",
      message: "Admin creation failed",
    });
  }
};

// Password Creation Controller
exports.createPassword = async function (req, res) {
  try {
    const { token } = req.params;
    const { password, confirmPassword } = req.body;

    // Find admin with the token and check if token is still valid
    const admin = await AdminModel.findOne({
      passwordResetToken: token,
      passwordResetExpires: { $gt: Date.now() },
    });

    if (!admin) {
      return res.status(400).json({
        status: "failed",
        message: "Token is invalid or has expired",
      });
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({
        status: "failed",
        message: "Passwords do not match",
      });
    }

    // Update admin with new password
    admin.password = password; // Assuming you have a pre-save hook to hash the password
    admin.passwordResetToken = undefined;
    admin.passwordResetExpires = undefined;
    admin.status = "active";
    await admin.save();

    res.status(200).json({
      status: "success",
      message: "Password created successfully",
    });
  } catch (err) {
    console.log("🧨 Error Occurred ", err);
    res.status(500).json({
      status: "failed",
      message: "Password creation failed",
    });
  }
};

exports.getAllAdmins = async (req, resp) => {
  try {
    let filterData = { ...req.query };
    const excludedWords = ["currentPage", "recordsPerPage"];
    excludedWords.forEach((element) => {
      delete filterData[element];
    });

    if (filterData.name) {
      filterData.$or = [
        { firstName: { $regex: new RegExp(filterData.name, "i") } },
        { lastName: { $regex: new RegExp(filterData.name, "i") } },
      ];
    }
    delete filterData.name;

    let query = AdminModel.find({ ...filterData, status: "active" });
    let currentPage = req.query.currentPage * 1 || 1;
    let recordsPerPage = req.query.recordsPerPage * 1 || 10;
    let skip = (currentPage - 1) * recordsPerPage;

    query = query.skip(skip).limit(recordsPerPage);
    query = query.populate({
      path: "payments",
    });

    const data = await query;
    const totalRecords = await AdminModel.countDocuments(filterData);

    resp.status(200).json({
      status: "success",
      message: "Admins get Successfully",
      totalRecords,
      data,
    });
  } catch (err) {
    console.log("🧨 Error Occurred ", err);
    resp.status(500).json({
      status: "failed",
      message: "Admin get Failed",
    });
  }
};

exports.createPayment = async (req, resp) => {
  try {
    const data = await PaymentModel.create({
      ...req.body,
      admin: req.params.id,
    });
    await AdminModel.findByIdAndUpdate(req.params.id, {
      $push: { payments: data._id },
      status: req.body.status,
      plan: req.body.plan,
    });

    resp.status(201).json({
      status: "success",
      message: "Payment Created Successflly",
    });
  } catch (err) {
    console.log("🧨 Error Occured ", err);
    resp
      .status(500)
      .json({ status: "failed", message: "Payment Creation Failed" });
  }
};

exports.editPayment = async (req, resp) => {
  try {
    const data = await PaymentModel.findByIdAndUpdate(req.params.id, req.body);
    await AdminModel.findByIdAndUpdate(data.admin, {
      status: req.body.status,
      plan: req.body.plan,
    });
    resp.status(200).json({
      status: "success",
      message: "Payment Updated Successfully",
      data,
    });
  } catch (err) {
    console.log("🧨 Error Occured ", err);
    resp
      .status(500)
      .json({ status: "failed", message: "Payment Updation Failed" });
  }
};

exports.deletePayment = async (req, resp) => {
  try {
    const data = await PaymentModel.findByIdAndDelete(req.params.id);
    resp.status(200).json({
      status: "success",
      message: "Payment Deleted Successfully",
    });
  } catch (err) {
    console.log("🧨 Error Occured ", err);
    resp
      .status(500)
      .json({ status: "failed", message: "Payment Deletion Failed" });
  }
};

exports.getSingleAdmin = async (req, resp) => {
  try {
    const data = await AdminModel.findById(req.params.id);
    resp.status(200).json({
      status: "success",
      message: "Admin Get Successfully",
      data,
    });
  } catch (err) {
    console.log("🧨 Error Occured ", err);
    resp.status(500).json({ status: "failed", message: "Admin Get Failed" });
  }
};

exports.updateAdmin = async (req, resp) => {
  try {
    const data = await AdminModel.findByIdAndUpdate(req.params.id, req.body);
    resp.status(200).json({
      status: "success",
      message: "Admin Updated Successfully",
      data,
    });
  } catch (err) {
    console.log("🧨 Error Occured ", err);
    resp
      .status(500)
      .json({ status: "failed", message: "Admin Updation Failed" });
  }
};

exports.deleteAdmin = async (req, resp) => {
  try {
    const data = await AdminModel.findByIdAndDelete(req.params.id);
    resp.status(200).json({
      status: "success",
      message: "Admin Deleted Successfully",
    });
  } catch (err) {
    console.log("🧨 Error Occured ", err);
    resp
      .status(500)
      .json({ status: "failed", message: "Admin Deletion Failed" });
  }
};

exports.giveWarning = async (req, resp) => {
  try {
    const getAdmin = await AdminModel.findById(req.params.id).populate({
      path: "payments",
    });
    const id = getAdmin.payments[getAdmin.payments.length - 1];
    const data = await PaymentModel.findByIdAndUpdate(id, req.body);
    resp.status(201).json({
      status: "success",
      message: "Warning Send Successfully",
    });
  } catch (err) {
    console.log("🧨 Error Occured ", err);
    resp.status(500).json({ status: "failed", message: "Warning Send Failed" });
  }
};

exports.getAllPayments = async (req, resp) => {
  try {
    const data = await AdminModel.findById(req.params.id).populate({
      path: "payments",
    });
    resp.status(200).json({
      status: "success",
      message: "Payments Get Successfully",
      data,
    });
  } catch (err) {
    console.log("🧨 Error Occured ", err);
    resp.status(500).json({ status: "failed", message: "Payments Get Failed" });
  }
};
