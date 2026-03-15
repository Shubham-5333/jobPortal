const { default: Userdb } = require("../models/userModel")



exports.createUser = async (req, res) => {
  console.log("hiiiiiiiiiiiiiii");
  try {
    const { name, email, phone, course, password } = req.body;


    const user = new Userdb({
      name,
      email,
      phone,
      course,
      password
    })
    // req.session.data = user

    await user.save()
    res.status(201).json({
      message: "User Registered Successfully",
    })
  } catch (error) {
    console.log("register.js", error);
  }
}

exports.loginUser = async (req, res) => {

  const { email, password } = req.body;

  try {

    const user = await Userdb.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    if (user.password !== password) {
      return res.status(401).json({
        message: "Invalid password"
      });
    }

    // Storing sessios
    req.session.user = user._id;

    console.log("Session after login:", req.session);

    res.status(200).json({
      message: "Login successful",
      user
    });

  } catch (error) {

    console.log("Login error", error);

    res.status(500).json({
      message: "Server error"
    });

  }
};


exports.getProfile = async (req, res) => {

  console.log("Session:", req.session);

  try {

    const userId = req.session.user;

    if (!userId) {
      return res.status(401).json({ message: "Not logged in" });
    }

    const user = await Userdb.findById(userId);

    res.status(200).json(user);

  } catch (error) {
    res.status(500).json({
      message: "Error fetching profile"
    });
  }

};

exports.profileUpdate = async (req, res) => {
  console.log("profile upda", req.body.image);

  try {

    const userId = req.session.user;

    if (!userId) {
      return res.status(401).json({ message: "Not logged in" });
    }

    const { name, email, image } = req.body;

    const updatedUser = await Userdb.findByIdAndUpdate(
      userId,
      { name, email, image },
      { returnDocument: "after" }
    );

    res.json({
      message: "Profile updated",
      user: updatedUser
    });

  } catch (error) {

    console.log("Profile update error", error);

    res.status(500).json({
      message: "Server error"
    });

  }

};