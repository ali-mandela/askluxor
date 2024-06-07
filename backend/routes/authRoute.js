const express = require('express');
const {
    registerController,
    loginController,
    getUserController,
    getAllAgents,
    getAllAgentsToverfiy,
    getTopAgents,
    verifyAgentController,
    updateProfiletController,
    getAgentDataController
} = require('../controller/authController');
const {errorHandler} = require('../config/error');
const {verifyToken} = require('../config/utils');
const ExpressFormidable = require('express-formidable')
const {imageUploadController} = require('../config/imageUpload');
const router = express.Router();

router.post('/register', registerController)
router.post('/login', loginController)
router.get('/get-user', verifyToken, getUserController);
router.get('/all-agents', getAllAgents)
router.get('/top-agents', getTopAgents)
router.get('/agents-Verify', verifyToken, getAllAgentsToverfiy)
router.put('/verify/:id', verifyToken, verifyAgentController)
router.put('/update', verifyToken, updateProfiletController)
// Agents
router.get('/get-agent/:id', getAgentDataController)

router.post('/upload', ExpressFormidable(), imageUploadController)
module.exports = router
