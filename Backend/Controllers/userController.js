import userModel from "./../Models/userModel.js";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const exisitingUser = await userModel.findOne({ email });
    //exisiting user
    if (exisitingUser) {
      return res.status(200).send({
        success: false,
        message: "Already Register please login",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await new userModel({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    }).save();

    res.status(201).send({
      success: true,
      message: "User Register Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "Error in Register", error });
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registerd",
      });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }
    const token = await JWT.sign({ _id: user._id }, 'HUSGDIBWIHWIHDUIWSSC', {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "login successfully",
      user: {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Error in Login", error });
  }
};

export const updateController = async (req, res) => {
  try {
    const { firstName, lastName, email, password, id } = req.fields;

    const hashedPass = await bcrypt.hash(password, 10);

    const user = await userModel.findByIdAndUpdate(id, {
      firstName,
      lastName,
      email,
      password: hashedPass,
    });

    res.status(201).send({ success: true, user });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false });
  }
};

export const getSingleStudentdetails = async (req, res) => {
  try {
    const { token } = req.body;
    const deccode = JWT.decode(token, 'HUSGDIBWIHWIHDUIWSSC');
    const id = deccode._id;
    const user = await userModel.findById(id);
    res.send({ success: true, user });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false });
  }
};