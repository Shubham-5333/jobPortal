import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    company: {
      type: String,
      required: true,
      trim: true
    },
    location: {
      type: String,
      required: true
    },
    category: {
      type: String
    },
    salary: {
      type: String
    },
    description: {
      type: String
    },
    link: {
      type: String,
      required: true
    },
    source: {
      type: String
    }
  },
  {
    timestamps: true
  }
);
const Jobsdb = mongoose.model("Job", jobSchema);

export default Jobsdb