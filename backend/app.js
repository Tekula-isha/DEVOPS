const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const metricsRoutes = require('./routes/metrics');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/devsecops', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

app.use('/api/metrics', metricsRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
