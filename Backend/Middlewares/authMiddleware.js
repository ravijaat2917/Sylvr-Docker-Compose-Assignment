import JWT from "jsonwebtoken";
import userModel from "../Models/userModel.js";

export const requireSignin = (req, res, next) => {
  try {
    const decode = JWT.verify(req.token, process.env.JWT_SECRET);
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};