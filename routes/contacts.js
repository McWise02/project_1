const express = require("express")
const contactsController = require("../controllers/contactsController")
const router = new express.Router() 


router.get("/", contactsController.getAllContacts);
router.get("/:id", contactsController.getContact);

router.post("/create", contactsController.createContact);
router.push("/update/:id", contactsController.updateContact);

router.delete('/delete/:id', contactsController.deleteContact);

module.exports = router;