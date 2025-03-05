// const Referral = require('../models/Referral');

// exports.storeReferralData = async (req, res) => {
//   const { userId, referralCode } = req.body;

//   try {
//     // Check if the user has already used 10 referral codes
//     const referralCount = await Referral.countDocuments({ userId });
//     if (referralCount >= 10) {
//       return res.status(400).json({ message: 'Maximum referral limit reached' });
//     }

//     // Check if the referral code is unique
//     const existingReferral = await Referral.findOne({ referralCode });
//     if (existingReferral) {
//       return res.status(400).json({ message: 'Referral code already used' });
//     }

//     // Save the referral code
//     const newReferral = new Referral({ userId, referralCode });
//     await newReferral.save();

//     res.status(201).json({ message: 'Referral code saved successfully' });
//   } catch (err) {
//     res.status(500).json({ message: 'Server error', error: err.message });
//   }
// };


const Referral = require("../models/Referral");

exports.storeReferralData = async (req, res) => {
  const { userId, referralCode } = req.body;

  try {
    // Ensure user has not exceeded the referral limit
    const referralCount = await Referral.countDocuments({ userId });
    if (referralCount >= 10) {
      return res.status(400).json({ message: "Maximum referral limit reached" });
    }

    // Ensure referral code is unique
    const existingReferral = await Referral.findOne({ referralCode });
    if (existingReferral) {
      return res.status(400).json({ message: "Referral code already used" });
    }

    // Ensure user doesn't reuse previous codes
    const userHasUsedCode = await Referral.findOne({ userId, referralCode });
    if (userHasUsedCode) {
      return res.status(400).json({ message: "You cannot reuse a previous referral code." });
    }

    // Save the referral code
    const newReferral = new Referral({ userId, referralCode });
    await newReferral.save();

    res.status(201).json({ message: "Referral code saved successfully", referral: newReferral });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
