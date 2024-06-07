const express = require('express');
const { enquiryController, contactAgentController } = require('../controller/userController');
const router = express.Router();


router.post('/enquiry',enquiryController)
router.post('/contact',contactAgentController)
module.exports = router
