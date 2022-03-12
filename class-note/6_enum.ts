enum Shoes {
  Nike = "nike",
  Adidas = "adidas",
  NewBalance = "newbalance",
}

var myShoes = Shoes.Nike;
console.log(myShoes); // "nike"

// example

enum Answer {
  Yes = "Y",
  No = "N",
}
function askQuestion(answer: string) {
  if (answer === "Yes") {
    console.log("correct");
  } else if (answer === "No") {
    console.log("wrong");
  }
}

askQuestion(Answer.Yes);

// askQuestion("y")
// askQeustion("Yes")

enum E {
  X = "xx",
  Y = "yy",
  Z = "zz",
}

function getX(obj: { X: string }) {
  console.log(obj.X);
}
getX(E); // 이넘 E의 X는 숫자이기 때문에 정상 동작
