import controller from '../../../src/components/student/student.controller';
import database from '../../../src/database';
import { IStudent } from '../../../src/components/student/student.interface';
import { mockStudent, badMockStudent1, badMockStudent2, badMockStudent3 } from './student.utils';

describe("Student - Controller", () => {
  let studentId: string;

  beforeAll(() => {
    database.onlyConnect();
  });

  afterAll(() => {
    database.disconnect();
  });

  describe("Create", () => {
    it("Should be create a student", async () => {
      const mock = mockStudent();
      const { data, code, status } = await controller.create(mock);
      expect(data.student).toBeDefined();
      expect(data.student._id).toBeDefined();
      expect(code).toBe(201);
      expect(status).toBe("success");
      studentId = data.student._id;
    });
    it("Should be return null / incomplete fields 1", async () => {
      const mock = badMockStudent1();
      const { data, code, status } = await controller.create(mock);
      expect(data.message).toBeDefined();
      expect(code).toBe(400);
      expect(status).toBe("error");
    });
    it("Should be return null / incomplete fields 2", async () => {
      const mock = badMockStudent2();
      const { data, code, status } = await controller.create(mock);
      expect(data.message).toBeDefined();
      expect(code).toBe(400);
      expect(status).toBe("error");
    });
    it("Should be return null / partial fields", async () => {
      const mock = badMockStudent3();
      const { data, code, status } = await controller.create(mock);
      expect(data.message).toBeDefined();
      expect(code).toBe(400);
      expect(status).toBe("error");
    });
  });

  describe("Get", () => {
    it("Should be return a student", async () => {
      const { data, code, status } = await controller.get(studentId);
      expect(data.student).toBeDefined();
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
    it("Should be return a list of students", async () => {
      const { data, code, status } = await controller.list({});
      expect(data.length).toBeGreaterThan(0);
      expect(data.students.length).toBeGreaterThan(0);
      expect(code).toBe(200);
      expect(status).toBe("success");
    });
  });

  describe("Patch", () => {
    it("Should be patch a student", async () => {
      const mock = mockStudent();
      const { data, code, status } = await controller.patch(studentId, mock);
      expect(data.updated).toBeDefined();
      expect(code).toBe(200);
      expect(status).toBe("success");
    });
    it("Should be return an error / invalid user", async () => {
      const mock = badMockStudent1();
      const { data, code, status } = await controller.patch(studentId, mock);
      expect(data.message).toBeDefined();
      expect(code).toBe(404);
      expect(status).toBe("error");
    });
    it("Should be return an error / invalid user", async () => {
      const mock = badMockStudent2();
      const { data, code, status } = await controller.patch(studentId, mock);
      expect(data.message).toBeDefined();
      expect(code).toBe(404);
      expect(status).toBe("error");
    });
    it("Should be return an error / invalid user", async () => {
      const mock = badMockStudent3();
      const { data, code, status } = await controller.patch(studentId, mock);
      expect(data.message).toBeDefined();
      expect(code).toBe(404);
      expect(status).toBe("error");
    });
  });

});