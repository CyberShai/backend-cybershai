import Model from './postulation-closed.model';
import genericValidators from '../../utils/validators.utils';

import { IPostulationClosed } from './postulation-closed.interface';

const get = async (_id: string) => {
  try {
    const postulationClosed: any = await Model
      .findOne({ _id, active: true })
      //.populate TODO: agregar populate
      .exec();
    if (postulationClosed) {
      const result: IPostulationClosed = { ...postulationClosed._doc };
      return result;
    }
    return null;
  } catch (error) {
    return null;
  }
};

const create = async (iPostulationClosed: IPostulationClosed) => {
  try {
    if (isValid(iPostulationClosed)) {
      const postulationClosed: any = await getModel(iPostulationClosed).save();
      if (postulationClosed) {
        const result: IPostulationClosed = { ...postulationClosed._doc };
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
    const postulations: any[] = await Model
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

    if (postulations) {
      const result: IPostulationClosed[] = [];
      postulations.forEach(postulation => {
        result.push({ ...postulation._doc });
      });
      return { length, postulations_closed: result };
    }
    return { length: 0, postulations_closed: [] };
  } catch (error) {
    return { length: 0, postulations_closed: [] };
  }
}

const patch = async (_id: string, iPostulationClosed: Partial<IPostulationClosed>) => {
  try {
    const postulationClosed = await get(_id);
    if (postulationClosed && isPartialValid(iPostulationClosed)) {
      beforeUpdate(iPostulationClosed);
      await Model.updateOne({ _id }, iPostulationClosed).exec();
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

const remove = async (_id: string) => {
  try {
    const postulationClosed = await get(_id);
    if (postulationClosed) {
      await Model.updateOne({ _id }, { active: false }).exec();
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
}

const isValid = (iPostulationClosed: IPostulationClosed) => {
  const errors: string[] = [];
  genericValidators.form.textField("postulation", iPostulationClosed.postulation, errors);
  genericValidators.form.number("salary", iPostulationClosed.salary, errors);
  genericValidators.form.textArea("contract", iPostulationClosed.contract, errors);
  genericValidators.form.textHTML("advice", iPostulationClosed.advice, errors);
  genericValidators.form.textHTML("feedback", iPostulationClosed.feedback, errors);
  return errors.length === 0;
};

const getModel = (iPostulationClosed: IPostulationClosed) => {
  setDefaultValues(iPostulationClosed);
  return new Model({ ...iPostulationClosed });
}

const setDefaultValues = (iPostulationClosed: IPostulationClosed) => {
  iPostulationClosed.created = new Date();
  iPostulationClosed.modified = new Date();
  iPostulationClosed.active = true;
};

const beforeUpdate = (iPostulationClosed: Partial<IPostulationClosed>) => {
  delete iPostulationClosed._id;
  iPostulationClosed.modified = new Date();
};

const isPartialValid = (iPostulationClosed: Partial<IPostulationClosed>) => {
  const errors: string[] = [];
  const keys = Object.keys(iPostulationClosed);
  keys.forEach(key => {
    switch (key) {
      case "postulation":
        genericValidators.form.textField("postulation", (iPostulationClosed as IPostulationClosed).postulation, errors);
        break
      case "salary":
        genericValidators.form.number("salary", (iPostulationClosed as IPostulationClosed).salary, errors);
        break
      case "contract":
        genericValidators.form.textArea("contract", (iPostulationClosed as IPostulationClosed).contract, errors);
        break
      case "advice":
        genericValidators.form.textHTML("advice", (iPostulationClosed as IPostulationClosed).advice, errors);
        break
      case "feedback":
        genericValidators.form.textHTML("feedback", (iPostulationClosed as IPostulationClosed).feedback, errors);
        break;
    }
  });
  return errors.length === 0;
};

export default { get, create, list, patch, remove }

