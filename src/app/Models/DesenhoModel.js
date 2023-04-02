const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const DesenhoSchema = new Schema({
    id: ObjectId,
    name: String,
    type: String,
    category_id: String,
});

const DesenhoModel = mongoose.model('Desenho', DesenhoSchema);

module.exports = DesenhoModel;