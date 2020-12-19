import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Students',
    required: true
  },
  vacant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vacants',
    required: true
  },
  postulation_status: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PostulationStatus',
    required: true
  },
  hired: {
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


export default mongoose.model("Postulation", schema);