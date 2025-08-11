const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  service: {
    type: String,
    
  },
  name: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  descript: {
    type: String,
  },
  budget: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Client = mongoose.model('Client', clientSchema);
module.exports = Client;
