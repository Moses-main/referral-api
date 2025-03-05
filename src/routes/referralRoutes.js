const express = require('express');
const referralController = require('../controllers/referralController');

const router = express.Router();

router.post('/', referralController.storeReferralData);

module.exports = router;
