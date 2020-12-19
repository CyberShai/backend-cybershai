import Model from './company.model';
import genericValidators from '../../utils/validators.utils';

import { ICompany } from './company.interface';

const get = async (_id: string) => {
  try {
    const company: any = await Model
      .findOne({ _id, active: true })
      //.populate TODO: agregar populate
      .exec();
    if (company) {
      const result: ICompany = { ...company._doc };
      return result;
    }
    return null;
  } catch (error) {
    return null;
  }
};

const create = async (iCompany: ICompany) => {
  try {
    if (isValid(iCompany)) {
      const company: any = await getModel(iCompany).save();
      if (company) {
        const result: ICompany = { ...company._doc };
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
    const company: any[] = await Model
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

    if (company) {
      const result: ICompany[] = [];
      company.forEach(company => {
        result.push({ ...company._doc });
      });
      return { length, companies: result };
    }
    return { length: 0, companies: [] };
  } catch (error) {
    return { length: 0, companies: [] };
  }
}

const patch = async (_id: string, iCompany: Partial<ICompany>) => {
  try {
    const company = await get(_id);
    if (company && isPartialValid(iCompany)) {
      beforeUpdate(iCompany);
      await Model.updateOne({ _id }, iCompany).exec();
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

const remove = async (_id: string) => {
  try {
    const company = await get(_id);
    if (company) {
      await Model.updateOne({ _id }, { active: false }).exec();
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
}

const isValid = (iCompany: ICompany) => {
  const errors: string[] = [];
  genericValidators.form.textHTML("name", iCompany.name, errors);
  genericValidators.form.textHTML("description", iCompany.description, errors);
  genericValidators.form.textHTML("website", iCompany.website, errors);
  genericValidators.form.textHTML("logo", iCompany.logo, errors);
  return errors.length === 0;
};

const getModel = (iCompany: ICompany) => {
  setDefaultValues(iCompany);
  return new Model({ ...iCompany });
}

const setDefaultValues = (ICompany: ICompany) => {
  ICompany.created = new Date();
  ICompany.modified = new Date();
  ICompany.active = true;
};

const beforeUpdate = (iCompany: Partial<ICompany>) => {
  delete iCompany._id;
  iCompany.modified = new Date();
};

const isPartialValid = (iCompany: Partial<ICompany>) => {
  const errors: string[] = [];
  const keys = Object.keys(iCompany);
  keys.forEach(key => {
    switch (key) {
      case "name":
        genericValidators.form.textField("name", (iCompany as ICompany).name, errors);
        break;
      case "description":
        genericValidators.form.textField("description", (iCompany as ICompany).description, errors);
        break;
      case "website":
        genericValidators.form.textField("website", (iCompany as ICompany).website, errors);
        break;
      case "logo":
        genericValidators.form.textField("logo", (iCompany as ICompany).logo, errors);
        break;
    }
  });
  return errors.length === 0;
};

export default { get, create, list, patch, remove }

