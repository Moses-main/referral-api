const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const referralRoutes = require('./routes/referralRoutes');
const connectDB = require("./config/db"); 

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/referrals', referralRoutes);

// Connect to MongoDB
connectDB();

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
