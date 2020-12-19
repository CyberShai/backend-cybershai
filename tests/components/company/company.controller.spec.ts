import controller from '../../../src/components/company/company.controller';
import database from '../../../src/database';
import { ICompany } from '../../../src/components/company/company.interface';
import { mockCompany, badMockCompany1, badMockCompany2 } from './company.utils';

describe("Company - Controller", () => {
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
      const { data, code, status } = await controller.create(mock);
      expect(data.company).toBeDefined();
      expect(data.company._id).toBeDefined();
      expect(code).toBe(201);
      expect(status).toBe("success");
      companyId = data.company._id;
    });
    it("Should be return null / incomplete fields 1", async () => {
      const mock = badMockCompany1();
      const { data, code, status } = await controller.create(mock);
      expect(data.message).toBeDefined();
      expect(code).toBe(400);
      expect(status).toBe("error");
    });
    it("Should be return null / incomplete fields 2", async () => {
      const mock = badMockCompany2();
      const { data, code, status } = await controller.create(mock);
      expect(data.message).toBeDefined();
      expect(code).toBe(400);
      expect(status).toBe("error");
    });
  });

  describe("Get", () => {
    it("Should be return a company", async () => {
      const { data, code, status } = await controller.get(companyId);
      expect(data.company).toBeDefined();
      expect(code).toBe(200);
      expect(status).toBe("success");
    });
    it("Should be return null / invalid id", async () => {
      const { data, code, status } = await controller.get("asdasdk");
      expect(data.message).toBeDefined();
      expect(code).toBe(404);
      expect(status).toBe("error");
    });
    it("Should be return null / null id", async () => {
      const { data, code, status } = await controller.get("");
      expect(data.message).toBeDefined();
      expect(code).toBe(404);
      expect(status).toBe("error");
    });
  });

  describe("List", () => {
    it("Should be return a list of companies", async () => {
      const { data, code, status } = await controller.list({});
      expect(data.length).toBeGreaterThan(0);
      expect(data.companies.length).toBeGreaterThan(0);
      expect(code).toBe(200);
      expect(status).toBe("success");
    });
  });

  describe("Patch", () => {
    it("Should be patch a company", async () => {
      const mock = mockCompany();
      const { data, code, status } = await controller.patch(companyId, mock);
      expect(data.updated).toBeDefined();
      expect(code).toBe(200);
      expect(status).toBe("success");
    });
    it("Should be return an error / invalid user", async () => {
      const mock = badMockCompany1();
      const { data, code, status } = await controller.patch(companyId, mock);
      expect(data.message).toBeDefined();
      expect(code).toBe(404);
      expect(status).toBe("error");
    });
  });

});