import store from '../../../src/components/company/company.store';
import database from '../../../src/database';
import { ICompany } from '../../../src/components/company/company.interface';
import { mockCompany, badMockCompany1, badMockCompany2 } from './company.utils';

describe("Company - store", () => {
  let companyId: string;

  beforeAll(() => {
    database.onlyConnect();
  });

  afterAll(() => {
    database.disconnect();
  });

  describe("Create", () => {
    it("Should be create a company", async () => {
      const mock = mockCompany();
      const result = await store.create(mock);
      expect(result).not.toBeNull();
      if (result) {
        expect(result._id).not.toBeUndefined();
        companyId = `${result._id}`;
        console.log({ companyId });
      }
    });
    it("Should be return an error - empty fields", async () => {
      const mock = badMockCompany1();
      const result = await store.create(mock);
      expect(result).toBeNull();
    });
    it("Should be return an error - incomplete", async () => {
      const mock = badMockCompany2();
      const result = await store.create(mock);
      expect(result).toBeNull();
    });
  });

  describe("Get", () => {
    it("Should be return a company", async () => {
      const result = await store.get(companyId);
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
    it("Should be return a list of companies", async () => {
      const { length } = await store.list({});
      expect(length).toBeGreaterThanOrEqual(1);
    });
  });

  describe("Patch", () => {
    it("Should be patch a company", async () => {
      const mock = mockCompany();
      const result = await store.patch(companyId, mock);
      expect(result).toBe(true);
    });
    it("Should be return an error - empty fields", async () => {
      const mock = badMockCompany1();
      const result = await store.patch(companyId, mock);
      expect(result).toBe(false);
    });
  });

  describe("Remove", () => {
    it("Should be remove a company", async () => {
      const removed = await store.remove(companyId);
      expect(removed).toBe(true);
    });
    it("Should return an error - element already removed", async () => {
      const removed = await store.remove(companyId);
      expect(removed).toBe(false);
    });
    it("Should return an error - invalid id", async () => {
      const removed = await store.remove("");
      expect(removed).toBe(false);
    });
  });

});