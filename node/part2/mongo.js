const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

const password = process.argv[2];

let name = "";
let number = "";

if (process.argv[3] && process.argv[4]) {
  name = process.argv[3];
  number = process.argv[4];
}

const url = `mongodb+srv://fullstack:${password}@cluster0.zlweb.mongodb.net/person-app?retryWrites=true`;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
  id: Number,
});

const Person = mongoose.model("Person", personSchema);
const person = new Person({
  name: name,
  number: number,
  id: new Date().getMilliseconds() + new Date().getSeconds(),
});
if (number && name) {
  person.save().then((response) => {
    console.log("note saved!");
    mongoose.connection.close();
  });
} else {
  Person.find({}).then((result) => {
    result.forEach((note) => {
      console.log(note);
    });
    mongoose.connection.close();
  });
}
