const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema(
  {
    firstName: {
      type: String, 
    },
    lastName: {
      type: String,
      
    },
    email: {
      type: String,
      
    },
    message: {
      type: String,
      
    }, 
  },
  { timestamps: true }
);

const EnquiryModel = mongoose.model('Enquiry', enquirySchema);

module.exports = EnquiryModel;