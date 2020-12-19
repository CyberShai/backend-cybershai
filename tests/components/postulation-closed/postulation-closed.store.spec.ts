import store from '../../../src/components/postulation-closed/postulation-closed.store';
import database from '../../../src/database';
import { IPostulationClosed } from '../../../src/components/postulation-closed/postulation-closed.interface';
import { mockPostulation, badMockPostulation, badMockPostulation1 } from './postulation-closed.utils';

describe("Postulations - store", () => {
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
      const result = await store.create(mock);
      expect(result).not.toBeNull();
      if (result) {
        expect(result._id).not.toBeUndefined();
        postulationId = `${result._id}`;
        console.log({ postulationId });
      }
    });
    it("Should be return an error - empty fields", async () => {
      const mock = badMockPostulation1();
      const result = await store.create(mock);
      expect(result).toBeNull();
    });
    it("Should be return an error - incomplete", async () => {
      const mock = badMockPostulation1();
      const result = await store.create(mock);
      expect(result).toBeNull();
    });
  });

  describe("Get", () => {
    it("Should be return a postulation", async () => {
      const result = await store.get(postulationId);
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
    it("Should be return a list of postulations", async () => {
      const { length } = await store.list({});
      expect(length).toBeGreaterThanOrEqual(1);
    });
  });

  describe("Patch", () => {
    it("Should be patch a postulation", async () => {
      const mock = mockPostulation();
      const result = await store.patch(postulationId, mock);
      expect(result).toBe(true);
    });
    it("Should be return an error - empty fields", async () => {
      const mock = badMockPostulation();
      const result = await store.patch(postulationId, mock);
      expect(result).toBe(false);
    });
  });

  describe("Remove", () => {
    it("Should be remove a postulation", async () => {
      const removed = await store.remove(postulationId);
      expect(removed).toBe(true);
    });
    it("Should return an error - element already removed", async () => {
      const removed = await store.remove(postulationId);
      expect(removed).toBe(false);
    });
    it("Should return an error - invalid id", async () => {
      const removed = await store.remove("");
      expect(removed).toBe(false);
    });
  });

});