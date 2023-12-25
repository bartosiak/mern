const mongoose = require("mongoose");

const Address = new mongoose.Schema({
    street: String,
    suite: String,
    city: String,
    zipcode: String,
});

// Główny schemat użytkownika
const User = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    address: Address, // Dodaj zagnieżdżony schemat "address"
    phone: String,
    website: String,
});

module.exports = mongoose.model("User", User);
