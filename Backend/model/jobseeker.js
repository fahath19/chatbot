const mongoose = require('mongoose');

const Jobschema = new mongoose.Schema({
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
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Jobseeker = mongoose.model('Jobseeker', Jobschema);
module.exports = Jobseeker;
