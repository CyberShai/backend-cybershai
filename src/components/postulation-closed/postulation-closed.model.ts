import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  postulation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Postulation',
    required: true
  },
  salary: {
    type: Number,
    required: true
  },
  contract: {
    type: String,
    required: true
  },
  advice: {
    type: String,
    required: true
  },
  feedback: {
    type: String,
    required: true
  },
  start_date: {
    type: Date,
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


export default mongoose.model("PostulationsClosed", schema);