// const mongoose = require("mongoose");
// require("dotenv").config(); // Load environment variables

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//     //   useNewUrlParser: true,
//     //   useUnifiedTopology: true,
//     });

//     console.log("✅ MongoDB Connected...");
//   } catch (error) {
//     console.error("❌ MongoDB Connection Failed:", error.message);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;


const mongoose = require("mongoose");

const connectDB = async (retries = 5, delay = 5000) => {
  for (let i = 0; i < retries; i++) {
    try {
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("MongoDB connected successfully.");
      return;
    } catch (error) {
      console.error(`MongoDB connection failed (Attempt ${i + 1}/${retries}):`, error);
      if (i < retries - 1) {
        await new Promise((resolve) => setTimeout(resolve, delay));
      } else {
        process.exit(1);
      }
    }
  }
};

module.exports = connectDB;
