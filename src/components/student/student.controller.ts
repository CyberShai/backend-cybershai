import store from './student.store';
import { IStudent } from './student.interface';
import { IPromiseResult } from '../../network/network.interface';

const get = (_id: string): Promise<IPromiseResult> => {
  return new Promise(async (resolve, reject) => {
    try {
      const student = await store.get(_id);
      const result: IPromiseResult = student
        ? { data: { student }, code: 200, status: "success" }
        : { data: { message: "Estudiante no encontrado" }, code: 404, status: "error" };
      resolve(result);
    } catch (error) {
      reject("[404] [Estudiante no encontrado]");
    }
  });
};

const create = (iStudent: IStudent): Promise<IPromiseResult> => {
  return new Promise(async (resolve, reject) => {
    try {
      const student = await store.create(iStudent);
      const result: IPromiseResult = student
        ? { data: { student }, code: 201, status: "success" }
        : { data: { message: "Estudiante inválido" }, code: 400, status: "error" };
      resolve(result);
    } catch (error) {
      reject("[400] [Estudiante inválido]");
    }
  });
};

const list = (query: any): Promise<IPromiseResult> => {
  return new Promise(async (resolve, reject) => {
    try {
      const { length, students } = await store.list(query);
      const result: IPromiseResult = { data: { length, students }, code: 200, status: "success" };
      resolve(result);
    } catch (error) {
      reject("[400] [Estudiantes inválidos]");
    }
  });
};

const patch = async (_id: string, iStudent: IStudent): Promise<IPromiseResult> => {
  return new Promise(async (resolve, reject) => {
    try {
      const updated = await store.patch(_id, iStudent);
      const result: IPromiseResult = updated
        ? { data: { updated }, code: 200, status: "success" }
        : { data: { message: "Estudiante inválido" }, code: 404, status: "error" };
      resolve(result);
    } catch (error) {
      reject("Estudiante inválido");
    }
  });
};

const remove = (id: string): Promise<IPromiseResult> => {
  return new Promise(async (resolve, reject) => {
    try {
      const removed = await store.remove(id);
      const result: IPromiseResult = removed
        ? { data: { removed }, code: 200, status: "success" }
        : { data: { message: "Estudiante inválido" }, code: 400, status: "error" };
      resolve(result);
    } catch (error) {
      reject("[400] [Estudiate inválido]");
    }
  });
};

export default { create, get, list, patch, remove };