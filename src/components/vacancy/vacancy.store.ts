import Model from './vacancy.model';
import VacancyCategoryModel from '../vacancy-category/vacancy-category.model';
import CompanyModel from '../company/company.model';

import genericValidators from '../../utils/validators.utils';

import { IVacancy } from './vacancy.interface';

const get = async (_id: string) => {
  try {
    const vacancy: any = await Model
      .findOne({ _id, active: true })
      .populate("vacancy_category", "_id name", VacancyCategoryModel)
      .populate("company", "_id name", CompanyModel)
      .exec();
    if (vacancy) {
      const result: IVacancy = { ...vacancy._doc };
      return result;
    }
    return null;
  } catch (error) {
    return null;
  }
};

const create = async (iVacancy: IVacancy) => {
  try {
    if (isValid(iVacancy)) {
      const vacancy: any = await getModel(iVacancy).save();
      if (vacancy) {
        const result: IVacancy = { ...vacancy._doc };
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
    const vacancies: any[] = await Model
      .find({ active: true })
      //.and(filters)
      //.sort(filters.sort)
      //.skip(filters.skip)
      //.limit(filters.limit)
      .populate("vacancy_category", "_id name", VacancyCategoryModel)
      .populate("company", "_id name", CompanyModel)
      .exec();

    const length = await Model
      .find({ active: true })
      //.and(filters)
      .countDocuments()
      .exec();

    if (vacancies) {
      const result: IVacancy[] = [];
      vacancies.forEach(vacancy => {
        result.push({ ...vacancy._doc });
      });
      return { length, vacancies: result };
    }
    return { length: 0, vacancies: [] };
  } catch (error) {
    return { length: 0, vacancies: [] };
  }
}

const patch = async (_id: string, iVacancy: Partial<IVacancy>) => {
  try {
    const vacancy = await get(_id);
    if (vacancy && isPartialValid(iVacancy)) {
      beforeUpdate(iVacancy);
      await Model.updateOne({ _id }, iVacancy).exec();
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

const remove = async (_id: string) => {
  try {
    const vacancy = await get(_id);
    if (vacancy) {
      await Model.updateOne({ _id }, { active: false }).exec();
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
}

const isValid = (iVacancy: IVacancy) => {
  const errors: string[] = [];
  genericValidators.form.textField("vacancy_category", iVacancy.vacancy_category, errors);
  genericValidators.form.textField("company", iVacancy.company, errors);
  genericValidators.form.textField("name", iVacancy.name, errors);
  genericValidators.form.textField("description", iVacancy.description, errors);
  genericValidators.form.textField("responsibilities", iVacancy.responsibilities, errors);
  genericValidators.form.positive("min_salary", iVacancy.min_salary, errors);
  genericValidators.form.positive("max_salary", iVacancy.max_salary, errors);
  return errors.length === 0;
};

const getModel = (iVacancy: IVacancy) => {
  setDefaultValues(iVacancy);
  return new Model({ ...iVacancy });
}

const setDefaultValues = (iVacancy: IVacancy) => {
  iVacancy.created = new Date();
  iVacancy.modified = new Date();
  iVacancy.active = true;
};

const beforeUpdate = (iVacancy: Partial<IVacancy>) => {
  delete iVacancy._id;
  delete iVacancy.company;
  delete iVacancy.vacancy_category;
  iVacancy.modified = new Date();
};

const isPartialValid = (iVacancy: Partial<IVacancy>) => {
  const errors: string[] = [];
  const keys = Object.keys(iVacancy);
  keys.forEach(key => {
    switch (key) {
      case "vacancy_category":
        genericValidators.form.textField("vacancy_category", (iVacancy as IVacancy).vacancy_category, errors);
        break;
      case "company":
        genericValidators.form.textField("company", (iVacancy as IVacancy).company, errors);
        break;
      case "name":
        genericValidators.form.textField("name", (iVacancy as IVacancy).name, errors);
        break;
      case "description":
        genericValidators.form.textHTML("description", (iVacancy as IVacancy).description, errors);
        break;
      case "responsibilities":
        genericValidators.form.textHTML("responsibilities", (iVacancy as IVacancy).responsibilities, errors);
        break;
      case "min_salary":
        genericValidators.form.positive("min_salary", (iVacancy as IVacancy).min_salary, errors);
        break;
      case "max_salary":
        genericValidators.form.positive("max_salary", (iVacancy as IVacancy).max_salary, errors);
        break;
    }
  });
  return errors.length === 0;
};

export default { get, create, list, patch, remove }

