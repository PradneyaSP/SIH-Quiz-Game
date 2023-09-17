// 2D array of MCQ questions
const mcqQuestions = [
  [
    "What is the capital of France?",
    "A) Paris",
    "B) London",
    "C) Berlin",
    "D) Madrid",
  ],
  [
    "Which planet is known as the Red Planet?",
    "A) Mars",
    "B) Venus",
    "C) Jupiter",
    "D) Saturn",
  ],
  [
    "What is the largest mammal on Earth?",
    "A) Blue Whale",
    "B) Elephant",
    "C) Giraffe",
    "D) Hippopotamus",
  ],
  [
    "Which gas do plants absorb from the atmosphere?",
    "A) Carbon Dioxide",
    "B) Oxygen",
    "C) Nitrogen",
    "D) Hydrogen",
  ],
];

// 1D array of answers (contain option letter)
const answers = ["A", "A", "A", "A"];

$(".questions").addClass("hidden");
// Starting the Quiz on clicking start
$(".start button").click(function (e) {
  $(".start").addClass("hidden");
  $(".questions").removeClass("hidden");
  writeQuestion();
});

var i = -1;
function writeQuestion() {
  $(".option").removeClass("correct");
  $(".option").removeClass("wrong");
  $(".qtext").text(mcqQuestions[i][0]);
  $("#A").text(mcqQuestions[i][1]);
  $("#B").text(mcqQuestions[i][2]);
  $("#C").text(mcqQuestions[i][3]);
  $("#D").text(mcqQuestions[i][4]);
}

$(".option").click(function (e) {
  var clickedOption = this.id;
  if (clickedOption === answers[i]) {
    $(this).addClass("correct");
  } else {
    $(this).addClass("wrong");
    $("#" + answers[i]).addClass("correct");
  }
  i++;

  $(".next").click(function (e) {
    if (i < 4) {
      writeQuestion();
    } else {
      endQuiz();
    }
  });
});

function endQuiz() {
  $(".questions").addClass("hidden");
}
