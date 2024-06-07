const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,  // Ensure name is required
    },
    email: {
      type: String,
      required: true,  // Ensure email is required
      match: [/.+\@.+\..+/, 'Please fill a valid email address'],  // Simple email validation
    },
    phone: {
      type: String,
      required: true,  // Ensure phone is required
    },
    propertyData: {
      type: Object,  // Define propertyData as an object
      required: true,  // Ensure propertyData is required
    },
  },
  { timestamps: true }
);

const ContactModel = mongoose.model('Contact', contactSchema);

module.exports = ContactModel;
