import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
{
  name: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },

  phone: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true,
    minlength: 6
  },

  course: {
    type: String,
    required: true,
    enum: [
      "MERN Stack Development",
      "Python Developer",
      "Digital Marketing",
      "UI/UX Design",
      "Flutter Development",
    ]
  },

  image: {
    type: String,
  }

},
{
  timestamps: true
}
);

const Userdb = mongoose.model("User", userSchema);

export default Userdb;