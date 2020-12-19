import store from './company.store';
import { ICompany } from './company.interface';
import { IPromiseResult } from '../../network/network.interface';

const get = (_id: string): Promise<IPromiseResult> => {
  return new Promise(async (resolve, reject) => {
    try {
      const company = await store.get(_id);
      const result: IPromiseResult = company
        ? { data: { company }, code: 200, status: "success" }
        : { data: { message: "Empresa no encontrada" }, code: 404, status: "error" };
      resolve(result);
    } catch (error) {
      reject("[404] [Empresa no encontrada]");
    }
  });
};

const create = (iCompany: ICompany): Promise<IPromiseResult> => {
  return new Promise(async (resolve, reject) => {
    try {
      const company = await store.create(iCompany);
      const result: IPromiseResult = company
        ? { data: { company }, code: 201, status: "success" }
        : { data: { message: "Compañia inválida" }, code: 400, status: "error" };
      resolve(result);
    } catch (error) {
      reject("[400] [Compañia inválida]");
    }
  });
};

const list = (query: any): Promise<IPromiseResult> => {
  return new Promise(async (resolve, reject) => {
    try {
      const { length, companies } = await store.list(query);
      const result: IPromiseResult = { data: { length, companies }, code: 200, status: "success" };
      resolve(result);
    } catch (error) {
      reject("[400] [Compañia inválida]");
    }
  });
};

const patch = async (_id: string, iCompany: ICompany): Promise<IPromiseResult> => {
  return new Promise(async (resolve, reject) => {
    try {
      const updated = await store.patch(_id, iCompany);
      const result: IPromiseResult = updated
        ? { data: { updated }, code: 200, status: "success" }
        : { data: { message: "Compañia inválida" }, code: 404, status: "error" };
      resolve(result);
    } catch (error) {
      reject("Compañia inválida");
    }
  });
};

const remove = (id: string): Promise<IPromiseResult> => {
  return new Promise(async (resolve, reject) => {
    try {
      const removed = await store.remove(id);
      const result: IPromiseResult = removed
        ? { data: { removed }, code: 200, status: "success" }
        : { data: { message: "Compañia inválida" }, code: 400, status: "error" };
      resolve(result);
    } catch (error) {
      reject("[400] [Compañia inválida]");
    }
  });
};

export default { create, get, list, patch, remove };