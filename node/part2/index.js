const express = require("express");
const morgan = require("morgan");

const cors = require("cors");

const app = express();

app.use(express.json());

app.use(express.static("build"));

app.use(
  morgan(function (tokens, req, res) {
    if (req.body) {
      console.log(req.body);
      return "iso";
    }
    return "tiny";
  })
);

app.get("/api/persons", (req, res) => {
  res.json(persons);
});

app.get("/info", (req, res) => {
  res.send(`<h1>Phonebook has info for ${persons.length} people!</h1>
  <div>${new Date().toISOString()}</div>`);
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((person) => person.id === id);

  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
});

const generateId = () => {
  const maxId = persons.length > 0 ? Math.max(...persons.map((n) => n.id)) : 0;
  return maxId + 1;
};

app.post("/api/persons", (request, response) => {
  const body = request.body;

  if (!body.name || !body.number) {
    return response.status(400).json({
      error: "content missing",
    });
  }
  if (persons.find((p) => p.name === body.name)) {
    return response.status(400).json({
      error: "is already added to db",
    });
  }
  const person = {
    name: body.name,
    number: body.number,
    date: new Date(),
    id: generateId(),
  };

  persons = persons.concat(person);

  response.json(person);
});
app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((person) => person.id !== id);

  response.status(204).end();
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
