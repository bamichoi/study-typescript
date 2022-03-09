interface User {
  age: number;
  name: string;
}

const bami: User = {
  age: 13,
  name: "바미",
};

// 함수에 인터페이스 활용

function getUser(user: User) {
  console.log(user);
}
const bam = {
  age: 14,
  name: "bam",
};
getUser(bam);

// 함수의 스펙에 인터페이스를 활용

interface ISum {
  (a: number, b: number): number;
}

const sum: ISum = (a, b) => {
  return a + b;
};

// 인덱싱

interface IStringArray {
  [index: number]: string;
}

const arr: IStringArray = ["a", "b", "c"];
arr[0] = 10;

// 딕셔너리 패턴
interface IStringRegexDict {
  [key: string]: RegExp;
}

const obj: IStringRegexDict = {
  sth: /abc/,
  cssFile: ".css",
};

// 인터페이스 확장

interface IPerson {
  name: string;
  age: number;
}

interface IDeveloper extends IPerson {
  language: string;
}

const bami: IDeveloper = {
  name: "bami",
  age: 15,
  language: "TypeScript",
};
