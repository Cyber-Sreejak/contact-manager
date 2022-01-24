const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
const authController = require("./controllers/auth.controller");
const contactController = require("./controllers/contact.controller");
const contactDeleteController = require("./controllers/contact.controller");
const contactUpdateController = require("./controllers/contact.controller");
const contactGetController = require("./controllers/contact.controller");
const contactGetAllController = require("./controllers/contact.controller");
const contactGetAllByIdController = require("./controllers/contact.controller");

const multer = require("multer");

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    console.log(file);
    let newName = Date.now() + "-" + file.originalname;
    cb(null, newName);
  },
});

const upload = multer({ storage: storage });

app.use("/auth", authController);
app.use("/contact", upload.single("contactImage"), contactController); //to post new contact
app.use("/contact/get", contactGetAllController); //to post new contact
app.use("/delete/:id", contactDeleteController); //to delete new contact
app.use("/get/:id", contactGetController); //to get contact
app.use("/getbyid/:id", contactGetAllByIdController); //to get contact
app.use("/update/:id", contactUpdateController); //to update contact

app.use((req, res, next) => {
  res.status(404).json({
    message: "Route not found",
  });
});

mongoose.connect(process.env.MONGO_CONNECT_URI, null, () => {
  app.listen(8000, () => console.log(`Server is listening at 8000`));
});
