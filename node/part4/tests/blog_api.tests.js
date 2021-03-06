const mongoose = require("mongoose");
const supertest = require("supertest");

const app = require("../app");

const api = supertest(app);

test("notes are returned as json", async () => {
  await api.get("/api/blogs").expect(200);
});
test("all notes are returned", async () => {
  const response = await api.get("/api/blogs");

  expect(response.body).toHaveLength(12);
});
afterAll(() => {
  mongoose.connection.close();
});
