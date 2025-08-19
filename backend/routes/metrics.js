const express = require('express');
const router = express.Router();
const Metric = require('../models/Metric');

router.get('/', async (req, res) => {
  try {
    let metric = await Metric.findOne().sort({ _id: -1 });

    // If no metric exists, insert a default one
    if (!metric) {
      const defaultMetric = new Metric({
        deploymentFrequency: 20,
        changeFailureRate: "5",
        meanLeadTime: "3 days",
        securityVulnerabilities: 4,
        complianceStatus: "Compliant"
      });

      await defaultMetric.save();
      metric = defaultMetric;
    }

    res.json(metric);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
