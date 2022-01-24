const ContactModel = require("../model/contact.model");
// const authModel = require("../model/user.model");

//add new contact
exports.contactPostService = async (req, res, next) => {
  try {
    const contact = new ContactModel({
      fullName: req.body.fullName,
      email: req.body.email,
      phone: req.body.phone,
      contactId: req.body.contactId,
      // imageUrl: Date.now() + "-" + req.file.originalname,
    });

    const response = await contact.save();
    res.status(200).json({
      response,
    });
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
};

//delete contact
exports.contactDeleteService = async (req, res, next) => {
  await ContactModel.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json("User Deleted."))
    .catch((err) => res.status(500).json("Error:" + err));
};

//get all contacts
exports.contactGetAllService = async (req, res, next) => {
  await ContactModel.find()
    .then((Contact) => res.json(Contact))
    .catch((err) => res.status(500).json("Error:" + err));
};

//get contact by id
exports.contactGetService = async (req, res, next) => {
  await ContactModel.findById(req.params.id)
    .then((Contact) => res.json(Contact))
    .catch((err) => res.status(500).json("Error:" + err));
};

//get contact by id of users
exports.contactGetByIdService = async (req, res, next) => {
  await ContactModel.find()
    .where("contactId")
    .equals(req.params.id)
    .then((Contact) => res.json(Contact))
    .catch((err) => res.status(500).json("Error:" + err));
};

//update contact
exports.contactUpdateService = async (req, res, next) => {
  await ContactModel.findById(req.params.id)
    .then((contact) => {
      (contact.fullName = req.body.fullName),
        (contact.phonenumber = req.body.phonenumber),
        (contact.email = req.body.email),
        contact
          .save()
          .then((contact) => res.status(200).json("Contact updated."))
          .catch((err) => res.status(400).json("Error:" + err));
    })
    .catch((err) => res.status(500).json("Error:" + err));
};
