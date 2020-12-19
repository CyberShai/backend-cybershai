import mongoose from 'mongoose';

const schema = new mongoose.Schema({  
  name: {
    type: String,
    required: Boolean
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


export default mongoose.model("Cohort", schema);