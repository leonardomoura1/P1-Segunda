const mongoose = require('mongoose');

async function startDB() {
    await mongoose.connect('mongodb+srv://leonardomoura:a1b2c3d4e5@cluster0.sfsmrvu.mongodb.net/test')
}

module.exports = startDB;