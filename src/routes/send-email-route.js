const express = require('express');
const router = express.Router();
const sendEmailController = require('../controllers/send-email-controller');

router.post('/send-email', sendEmailController.post);


module.exports = router;