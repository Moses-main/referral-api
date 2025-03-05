const mongoose = require('mongoose');

const referralSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  referralCode: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now }
});

// Ensure a user cannot have more than 10 referral codes
referralSchema.index({ userId: 1, referralCode: 1 }, { unique: true });

module.exports = mongoose.model('Referral', referralSchema);
