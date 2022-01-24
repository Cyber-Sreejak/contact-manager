const express = require("express");
const {
  contactPostService,
  contactDeleteService,
  contactUpdateService,
  contactGetService,
  contactGetAllService,
  contactGetByIdService,
} = require("../services/contact.service");

const router = express.Router();

router.post("/create", contactPostService);
router.delete("/delete/:id", contactDeleteService);
router.get("/get", contactGetAllService);
router.get("/get/:id", contactGetService);
router.get("/getbyid/:id", contactGetByIdService);
router.post("/update/:id", contactUpdateService);

module.exports = router;
