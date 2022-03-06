// TS 문자열 선언
const strTs: string = "hello";

// TS 숫자 서넌
const num: number = 10;

// TS 배열 선언
const arr: Array<number> = [1, 2, 3];

const arr2: Array<string> = ["Capt", "Thor", "Hulk", 10];

// array리터럴 이용
const items: number[] = [1, 2, 3];

// 튜플 선언 - 각 인덱스마다 타입 지정
const countries: [string, number] = ["Korea", "Italy"];

// 객체 선언
const obj: object = {};

const person: object = {
  name: "bami",
  age: 3456,
}; // object 라는 조건만 있고, 어떤 값이 들어오더라도 상관없음

let person2: {
  name: string;
  age: number;
} = {
  name: "bami",
  age: 1,
};

// 불리언 선언

let show: boolean = true;
