//      default, {named}
// import test, { x } from "./main1.js";
// console.log(test);
// console.log(x);

let questions = {
  question: [
    ["What international team play in Wembley?"],
    ["Who won the FIFA World Cup in 2018?"],
    ["Which player has won the most Ballon d'Or awards?"],
    ["Which club has won the most UEFA Champions League titles?"],
    ["Which country hosted the 2022 FIFA World Cup?"],
    ["Which club did David Beckham leave Manchester United for in 2003?"],
    ["Who was the top scorer in the 2022 FIFA World Cup?"],
    ['Who is known as "The Special One"?'],
    [
      'Which player is known for his incredible dribbling skills and often referred to as "the wizard"?',
    ],
    [
      "What is the maximum number of substitutions allowed in a football match ",
    ],
  ],
  answers: [
    [["Denmark", "England", "Scotland", "Iceland"]],
    [["Argentina", "Germany", "France", "Brazil"]],
    [["Lionel Messi", "Cristiano Ronaldo", "Johan Cruyff", "Michel Platini"]],
    [["Barcelona", "AC Milan", "Real Madrid", "Liverpool"]],
    [["Qatar", "Russia", "Brazil", "South Africa"]],
    [["Real Madrid", "Chelsea", "AC Milan", "Paris Saint-Germain"]],
    [["Kylian Mbappé", "Lionel Messi", "Neymar", "Cristiano Ronaldo"]],
    [["Jürgen Klopp", "Pep Guardiola", "José Mourinho", "Carlo Ancelotti"]],
    [["Neymar", "Eden Hazard", "Lionel Messi", "Ronaldinho"]],
    [["3", "5", "7", "9"]],
  ],
  correct: [
    ["England"],
    ["France"],
    ["Lionel Messi"],
    ["Real Madrid"],
    ["Qatar"],
    ["Real Madrid"],
    ["Kylian Mbappé"],
    ["José Mourinho"],
    ["Ronaldinho"],
    ["5"],
  ],
};

let container = document.querySelector(".container");
let index = 0;
let score = 0;
let count = 0;
let button = document.querySelector("button");
window.onload = function () {
  Quesiton();
};

function Quesiton() {
  let title = `<div class="header">
                <h3>Simple Quiz</h3>
                <h4>Score : <span>${score}</span>  / ${questions.question.length}</h4>
              </div>`;
  let question = `<h4> ${index + 1}. ${questions.question[index]} </h4>`;
  let ans1 = ` <input type="text" readonly class="choice" placeholder="${questions.answers[index][0][0]}" />`;
  let ans2 = ` <input type="text" readonly class="choice" placeholder="${questions.answers[index][0][1]}" />`;
  let ans3 = ` <input type="text" readonly class="choice" placeholder="${questions.answers[index][0][2]}" />`;
  let ans4 = ` <input type="text" readonly class="choice" placeholder="${questions.answers[index][0][3]}" />`;
  let button = `<button>Next</button>`;
  container.innerHTML = `${title} ${question} ${ans1} ${ans2} ${ans3} ${ans4} ${button}`;
  let choice = document.querySelectorAll(".choice");
  correct(choice);
}

function correct(choice) {
  let correctAns = questions.correct[index][0];
  let scoreSpan = document.querySelector(".header h4 span");
  choice.forEach((ch) => {
    ch.addEventListener("click", () => {
      if (ch.placeholder === correctAns) {
        ch.classList.add("true");
        ch.style.cssText =
          "border-color: green green; border-width:4px; background-color: green; color: white";
        index++;
        score++;
        count++;
        scoreSpan.innerHTML = score;
        if (count === questions.question.length) {
          Swal.fire({
            title: "Amazing Work!! ",
            text: `Great you've completed this quiz!
            Your final score is ${score} out of ${questions.question.length}.`,
            icon: "success",
          }).then(() => {
            window.location.reload();
          });
        } else {
          Swal.fire({
            title: "Correct Answer!! ",
            text: "Great job!! Keep Going",
            icon: "success",
          }).then(() => {
            Quesiton();
          });
        }
      } else {
        ch.classList.add("false");
        ch.style.cssText =
          "border-color: red; border-width:4px; background-color: red; color: white";
        document.querySelector("button").style.display = "none";
        count++;
        if (count === questions.question.length) {
          Swal.fire({
            icon: "error",
            title: "Wrong Answer!! ",
            text: `Try Again :xD `,
          }).then(() => {
            Swal.fire({
              title: "Amazing Work!! ",
              text: `Great you've completed this quiz!
              Your final score is ${score} out of ${questions.question.length}.`,
              icon: "success",
            }).then(() => {
              window.location.reload();
            });
          });
        } else {
          Swal.fire({
            title: "Wrong Answer!! ",
            text: `Try Again :xD `,
            icon: "error",
          }).then(() => {
            index++;
            Quesiton();
          });
        }
      }
    });
  });
}
