import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  vacancy_category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'VacancyCategory',
    required: true
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  responsibilities: {
    type: String,
    required: true
  },
  min_salary: {
    type: Number,
    required: true
  },
  max_salary: {
    type: Number,
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


export default mongoose.model("Vacancy", schema);