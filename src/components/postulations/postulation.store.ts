import Model from './postulation.model';
import genericValidators from '../../utils/validators.utils';

import { IPostulation } from './postulation.interface';

const get = async (_id: string) => {
  try {
    const postulation: any = await Model
      .findOne({ _id, active: true })
      //.populate TODO: agregar populate
      .exec();
    if (postulation) {
      const result: IPostulation = { ...postulation._doc };
      return result;
    }
    return null;
  } catch (error) {
    return null;
  }
};

const create = async (iPostulation: IPostulation) => {
  try {
    if (isValid(iPostulation)) {
      const postulation: any = await getModel(iPostulation).save();
      if (postulation) {
        const result: IPostulation = { ...postulation._doc };
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
    const postulation: any[] = await Model
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

    if (postulation) {
      const result: IPostulation[] = [];
      postulation.forEach(postulation => {
        result.push({ ...postulation._doc });
      });
      return { length, postulations: result };
    }
    return { length: 0, postulations: [] };
  } catch (error) {
    return { length: 0, postulations: [] };
  }
}

const patch = async (_id: string, iPostulation: Partial<IPostulation>) => {
  try {
    const postulation = await get(_id);
    if (postulation && isPartialValid(iPostulation)) {
      beforeUpdate(iPostulation);
      await Model.updateOne({ _id }, iPostulation).exec();
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

const remove = async (_id: string) => {
  try {
    const postulation = await get(_id);
    if (postulation) {
      await Model.updateOne({ _id }, { active: false }).exec();
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
}

const isValid = (iPostulation: IPostulation) => {
  const errors: string[] = [];
  genericValidators.form.textField("student", iPostulation.student, errors);
  genericValidators.form.textField("vacant", iPostulation.vacant, errors);
  genericValidators.form.textField("postulation_status", iPostulation.postulation_status, errors);
  return errors.length === 0;
};

const getModel = (iPostulation: IPostulation) => {
  setDefaultValues(iPostulation);
  return new Model({ ...iPostulation });
}

const setDefaultValues = (iPostulation: IPostulation) => {
  iPostulation.created = new Date();
  iPostulation.modified = new Date();
  iPostulation.active = true;
};

const beforeUpdate = (iPostulation: Partial<IPostulation>) => {
  delete iPostulation._id;
  delete iPostulation.student;
  delete iPostulation.vacant;
  delete iPostulation.postulation_status;
  iPostulation.modified = new Date();
};

const isPartialValid = (iPostulation: Partial<IPostulation>) => {
  const errors: string[] = [];
  const keys = Object.keys(iPostulation);
  keys.forEach(key => {
    switch (key) {
      case "student":
        genericValidators.form.textField("student", (iPostulation as IPostulation).student, errors);
        break;
      case "vacant":
        genericValidators.form.textField("vacant", (iPostulation as IPostulation).vacant, errors);
        break;
      case "postulation_status":
        genericValidators.form.textField("postulation_status", (iPostulation as IPostulation).postulation_status, errors);
        break;
    }
  });
  return errors.length === 0;
};

export default { get, create, list, patch, remove }

