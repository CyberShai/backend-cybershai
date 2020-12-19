import store from '../../../src/components/student/student.store';
import database from '../../../src/database';
import { IStudent } from '../../../src/components/student/student.interface';
import { mockStudent, badMockStudent1, badMockStudent2, badMockStudent3 } from './student.utils';

describe("Students - store", () => {
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
      const result = await store.create(mock);
      expect(result).not.toBeNull();
      if (result) {
        expect(result._id).not.toBeUndefined();
        studentId = `${result._id}`;
        console.log({ studentId });
      }
    });
    it("Should be return an error - empty fields", async () => {
      const mock = badMockStudent1();
      const result = await store.create(mock);
      expect(result).toBeNull();
    });
    it("Should be return an error - no email", async () => {
      const mock = badMockStudent2();
      const result = await store.create(mock);
      expect(result).toBeNull();
    });
    it("Should be return an error - incomplete fields", async () => {
      const mock = badMockStudent3();
      const result = await store.create(mock);
      expect(result).toBeNull();
    });
  });

  describe("Get", () => {
    it("Should be return a student", async () => {
      const result = await store.get(studentId);
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
    it("Should be return a list of students", async () => {
      const { length } = await store.list({});
      expect(length).toBeGreaterThanOrEqual(1);
    });
  });

  describe("Patch", () => {
    it("Should be patch a student", async () => {
      const mock = mockStudent();
      const result = await store.patch(studentId, mock);
      expect(result).toBe(true);
    });
    it("Should be return an error - empty fields", async () => {
      const mock = badMockStudent1();
      const result = await store.patch(studentId, mock);
      expect(result).toBe(false);
    });
    it("Should be return an error - no email", async () => {
      const mock = badMockStudent2();
      const result = await store.patch(studentId, mock);
      expect(result).toBe(false);
    });
    it("Should be return an error - incomplete fields", async () => {
      const mock = badMockStudent3();
      const result = await store.patch(studentId, mock);
      expect(result).toBe(false);
    });
  });

  describe("Remove", () => {
    it("Should be remove a student", async () => {
      const removed = await store.remove(studentId);
      expect(removed).toBe(true);
    });
    it("Should return an error - element already removed", async () => {
      const removed = await store.remove(studentId);
      expect(removed).toBe(false);
    });
    it("Should return an error - invalid id", async () => {
      const removed = await store.remove("");
      expect(removed).toBe(false);
    });
  });

});