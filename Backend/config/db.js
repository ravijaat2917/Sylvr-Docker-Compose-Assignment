import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:admin@cluster.gkwynjs.mongodb.net/SylvrAssignment"
    );
    // console.log(`DataBase Connected Successfully ${mongoose.connection.host}`);
  } catch (error) {
    console.log("MongoDB Server Issue" + error);
  }
};
export default connectDB;
