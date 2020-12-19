import store from './postulation.store';
import { IPostulation } from './postulation.interface';
import { IPromiseResult } from '../../network/network.interface';

const get = (_id: string): Promise<IPromiseResult> => {
  return new Promise(async (resolve, reject) => {
    try {
      const postulation = await store.get(_id);
      const result: IPromiseResult = postulation
        ? { data: { postulation }, code: 200, status: "success" }
        : { data: { message: "Postulación no encontrada" }, code: 404, status: "error" };
      resolve(result);
    } catch (error) {
      reject("[404] [Postulación no encontrada]");
    }
  });
};

const create = (iPostulation: IPostulation): Promise<IPromiseResult> => {
  return new Promise(async (resolve, reject) => {
    try {
      const postulation = await store.create(iPostulation);
      const result: IPromiseResult = postulation
        ? { data: { postulation }, code: 201, status: "success" }
        : { data: { message: "Postulación inválida" }, code: 400, status: "error" };
      resolve(result);
    } catch (error) {
      reject("[400] [Postulación inválida]");
    }
  });
};

const list = (query: any): Promise<IPromiseResult> => {
  return new Promise(async (resolve, reject) => {
    try {
      const { length, postulations } = await store.list(query);
      const result: IPromiseResult = { data: { length, postulations }, code: 200, status: "success" };
      resolve(result);
    } catch (error) {
      reject("[400] [Postulaciones inválidas]");
    }
  });
};

const patch = async (_id: string, iPostulation: IPostulation): Promise<IPromiseResult> => {
  return new Promise(async (resolve, reject) => {
    try {
      const updated = await store.patch(_id, iPostulation);
      const result: IPromiseResult = updated
        ? { data: { updated }, code: 200, status: "success" }
        : { data: { message: "Postulación inválida" }, code: 404, status: "error" };
      resolve(result);
    } catch (error) {
      reject("Postulación inválida");
    }
  });
};

const remove = (id: string): Promise<IPromiseResult> => {
  return new Promise(async (resolve, reject) => {
    try {
      const removed = await store.remove(id);
      const result: IPromiseResult = removed
        ? { data: { removed }, code: 200, status: "success" }
        : { data: { message: "Postulación inválida" }, code: 400, status: "error" };
      resolve(result);
    } catch (error) {
      reject("[400] [Postulación inválida]");
    }
  });
};

export default { create, get, list, patch, remove };