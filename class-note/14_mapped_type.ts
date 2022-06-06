type Heroes = "Hulk" | "Capt" | "Thor";

type HeroAges = { [K in Heroes]: number };
const ages: HeroAges = {
  Hulk: 100,
  Capt: 33,
  Thor: 1000,
};

// for in 반복문 코드
var arr = ["a", "b", "c"];

for (var key in arr) {
  console.log(arr[key]);
}
