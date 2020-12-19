import store from './vacancy.store';
import { IVacancy } from './vacancy.interface';
import { IPromiseResult } from '../../network/network.interface';

const get = (_id: string): Promise<IPromiseResult> => {
  return new Promise(async (resolve, reject) => {
    try {
      const vacancy = await store.get(_id);
      const result: IPromiseResult = vacancy
        ? { data: { vacancy }, code: 200, status: "success" }
        : { data: { message: "Vacante no encontrada" }, code: 404, status: "error" };
      resolve(result);
    } catch (error) {
      reject("[404] [Vacante no encontrada]");
    }
  });
};

const create = (iVacancy: IVacancy): Promise<IPromiseResult> => {
  return new Promise(async (resolve, reject) => {
    try {
      const vacancy = await store.create(iVacancy);
      const result: IPromiseResult = vacancy
        ? { data: { vacancy }, code: 201, status: "success" }
        : { data: { message: "Vacante inválida" }, code: 400, status: "error" };
      resolve(result);
    } catch (error) {
      reject("[400] [Vacante inválida]");
    }
  });
};

const list = (query: any): Promise<IPromiseResult> => {
  return new Promise(async (resolve, reject) => {
    try {
      const { length, vacancies } = await store.list(query);
      const result: IPromiseResult = { data: { length, vacancies }, code: 200, status: "success" };
      resolve(result);
    } catch (error) {
      reject("[400] [Vacantes inválidas]");
    }
  });
};

const patch = async (_id: string, iVacancy: IVacancy): Promise<IPromiseResult> => {
  return new Promise(async (resolve, reject) => {
    try {
      const updated = await store.patch(_id, iVacancy);
      const result: IPromiseResult = updated
        ? { data: { updated }, code: 200, status: "success" }
        : { data: { message: "Vacante inválida" }, code: 404, status: "error" };
      resolve(result);
    } catch (error) {
      reject("Vacante inválida");
    }
  });
};

const remove = (id: string): Promise<IPromiseResult> => {
  return new Promise(async (resolve, reject) => {
    try {
      const removed = await store.remove(id);
      const result: IPromiseResult = removed
        ? { data: { removed }, code: 200, status: "success" }
        : { data: { message: "Vacante inválida" }, code: 400, status: "error" };
      resolve(result);
    } catch (error) {
      reject("[400] [Vacante inválida]");
    }
  });
};

export default { create, get, list, patch, remove };