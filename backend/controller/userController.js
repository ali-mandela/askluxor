const { errorHandler } = require("../config/error");
const ContactModel = require("../models/contactModel");
const EnquiryModel = require("../models/enquiryModel");

module.exports.enquiryController = async (req, res) => {
    const formData = req.body;
 
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
        return res.status(400).json({
            success: false,
            message: 'Name, email, and message are required fields.'
        });
    }

    try { 
        const newEnquiry = new EnquiryModel(formData);
        await newEnquiry.save();

        return res.status(201).json({
            success: true,
            message: 'Enquiry submitted successfully.'
        });
    } catch (error) {
        console.error(error);
        errorHandler(error.code, error.message);
        return res.status(500).json({
            success: false,
            message: 'An error occurred while submitting the enquiry.'
        });
    }
};

module.exports.contactAgentController = async (req, res) => {
    const { name, email, phone,  } = req.body.formData; 
    const {data} = req.body;


    try { 
        const newContact = new ContactModel({
            name,
            email,
            phone,
            propertyData: data
        });
        await newContact.save();

        return res.status(201).json({
            success: true,
            message: 'Thank you for your enquiry! Your submission has been received successfully. Our agent will get back to you shortly.'
        });
    } catch (error) {
        errorHandler(error.code, error.message);
    }
};