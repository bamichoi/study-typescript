function Person(name, age) {
  this.name = name;
  this.age = age;
}

const bbami = new Person("bami", 100);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const bami = new Person("bami", 30);
console.log(bami);
