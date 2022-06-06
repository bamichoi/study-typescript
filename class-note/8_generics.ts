// function logText(text) {
//   console.log(text);
//   return text;
// }

// logText(10);
// logText('hi');
// logText(true);

// function logText<T>(text:T):T {
//     console.log(text);
//     return text;
// }

// logText('하이');
// logText<string>('하이');

// 유니온타입과의 비교

// 유니온

// function logText(text: string) {
//   console.log(text);
// //   text.split('').reverse().join(''); // string  타입이면 가능 다른 타입은 에러
//   return text;
// // }

// // function logNumber(num: number) {
// //     console.log(num);
// //     return num;
// // } // 단순히 타입을 구별하기 위해서 불필요한 코드가 계속 반복되게 된다

// // function logText(text: string | number) {
// //   console.log(text);
// //   return text;
// // } // 유니온 타입으로 해결가능. 하지만 공통된 속성이나 api에 대해서만 접근 가능

// // const a = logText('a'); // a는 계속 string | number 여전히 공통된 api에서만 접근가능 eg) split을 쓸 수가 없다.
// // logText(10);
// // logNumber(10)
// // logText(true);

// // 제네릭

// // function logText<T>(text: T): T {
// //   console.log(text);
// //   return text;
// // }

// // const str = logText<string>("10"); // str 인풋이 허용되고 반환값도 string이 됨.
// // str.split("");
// // const flag = logText<boolean>(true); // bool 인풋이 허용되고 반환값도 bool이 됨.
// // logText("a");
// // logText(10);

// // 인터페이스에 제네릭 선언

// // interface Dropdown {
// //   value: string;
// //   selected: boolean;
// // }

// // const obj: Dropdown = {value: 10 , selected: false}

// interface Dropdown<T> {
//   value: T;
//   selected: boolean;
// }

// const obj: Dropdown<number> = { value: 10, selected: false };

// // 제네릭의 타입 제한

// // function logTextLength<T>(text: T): T {
// //   console.log(text.length); // T에 뭐가 들어올지 모르기 때문에  length에 접근할 수 없음.
// //   return text;
// // }

// //  제네릭에 타입 힌트 주기.
// // function logTextLength<T>(text: T[]): T[] {
// //   console.log(text.length);
// //   text.forEach(function (text) {
// //     console.log(text);
// //   });
// //   return text;
// // }

// // logTextLength<string>(["Hi"]); //"Hi"는 베열이 되어야함

// // 제네릭 타입 제한 2 - 정의된 타입 이용하기
// interface LengthType {
//   length: number;
// }

// function logTextLength<T extends LengthType>(text: T): T {
//   text.length;
//   return text;
// }

// logTextLength("a");
// logTextLength(10); // number는 length가 제공되지 않기 때문에 제한됨
// logTextLength({ length: 10 }); //  legnth를 가진 객체도 허용됨.

// // 제네릭의 타입 제한3  - keyof

// interface ShoppingItem {
//   name: string;
//   price: number;
//   stock: number;
// }

// //ShoppingItem 의 key들 중 한 가지만 들어갈 수 있음.
// function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
//   return itemOption;
// }

// getShoppingItemOption("name");
