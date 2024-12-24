const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const UserModel = require('../models/user.model.js')
const { createResponse } = require('../utils/common.util.js')

const registerUser = async (req, res) => {
  try {
    const { fullname, email, password, phoneNumber, role } = req.body

    /* Check whether any field is empty or not */
    if (!fullname || !email || !password || !phoneNumber || !role) {
      const response = createResponse(400, 'Something is missing.', false)
      res.status(response.status).json(response.json)
    }

    /* Check whether input user detail already exist or not */
    const user = await UserModel.findOne({ email })
    if (user) {
      const response = createResponse(400, 'User already exist with this email.', false)
      res.status(response.status).json(response.json)
    }

    /* creating hash password */
    const hashPassword = await bcrypt.hash(password, 10)

    await UserModel.create({
      fullname,
      email,
      password: hashPassword,
      phoneNumber,
      role,
    })

    const response = createResponse(201, 'Account created Successfully', true)
    res.status(response.status).json(response.json)
  } catch (error) {
    console.log('REGISTER ', error)
  }
}

const loginUser = async (req, res) => {
  try {
    const { email, password, role } = req.body

    /* Check whether any field is empty or not */
    if (!email || !password || !role) {
      const response = createResponse(400, 'Something is missing.', false)
      res.status(response.status).json(response.json)
    }

    /* Check whether input user detail correct or incorrect */
    let user = await UserModel.findOne({ email })
    if (!user) {
      return res.status(400).json({
        message: 'Incorrect email or password.',
        success: false,
      })
    }

    /* check password is matched or not */
    const isPasswordMatch = await bcrypt.compare(password, user.password)

    if (!isPasswordMatch) {
      return res.status(400).json({
        message: 'Incorrect email or password.',
        success: false,
      })
    }

    /* check user role is correct or not */
    if (role !== user.role) {
      return res.status(400).json({
        message: "Account doesn't exist with current role.",
        success: false,
      })
    }

    const tokenData = {
      userId: user._id,
    }
    const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY, {
      expiresIn: '1d',
    })

    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      password: user.password,
      phoneNumber: user.phoneNumber,
      role: user.role,
    }

    return res
      .status(200)
      .cookie('token', token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: 'strict',
      })
      .json({
        message: `Welcome back ${user.fullname}`,
        user,
        success: true,
      })
  } catch (error) {
    console.log('LOGIN ', error)
  }
}

const logoutUser = async (req, res) => {
  try {
    return res.status(200).cookie('token', '', { maxAge: 0 }).json({
      message: 'logout successfully',
      success: true,
    })
  } catch (error) {
    console.log('LOGOUT', error)
  }
}

const updateProfile = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, bio, skills } = req.body
    const file = req.file
    /* CLOUDINARY */

    let skillsList
    if (skills) skillsList = skills.split(',')
    const userId = req.id
    let user = await UserModel.findById(userId)

    if (!user) {
      return res.status(400).json({
        message: 'User not found.',
        success: false,
      })
    }

    /* Updating User details */
    if (fullname) user.fullname = fullname
    if (email) user.email = email
    if (phoneNumber) user.phoneNumber = phoneNumber
    if (bio) user.profile.bio = bio
    if (skills) user.profile.skills = skillsList

    await user.save()

    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      password: user.password,
      phoneNumber: user.phoneNumber,
      role: user.role,
    }

    return res.status(200).json({
      message: 'Profile Updated Successfully',
      user,
      success: true,
    })
  } catch (error) {
    console.log('UPDATE PROFILE ', error)
  }
}

module.exports = {
  loginUser,
  logoutUser,
  registerUser,
  updateProfile,
}