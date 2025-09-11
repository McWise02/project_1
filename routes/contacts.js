const express = require("express")
const contactsController = require("../controllers/contactsController")
const router = new express.Router() 


router.get("/", contactsController.getAllContacts);
router.get("/:id", contactsController.getContact);

router.post("/create", contactsController.createContact);
router.post("/update/:id", contactsController.updateContact);

router.post('/delete/:id', contactsController.deleteContact);

module.exports = router;