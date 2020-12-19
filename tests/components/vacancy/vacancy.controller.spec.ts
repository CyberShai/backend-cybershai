import controller from '../../../src/components/vacancy/vacancy.controller';
import database from '../../../src/database';
import { IVacancy } from '../../../src/components/vacancy/vacancy.interface';
import { mockVacancy, badMockVacancy1, badMockVacancy2, badMockVacancy3 } from './vacancy.utils';

describe("Vacancy - Controller", () => {
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
      const { data, code, status } = await controller.create(mock);
      expect(data.vacancy).toBeDefined();
      expect(data.vacancy._id).toBeDefined();
      expect(code).toBe(201);
      expect(status).toBe("success");
      vacancyId = data.vacancy._id;
    });
    it("Should be return null / incomplete fields 1", async () => {
      const mock = badMockVacancy1();
      const { data, code, status } = await controller.create(mock);
      expect(data.message).toBeDefined();
      expect(code).toBe(400);
      expect(status).toBe("error");
    });
    it("Should be return null / incomplete fields 2", async () => {
      const mock = badMockVacancy2();
      const { data, code, status } = await controller.create(mock);
      expect(data.message).toBeDefined();
      expect(code).toBe(400);
      expect(status).toBe("error");
    });
  });

  describe("Get", () => {
    it("Should be return a vacancy", async () => {
      const { data, code, status } = await controller.get(vacancyId);
      expect(data.vacancy).toBeDefined();
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
    it("Should be return a list of vacancies", async () => {
      const { data, code, status } = await controller.list({});
      expect(data.length).toBeGreaterThan(0);
      expect(data.vacancies.length).toBeGreaterThan(0);
      expect(code).toBe(200);
      expect(status).toBe("success");
    });
  });

  describe("Patch", () => {
    it("Should be patch a vacancy", async () => {
      const mock = mockVacancy();
      const { data, code, status } = await controller.patch(vacancyId, mock);
      expect(data.updated).toBeDefined();
      expect(code).toBe(200);
      expect(status).toBe("success");
    });
    it("Should be return an error / invalid user", async () => {
      const mock = badMockVacancy1();
      const { data, code, status } = await controller.patch(vacancyId, mock);
      expect(data.message).toBeDefined();
      expect(code).toBe(404);
      expect(status).toBe("error");
    });
    it("Should be return an error / invalid user", async () => {
      const mock = badMockVacancy2();
      const { data, code, status } = await controller.patch(vacancyId, mock);
      expect(data.message).toBeDefined();
      expect(code).toBe(404);
      expect(status).toBe("error");
    });
  });

});