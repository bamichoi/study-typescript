interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return { name: "Bami", age: 33, skill: "TS" }; // 리턴에서는 에러 발생하지 않음
}

const bamy = introduce();

console.log(bamy.skill); // 접근불가
console.log(bamy.name);

// if ((bamy as Developer).skill) {
//   console.log((bamy as Developer).skill);
// } else if ((bamy as Person).age) {
//   console.log((bamy as Person).age);
// } // 타입단언으로 접근, 가독성 떨어짐

// 타입 가드
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}

if (isDeveloper(bamy)) {
  console.log(bamy.skill);
} else {
  console.log(bamy.age);
}
