const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const multer = require("multer");
// const sharp = require("sharp");
const { uploadPhoto, imgResize } = require("./middlewares/multerToUploadImage");
// const upload = multer();
app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(upload.array());
app.use(express.static("public"));
app.use(cookieParser());

//Multer Configuration to Upload Images
const googleAuthRoutes = require(`${__dirname}/routes/googleAuthRoutes`);
const superadminRouter = require(`${__dirname}/routes/superAdminRouter`);
const adminRouter = require(`${__dirname}/routes/adminRouter`);
const calendarRouter = require(`${__dirname}/routes/meetingRouter`);

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
// const uploadImages = async (req, resp) => {
//   console.log(req.files);
//   resp.status(200).json({
//     data: req.files,
//   });
// };
// app.post(
//   "/api/v1/upload",
//   uploadPhoto.single("photo"), // Corrected field name to "photo"
//   imgResize,
//   uploadImages
// );
app.use("/auth", googleAuthRoutes);
app.use("/api/v1/superadmin", superadminRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/calendar", calendarRouter);

app.use("*", (req, resp) => {
  resp.status(404).json({
    status: "fail",
    message: "Page Not Found",
  });
});
module.exports = app;
