const dotenv = require("dotenv");
const app = require("./index");
const mongoose = require("mongoose");
dotenv.config({ path: "./config.env" });

app.listen(process.env.PORT, () => {
  console.log("Server Started on Port ", process.env.PORT || 8000);
});

mongoose
  .connect(process.env.DB_CONNECTION)
  .then((data) => {
    console.log("Database Connected Successfully");
  })
  .catch((err) => {
    console.log("🧨 DatBase Connection Failed ", err);
  });
