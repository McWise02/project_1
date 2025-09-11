require("dotenv").config();
const database = require("../database/contacts.js");
const contactsValidator = require('../utils/contactsValidator.js')


const getAllContacts = async (req, res, next) => {
    try {
        var data = await database.getAll();
        console.log(data);
        res.status(200).json(data);
    } catch (error) {
    res.status(500).json({ message: 'Error retrieving users', error: error.message });
  }
};

const getContact = async (req, res, next) => {
    try {
        const contactId = req.params.id;
        var data = await database.get(contactId);
        console.log(data);
        res.status(200).json(data);
    } catch (error) {
    res.status(500).json({ message: 'Error retrieving users', error: error.message });
  }
};

const createContact = async (req, res, next) => {
  try {
    const data = req.body;
    if (contactsValidator(data)) {
      var result = await database.create(data)
      res.status(200).json(result)
    } else {
      res.status(500).json({message: 'Not enough data to create a contact', error: error.message})
    }
  } catch (error) {
    res.status(500).json({message: 'Error creating contact', error: error.message})
  }
};

const updateContact = async (req, res, next) => {
  try {
    const contactId = req.params.id;
    const data = req.body;

    const updateData = validateUpdateContact(data);
    if (updateData) {
      const result = await database.update(contactId, updateData);
      if (result.matchedCount === 0) {
        return res.status(404).json({ message: "Contact not found" });
      }
      res.status(200).json({ message: "Contact updated successfully", result });
    }
   
  } catch (error) {
    res.status(500).json({ message: "Error updating contact", error: error.message });
  }
};

const deleteContact = async (req, res, next) => {
  try {
    const contactId = req.params.id
    const result = database.deleteOne(contactId);
    if (result) {
      res.status(200).json({ message: "Contact deleted successfully", result})
    }
  } catch (error) {
    res.status(500).json({message: "Error updating contact", error: error.message});
  }
};


module.exports = { getAllContacts, getContact, createContact, updateContact, deleteContact };