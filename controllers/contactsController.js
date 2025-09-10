require("dotenv").config();
const database = require("../database/contacts.js");


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


module.exports = { getAllContacts, getContact };