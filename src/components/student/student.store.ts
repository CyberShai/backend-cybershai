import Model from './student.model';
import genericValidators from '../../utils/validators.utils';

import { IStudent } from './student.interface';

const get = async (_id: string) => {
  try {
    const student: any = await Model
      .findOne({ _id, active: true })
      //.populate TODO: agregar populate
      .exec();
    if (student) {
      const result: IStudent = { ...student._doc };
      return result;
    }
    return null;
  } catch (error) {
    return null;
  }
};

const create = async (iStudent: IStudent) => {
  try {
    if (isValid(iStudent)) {
      const student: any = await getModel(iStudent).save();
      if (student) {
        const result: IStudent = { ...student._doc };
        return result;
      }
      return null;
    }
    return null;
  } catch (error) {
    return null;
  }
}

const list = async (query: any) => {
  try {
    // const filters = getFilters(query) TODO: agregar filtros
    const students: any[] = await Model
      .find({ active: true })
      //.and(filters)
      //.sort(filters.sort)
      //.skip(filters.skip)
      //.limit(filters.limit)
      //.populate("Portfolio", "_id Path Tags PreviewImage Created", PortfolioModel)
      .exec();

    const length = await Model
      .find({ active: true })
      //.and(filters)
      .countDocuments()
      .exec();

    if (students) {
      const result: IStudent[] = [];
      students.forEach(student => {
        result.push({ ...student._doc });
      });
      return { length, students: result };
    }
    return { length: 0, students: [] };
  } catch (error) {
    return { length: 0, students: [] };
  }
}

const patch = async (_id: string, iStudent: Partial<IStudent>) => {
  try {
    const student = await get(_id);
    if (student && isPartialValid(iStudent)) {
      beforeUpdate(iStudent);
      await Model.updateOne({ _id }, iStudent).exec();
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

const remove = async (_id: string) => {
  try {
    const student = await get(_id);
    if (student) {
      await Model.updateOne({ _id }, { active: false }).exec();
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
}

const isValid = (iStudent: IStudent) => {
  const errors: string[] = [];
  genericValidators.form.textField("cohort", iStudent.cohort, errors);
  genericValidators.form.textField("coach_tp", iStudent.coach_tp, errors);
  genericValidators.form.textField("first_name", iStudent.first_name, errors);
  genericValidators.form.textField("last_name", iStudent.last_name, errors);
  genericValidators.form.email("email", iStudent.email, errors);
  genericValidators.form.email("email_for_intros", iStudent.email_for_intros, errors);
  genericValidators.form.textField("github", iStudent.github, errors);
  genericValidators.form.textField("linkedin", iStudent.linkedin, errors);
  genericValidators.form.textField("photo", iStudent.github, errors);
  return errors.length === 0;
};

const getModel = (iStudent: IStudent) => {
  setDefaultValues(iStudent);
  return new Model({ ...iStudent });
}

const setDefaultValues = (iStudent: IStudent) => {
  iStudent.created = new Date();
  iStudent.modified = new Date();
  iStudent.active = true;
};

const beforeUpdate = (iStudent: Partial<IStudent>) => {
  delete iStudent._id;
  delete iStudent.cohort;
  delete iStudent.coach_tp;
  iStudent.modified = new Date();
};

const isPartialValid = (iStudent: Partial<IStudent>) => {
  const errors: string[] = [];
  const keys = Object.keys(iStudent);
  keys.forEach(key => {
    switch (key) {
      case "cohort":
        genericValidators.form.textField("cohort", (iStudent as IStudent).cohort, errors);
        break;
      case "coach_tp":
        genericValidators.form.textField("coach_tp", (iStudent as IStudent).coach_tp, errors);
        break;
      case "first_name":
        genericValidators.form.textField("first_name", (iStudent as IStudent).first_name, errors);
        break;
      case "last_name":
        genericValidators.form.textField("last_name", (iStudent as IStudent).last_name, errors);
        break;
      case "email":
        genericValidators.form.email("email", (iStudent as IStudent).email, errors);
        break;
      case "email_for_intros":
        genericValidators.form.email("email_for_intros", (iStudent as IStudent).email_for_intros, errors);
        break;
      case "github":
        genericValidators.form.textField("github", (iStudent as IStudent).github, errors);
        break;
      case "linkedin":
        genericValidators.form.textField("linkedin", (iStudent as IStudent).linkedin, errors);
        break;
      case "photo":
        genericValidators.form.textField("photo", (iStudent as IStudent).github, errors);
        break;
    }
  });
  return errors.length === 0;
};

export default { get, create, list, patch, remove }

