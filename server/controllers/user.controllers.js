const UserModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  try {
    const { fullname, email, password, phoneNumber, role } = req.body;

    /* Check whether any field is empty or not */
    if (!fullname || !email || !password || !phoneNumber || !role) {
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }

    /* Check whether input user detail already exist or not */
    const user = await UserModel.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User already exist with this email.",
        success: false,
      });
    }

    /* creating hash password */
    const hashPassword = await bcrypt.hash(password, 10);

    await UserModel.create({
      fullname,
      email,
      password: hashPassword,
      phoneNumber,
      role,
    });

    return res.status(201).json({
      message: "Account created Successfully",
      success: true,
    });
  } catch (error) {
    console.log("REGISTER ", error);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    /* Check whether any field is empty or not */
    if (!email || !password || !role) {
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }

    /* Check whether input user detail correct or incorrect */
    let user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Incorrect email or password.",
        success: false,
      });
    }

    /* check password is matched or not */
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Incorrect email or password.",
        success: false,
      });
    }

    /* check user role is correct or not */
    if (role !== user.role) {
      return res.status(400).json({
        message: "Account doesn't exist with current role.",
        success: false,
      });
    }

    const tokenData = {
      userId: user._id,
    };
    const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });

    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      password: user.password,
      phoneNumber: user.phoneNumber,
      role: user.role,
    };

    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
      })
      .json({
        message: `Welcome back ${user.fullname}`,
        user,
        success: true,
      });
  } catch (error) {
    console.log("LOGIN ", error);
  }
};

const logoutUser = async (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "logout successfully",
      success: true,
    });
  } catch (error) {
    console.log("LOGOUT", error);
  }
};

const updateProfile = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, bio, skills } = req.body;
    const file = req.file;

    /* Check whether any field is empty or not */
    if (!fullname || !email || !phoneNumber || !bio || !skills) {
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }

    /* CLOUDINARY */
    
    const skillsList = skills.split(",");
    const userId = req.id;
    let user = await UserModel.findById(userId);

    if (!user) {
      return res.status(400).json({
        message: "User not found.",
        success: false,
      });
    }

    /* Updating User details */

    user.fullname = fullname;
    user.email = email;
    user.phoneNumber = phoneNumber;
    user.profile.bio = bio;
    user.profile.skills = skillsList;

    await user.save();

    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      password: user.password,
      phoneNumber: user.phoneNumber,
      role: user.role,
    };

    return res.status(200).json({
      message: "Profile Updated Successfully",
      user,
      success: true,
    });
  } catch (error) {
    console.log("UPDATE PROFILE ", error);
  }
};

module.exports = {
  loginUser,
  logoutUser,
  registerUser,
  updateProfile,
};
