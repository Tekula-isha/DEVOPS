const mongoose = require('mongoose');

const MetricSchema = new mongoose.Schema({
  deploymentFrequency: Number,
  changeFailureRate: String,
  meanLeadTime: String,
  securityVulnerabilities: Number,
  complianceStatus: String
});

module.exports = mongoose.model('Metric', MetricSchema);
