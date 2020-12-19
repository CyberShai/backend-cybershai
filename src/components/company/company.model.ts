import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  website: {
    type: String,
    required: true
  },
  logo: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    required: true
  },
  modified: {
    type: Date,
    required: true
  },
  active: {
    type: Boolean,
    default: true
  },
});


export default mongoose.model("Company", schema);