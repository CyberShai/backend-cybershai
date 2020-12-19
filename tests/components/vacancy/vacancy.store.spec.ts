import store from '../../../src/components/vacancy/vacancy.store';
import database from '../../../src/database';
import { IVacancy } from '../../../src/components/vacancy/vacancy.interface';
import { mockVacancy, badMockVacancy1, badMockVacancy2, badMockVacancy3 } from './vacancy.utils';

describe("Vacancy - store", () => {
  let vacancyId: string;

  beforeAll(() => {
    database.onlyConnect();
  });

  afterAll(() => {
    database.disconnect();
  });

  describe("Create", () => {
    it("Should be create a vacancy", async () => {
      const mock = mockVacancy();
      const result = await store.create(mock);
      expect(result).not.toBeNull();
      if (result) {
        expect(result._id).not.toBeUndefined();
        vacancyId = `${result._id}`;
        console.log({ vacancyId });
      }
    });
    it("Should be return an error - empty fields", async () => {
      const mock = badMockVacancy1();
      const result = await store.create(mock);
      expect(result).toBeNull();
    });
    it("Should be return an error - negative number", async () => {
      const mock = badMockVacancy2();
      const result = await store.create(mock);
      expect(result).toBeNull();
    });
  });

  describe("Get", () => {
    it("Should be return a vacancy", async () => {
      const result = await store.get(vacancyId);
      expect(result).not.toBeNull();
    });

    it("Should be return null - invalid id", async () => {
      const result = await store.get("123");
      expect(result).toBeNull();
    });

    it("Should be return null - empty id", async () => {
      const result = await store.get("");
      expect(result).toBeNull();
    });
  });

  describe("List", () => {
    it("Should be return a list of vacancies", async () => {
      const { length } = await store.list({});
      expect(length).toBeGreaterThanOrEqual(1);
    });
  });

  describe("Patch", () => {
    it("Should be patch a vacancy", async () => {
      const mock = mockVacancy();
      const result = await store.patch(vacancyId, mock);
      expect(result).toBe(true);
    });
    it("Should be return an error - empty fields", async () => {
      const mock = badMockVacancy1();
      const result = await store.patch(vacancyId, mock);
      expect(result).toBe(false);
    });
    it("Should be return an error - negative number", async () => {
      const mock = badMockVacancy2();
      const result = await store.patch(vacancyId, mock);
      expect(result).toBe(false);
    });
  });

  describe("Remove", () => {
    it("Should be remove a vacancy", async () => {
      const removed = await store.remove(vacancyId);
      expect(removed).toBe(true);
    });
    it("Should return an error - element already removed", async () => {
      const removed = await store.remove(vacancyId);
      expect(removed).toBe(false);
    });
    it("Should return an error - invalid id", async () => {
      const removed = await store.remove("");
      expect(removed).toBe(false);
    });
  });

});