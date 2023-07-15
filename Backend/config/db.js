import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb://mongo-db/SylvrAssignment"
    );
    // console.log(`DataBase Connected Successfully ${mongoose.connection.host}`);
  } catch (error) {
    console.log("MongoDB Server Issue" + error);
  }
};
export default connectDB;
