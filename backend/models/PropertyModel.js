const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    }, 
    baths: {
      type: Number,
      required: true,
    },
    beds: {
      type: Number,
      required: true,
    },
    fullyFurbished: {
      type: Boolean,
      required: true,
    },
    parkingSpot: {
      type: Boolean,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },  
    image: {
      type: String,
      required: true,
    },
    agent: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    },
  },
  { timestamps: true }
);

const PropertyModel = mongoose.model('Property', propertySchema);

module.exports = PropertyModel;