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

    console.log("Login request received");

    const user = await Userdb.findOne({ email: email });
    console.log(user);
    

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    if (user.password !== password && user.email !== email) {
      return res.status(401).json({
        message: "Invalid password"
      });
    }

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