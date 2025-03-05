const express = require('express');


const referralController = require('../controllers/refererralController');

const router = express.Router();

router.post('/', referralController.storeReferralData);

module.exports = router;
