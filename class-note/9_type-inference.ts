// 타입 추론 기본_1
let a = "abc";

function getB(b = 10) {
  let c = "hi";
  return b + c;
}

// 타입 추론 기본_2

interface DropDown<T> {
  value: T;
  title: string;
}

var shoppingItem: DropDown<string> = {
  value: "abc",
  title: "hello",
};

// 타입 추론 기본_3

interface DropDown<T> {
  value: T;
  title: string;
}

interface DetailedDropDown<K> extends DropDown<K> {
  description: string;
  tag: K;
}

var shoppingItem: DropDown<string> = {
  value: "abc",
  title: "hello",
};

var detailedItem: DetailedDropDown<string> = {
  title: "abc",
  description: "ab",
  value: "a", //string
  tag: "a",
};

// Best Common Type - 가장 근접 타입을 찾는 알고리즘

var arr = [1, 2, 3, true, "a"];
