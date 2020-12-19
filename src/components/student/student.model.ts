import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  cohort: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cohort',
    required: true
  },
  coach_tp: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Coachtp',
    required: true
  },
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  email_for_intros: {
    type: String,
    required: true
  },
  github: {
    type: String,
    required: true
  },
  linkedin: {
    type: String,
    required: true
  },
  photo: {
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


export default mongoose.model("Student", schema);