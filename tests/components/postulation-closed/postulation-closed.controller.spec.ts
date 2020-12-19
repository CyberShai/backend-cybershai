import controller from '../../../src/components/postulation-closed/postulation-closed.controller';
import database from '../../../src/database';
import { IPostulationClosed } from '../../../src/components/postulation-closed/postulation-closed.interface';
import { mockPostulation, badMockPostulation, badMockPostulation1 } from './postulation-closed.utils';

describe("Postulation - Controller", () => {
  let postulationId: string;

  beforeAll(() => {
    database.onlyConnect();
  });

  afterAll(() => {
    database.disconnect();
  });

  describe("Create", () => {
    it("Should be create a postulation", async () => {
      const mock = mockPostulation();
      const { data, code, status } = await controller.create(mock);
      expect(data.postulation_closed).toBeDefined();
      expect(data.postulation_closed._id).toBeDefined();
      expect(code).toBe(201);
      expect(status).toBe("success");
      postulationId = data.postulation_closed._id;
    });
    it("Should be return null / incomplete fields 1", async () => {
      const mock = badMockPostulation();
      const { data, code, status } = await controller.create(mock);
      expect(data.message).toBeDefined();
      expect(code).toBe(400);
      expect(status).toBe("error");
    });
    it("Should be return null / incomplete fields 2", async () => {
      const mock = badMockPostulation1();
      const { data, code, status } = await controller.create(mock);
      expect(data.message).toBeDefined();
      expect(code).toBe(400);
      expect(status).toBe("error");
    });
  });

  describe("Get", () => {
    it("Should be return a postulation", async () => {
      const { data, code, status } = await controller.get(postulationId);
      expect(data.postulation_closed).toBeDefined();
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
    it("Should be return a list of postulations", async () => {
      const { data, code, status } = await controller.list({});
      expect(data.length).toBeGreaterThan(0);
      expect(data.postulations_closed.length).toBeGreaterThan(0);
      expect(code).toBe(200);
      expect(status).toBe("success");
    });
  });

  describe("Patch", () => {
    it("Should be patch a postulation", async () => {
      const mock = mockPostulation();
      const { data, code, status } = await controller.patch(postulationId, mock);
      expect(data.updated).toBeDefined();
      expect(code).toBe(200);
      expect(status).toBe("success");
    });
    it("Should be return an error / invalid user", async () => {
      const mock = badMockPostulation();
      const { data, code, status } = await controller.patch(postulationId, mock);
      expect(data.message).toBeDefined();
      expect(code).toBe(404);
      expect(status).toBe("error");
    });
  });

});