const mongoose = require('mongoose');

const tilingsSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  upload_date: {
    type: Date,
    default: Date.now,
  },
});

const Tilings = mongoose.model('Tilings', tilingsSchema);

module.exports = Tilings;