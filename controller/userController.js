const userModel = require("../model/userModel");
const userRegister = async (req, res) => {
  try {
    const { name, email, password, phonenumber } = req.body;
    if (!name || !email || !password || !phonenumber) {
      return res.status(403).json({
        message: "please fill all above the detail ?",
      });
    }

    const existingUser = await userModel.findOne({ email: email });
    console.log(existingUser, "existing");
    try {
      if (existingUser) {
        res.status(403).json({
          message: "your are already register please login first",
        });
      }
    } catch (error) {
      console.log(error.message);
    }
    const newUser = await userModel.create({
      name: name,
      email: email,
      password: password,
      phonenumber: phonenumber,
    });
    res.status(201).json({
      message: "you have successfully registerd ",
      data: newUser,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const getAllUser = async (req, res) => {  
  try {
    const allUser = await userModel.find({});
    console.log(allUser, "allUser");
    if (allUser?.length === 0) {
      return res.status(404).json({
        message: "you have no any data",
      });
    }
    res.status(200).json({
      // message : allUser means all data show in postman(pura data ko message ke through postman pe dikha diya)
      message: allUser,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.body;
    const userId = await userModel.findById({ _id: id });
    console.log(userId, "userId");
    if (userId === null) {
      return res.status(403).json({
        message: "User Profile does not exsits",
      });
    }
    res.status(200).json({
      data: userId,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

module.exports = {
  userRegister,
  getAllUser,
  getById,
};
