const PropertyModel = require("../models/PropertyModel");
const userModel = require("../models/userModel");

module.exports.addPropertyController = async (req, res, next) => {
  const AgentId = req.user.id;

  try {
    const newProperty = new PropertyModel({
      ...req.body,
      agent: AgentId
    });

    const savedProperty = await newProperty.save();  
 
    const updatedAgent = await userModel.findByIdAndUpdate(
      AgentId,
      { $inc: { Property: 1 } },  
      { new: true } 
    );

    if (!updatedAgent) { 
      return res.status(404).json({
        success: false,
        message: 'Agent not found.'
      });
    }

    res.status(201).json({
      success: true,
      message: 'Property added successfully',
      property: savedProperty
    });
  } catch (error) {
    return next({
      status: 403,  
      message: error.message
    });
  }
};


// deletePropertyController
 

module.exports.deletePropertyController = async (req, res, next) => {
    const AgentId = req.user.id;
    const propertyId = req.params.id; 
  
    try { 
      const property = await PropertyModel.findById(propertyId);
  
      if (!property) { 
        return res.status(404).json({
          success: false,
          message: 'Property not found'
        });
      }
   
      if (property.agent.toString() !== AgentId) { 
        return res.status(403).json({
          success: false,
          message: 'You are not authorized to delete this property'
        });
      }
   
      await PropertyModel.findByIdAndDelete(propertyId);
   
      res.status(200).json({
        success: true,
        message: 'Property deleted successfully'
      });
    } catch (error) { 
      return next({
        status: 500,
        message: error.message
      });
    }
  };

//   Get signle propertyby ID

module.exports.getPropertyController = async (req, res, next) => {
    const propertyId = req.params.id;
  
    try {
      // Find the property by ID
      const property = await PropertyModel.findById(propertyId).populate('agent', 'name email image bio Property');  
  
      if (!property) { 
        return res.status(404).json({
          success: false,
          message: 'Property not found'
        });
      }
   
      res.status(200).json({
        success: true,
        property: property
      });
    } catch (error) { 
      return next({
        status: 500,
        message: error.message
      });
    }
  };

  module.exports.getAllPropertiesByUserController = async (req, res, next) => {
    const AgentId = req.params.id;
  
    try { 
      const properties = await PropertyModel.find({ agent: AgentId });
  
      if (!properties.length) {
        return res.status(404).json({
          success: false,
          message: 'No properties found for this user'
        });
      }
   
      res.status(200).json({
        success: true,
        properties: properties
      });
    } catch (error) { 
      return next({
        status: 500,
        message: error.message
      });
    }
  };

module.exports.getAllPropertiesController = async (req, res, next) => {
    try { 
      const properties = await PropertyModel.find().populate('agent', 'name email');  
  
      if (!properties.length) {
        return res.status(404).json({
          success: false,
          message: 'No properties found'
        });
      }
   
      res.status(200).json({
        success: true,
        properties: properties
      });
    } catch (error) { 
      return next({
        status: 500,
        message: error.message
      });
    }
  };
  
  module.exports.getTopPropertiesController = async (req, res, next) => {
    try {
      const properties = await PropertyModel.find()
        .sort({ createdAt: -1 }) // Sort by creation date in descending order (newest first)
        .limit(6) // Limit results to the top 6 most recent
        .populate('agent', 'name email bio image'); // Populate agent details
  
      if (!properties.length) {
        return res.status(404).json({
          success: false,
          message: 'No properties found'
        });
      }
  
      res.status(200).json({
        success: true,
        properties: properties
      });
    } catch (error) {
      return next({
        status: 500,
        message: error.message
      });
    }
  };
  
