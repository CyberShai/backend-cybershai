import mongoose from 'mongoose';

const schema = new mongoose.Schema({  
  status: {
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


export default mongoose.model("PostulationStatus", schema);