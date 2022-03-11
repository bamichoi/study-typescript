// Union Type

var bammi: string | number | boolean;

function logMessage(value: string | number) {
  if (typeof value === "number") {
    value.toLocaleString();
  }
  if (typeof value === "string") {
    value.toString();
  }
  throw new TypeError("value must be string or number");
}

logMessage("hello");
logMessage(100);

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

// function askSomeone(someone: Developer | Person) {
//   someone.name;
//   someone.skill;
//   someone.age;
// }

// askSomeone({ name: "바미", skill: "TS" });
// askSomeone({ name: "바미", age: 13 });

// Intersection Type

// var bami : string & number & boolean

function askSomebody(someone: Developer & Person) {
  someone.name;
  someone.skill;
  someone.age;
}

askSomebody({ name: "바미", age: 13 });
askSomebody({ name: "바미", skill: "TS" });

askSomebody({ name: "바미", skill: "TS", age: 13 });
