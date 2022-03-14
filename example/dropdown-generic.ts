// interface Email {
//   value: string;
//   selected: boolean;
// }

// interface ProductNumber {
//   value: number;
//   selected: boolean;
// }

// 인터페이스를 이용하면 타입하나 바꾸기위해서 인터페이스 또 추가해야함. 타입이 늘어나는 만큼 인터페이스 계속 늘어나게 됨.

interface Item<T> {
  value: T;
  selected: boolean;
}

const emails: Item<string>[] = [
  { value: "naver.com", selected: true },
  { value: "gmail.com", selected: false },
  { value: "hanmail.net", selected: false },
];

const numberOfProducts: Item<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

// function createDropdownItem(item: Item<string> | Item<number>) {
//   const option = document.createElement("option");
//   option.value = item.value.toString();
//   option.innerText = item.value.toString();
//   option.selected = item.selected;
//   return option;
// }

// // NOTE: 이메일 드롭 다운 아이템 추가
// emails.forEach(function (email) {
//   const item = createDropdownItem(email);
//   const selectTag = document.querySelector("#email-dropdown");
//   selectTag.appendChild(item);
// });

function createDropdownItem<T>(item: Item<T>) {
  const option = document.createElement("option");
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem<string>(email);
  const selectTag = document.querySelector("#email-dropdown");
  selectTag.appendChild(item);
});

numberOfProducts.forEach(function (product) {
  const item = createDropdownItem(product);
});
