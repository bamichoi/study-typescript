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
function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log("correct");
  } else if (answer === Answer.No) {
    console.log("wrong");
  }
}

askQuestion(Answer.Yes);

// askQuestion("y")
// askQeustion("Yes")
