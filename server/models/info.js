const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const infoSchema = new Schema({
  operationId: String,
  campaignName: String,
  playerId: Number,
  playerName: String,
  playerEmail: String,
  playerPhone: String,
  playerGender: String,
  playerCity: String,
  playerScore: Number,
  playerCoins: Number,
  rewardName: String,
  rewardCoupon: String,
  taskName: String,
  taskType: String,
  taskCode: String,
  receivedCoins: Number,
  receivedScore: Number,
  operationType: Number,
  operationTypeName: String,
  ip: String,
  userAgent: String,
  createdAt: Date
});

module.exports = mongoose.model('Info', infoSchema);
