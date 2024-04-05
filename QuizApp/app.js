const questions = [
  {
    question: "1. Which is largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "2. Which is the smallest country in the world?",
    answers: [
      { text: "Vatican City", correct: true },
      { text: "Bhutan", correct: false },
      { text: "Nepal", correct: false },
      { text: "Sri Lanka", correct: false },
    ],
  },
  {
    question: "3. Which is the larget desert in the world?",
    answers: [
      { text: "Kalahari", correct: false },
      { text: "Gobi", correct: false },
      { text: "Sahara", correct: false },
      { text: "Antractica", correct: true },
    ],
  },
  {
    question: "4. Which is the smallest continent in the world?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Australia", correct: true },
      { text: "Arctic", correct: false },
      { text: "Africa", correct: false },
    ],
  },
];

const questionElement = document.querySelector(".question");
const answerOption = document.querySelector(".options-list");
const nextButton = document.querySelector("#next-btn");
var listOptions = document.querySelectorAll(".options-list li");
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  questionElement.innerHTML = currentQuestion.question;
  let index = 1;
  currentQuestion.answers.forEach((answer) => {
    const optionName = ".option" + index;
    const option = document.querySelector(optionName);
    option.classList.remove("disabled");
    // console.log(listOptions);
    option.innerHTML = answer.text;
    index++;
    if (answer.correct) {
      option.dataset.correct = answer.correct;
    }
    option.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  listOptions.forEach((option) => {
    option.style.display = "block";
  });
}
startQuiz();

const answerClicked = () => {
  listOptions.forEach(function (item) {
    item.addEventListener("click", function () {
      // (item.textContent); // You can perform any action you want here
      return item.textContent;
    });
  });
};

function selectAnswer(e) {
  const selectedOption = e.target;
  const isCorrect = selectedOption.dataset.correct === "true";
  // console.log("isCorrect", isCorrect);
  if (isCorrect) {
    selectedOption.classList.add("correct");
    score++;
  } else {
    selectedOption.classList.add("incorrect");
  }
  listOptions.forEach((option) => {
    console.log(option);
    option.classList.add("disabled");
    if (option.dataset.correct === "true") {
      option.classList.add("correct");
    }
  });
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  listOptions.forEach((option) => {
    option.style.display = "none";
  });
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  listOptions.forEach((option) => {
    option.dataset.correct = false;
    // console.log(option);
    option.classList.remove("correct");
    option.classList.remove("incorrect");
  });
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});
