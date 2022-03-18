// 인터페이스
interface Engineer {
  name: string;
  skill: string;
}

interface Someone {
  name: string;
}

let engineer: Engineer;

let someone: Someone;

engineer = someone; // 타입 Someone은 타입 Developer의 부분집합, 합집합이 되어야 할당할 수 있다.
someone = engineer; // 타입 Engineer는 타입 Someone의 합집합이다.

// 클래스

class Someone {
  name: string;
}

engineer = new Someone(); // Type 'Someone' is not assignable to type 'Engineer'.

// 타입 이름이 아니라 내부의 구조를 비교를 한다. class로 비교하더라도 같은 결과

// 함수

var add = function (a: number) {
  console.log(a);
};

var sum = function (a: number, b: number) {
  console.log(a + b);
};

add = sum; // Type '(a: number, b: number) => number' is not assignable to type '(a: number) => void'.
sum = add; // sum의 구조는 add의 구조의 합집합.

//제네릭

interface Empty<T> {
  //..
}
var empty1: Empty<string>;
var empty2: Empty<number>;

empty1 = empty2;
empty2 = empty1;

// 구조가 비어있으므로 호환가능

interface NotEmpty<T> {
  data: T;
}

var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;

notempty1 = notempty2;
notempty2 = notempty1;
// 구조적으로 완전히 달라지기 때문에 호환불가
