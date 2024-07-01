const express = require("express");
const {
  adminSignUp,
  getAllAdmins,
  createPayment,
  editPayment,
  deletePayment,
  getSingleAdmin,
  updateAdmin,
  deleteAdmin,
  giveWarning,
  getAllPayments,
  createPassword,
} = require("../controllers/superAdminController");
const router = express.Router();

//Create Admin
//Get All Admins
router.route("/admin").post(adminSignUp).get(getAllAdmins);
router.route("/admin/create-password/:token").post(createPassword);
//Get Single Admin
//Update Admin
//Delete Admin
router
  .route("/admin/:id")
  .get(getSingleAdmin)
  .patch(updateAdmin)
  .delete(deleteAdmin);

//Give Warning
router.route("/:id/warning").post(giveWarning);
//Create Payment
//Get All Payments of Specific User
router.route("/:id/payment").post(createPayment).get(getAllPayments);
//Edit Payment
//Delete Payment
router.route("/payment/:id").patch(editPayment).delete(deletePayment);

module.exports = router;
