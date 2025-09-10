const express = require("express")
const contactsController = require("../controllers/contactsController")
const router = new express.Router() 


router.get("/", contactsController.getAllContacts);
router.get("/:id", contactsController.getContact);