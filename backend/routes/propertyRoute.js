const express = require('express');
const {addPropertyController, deletePropertyController, getPropertyController, getAllPropertiesController, getAllPropertiesByUserController, getTopPropertiesController} = require('../controller/propertyController');
const {verifyToken} = require('../config/utils');
const PropertyModel = require('../models/PropertyModel');
const router = express.Router();

router.post('/add-property', verifyToken, addPropertyController);
router.delete('/delete-property/:id', verifyToken, deletePropertyController);
router.get('/get-property/:id', getPropertyController);
router.get('/get-all-properties',getAllPropertiesController);
router.get('/get-Top-properties',getTopPropertiesController);
router.get('/get-properties/:id', getAllPropertiesByUserController );

router.post('/search',  async (req, res, next) => {
    try {
      const {
        type,
        title,
        bedrooms,
        address,
        bathrooms,
        minPrice,
        maxPrice
      } = req.body; 
  
      // Construct the query object based on the provided filters
      const query = {};
  
      if (type) query.type = { $regex: type, $options: 'i' };
      if (title) query.name = { $regex: title, $options: 'i' };
      if (bedrooms) query.beds = bedrooms === '3+' ? { $gte: 3 } : bedrooms;
      if (address) query.address = { $regex: address, $options: 'i' };
      if (bathrooms) query.baths = bathrooms === '3+' ? { $gte: 3 } : bathrooms;
      if (minPrice) query.price = { $gte: parseInt(minPrice) };
      if (maxPrice) {
        query.price = query.price || {};
        query.price.$lte = parseInt(maxPrice);
      }
  
      // Fetch listings from the database based on the constructed query
      const listings = await PropertyModel.find(query);
  
      return res.status(200).json({ response: listings, len:listings.length, success : true });
    } catch (error) {
      next(error);
    }
  });
module.exports = router
