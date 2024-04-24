const mongoose = require('mongoose');

const campGroundSchema = new mongoose.Schema({
    title: { type: String },
    price: { type: String},
    description: { type: String},
    location: { type: String },
    // Add more fields as per your product requirements
});

module.exports = mongoose.model('camp-booking', campGroundSchema);
