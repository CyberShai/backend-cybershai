import store from './postulation-closed.store';
import { IPostulationClosed } from './postulation-closed.interface';
import { IPromiseResult } from '../../network/network.interface';

const get = (_id: string): Promise<IPromiseResult> => {
  return new Promise(async (resolve, reject) => {
    try {
      const postulation_closed = await store.get(_id);
      const result: IPromiseResult = postulation_closed
        ? { data: { postulation_closed }, code: 200, status: "success" }
        : { data: { message: "Postulación no encontrada" }, code: 404, status: "error" };
      resolve(result);
    } catch (error) {
      reject("[404] [Postulación no encontrada]");
    }
  });
};

const create = (iPostulationClosed: IPostulationClosed): Promise<IPromiseResult> => {
  return new Promise(async (resolve, reject) => {
    try {
      const postulation_closed = await store.create(iPostulationClosed);
      const result: IPromiseResult = postulation_closed
        ? { data: { postulation_closed }, code: 201, status: "success" }
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
      const { length, postulations_closed } = await store.list(query);
      const result: IPromiseResult = { data: { length, postulations_closed }, code: 200, status: "success" };
      resolve(result);
    } catch (error) {
      reject("[400] [Postulación inválida]");
    }
  });
};

const patch = async (_id: string, iPostulationClosed: IPostulationClosed): Promise<IPromiseResult> => {
  return new Promise(async (resolve, reject) => {
    try {
      const updated = await store.patch(_id, iPostulationClosed);
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