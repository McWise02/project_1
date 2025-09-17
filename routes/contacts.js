const express = require("express")
const contactsController = require("../controllers/contactsController")
const router = new express.Router() 

       
router.post('/create', contactsController.createContact);      
router.put('/update/:id', contactsController.updateContact);  
router.delete('/delete/:id', contactsController.deleteContact); 
router.get('/', contactsController.getAllContacts);      
router.get('/:id', contactsController.getContact);             


module.exports = router;