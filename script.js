const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "purple",
  "black",
  "white",
  "violet",
  "pink",
  "orange",
  "brown",
];

const colorHex = {
  red: "#ff0000",
  green: "#008000",
  blue: "#0000ff",
  yellow: "#b5a900",
  purple: "#800080",
  black: "#000000",
  white: "#a8a8a8",
  violet: "#9400d3",
  pink: "#ff1493",
  orange: "#ff8c00",
  brown: "#5c2e00",
};

const suggestionsBox = document.getElementById("suggestions");
const startBtn = document.getElementById("startBtn");
const gameContainer = document.getElementById("gameContainer");
const wordDisplay = document.getElementById("word");
const answerBox = document.getElementById("answerBox");
const nextBtn = document.getElementById("nextBtn");

function showSuggestions() {
  suggestionsBox.innerHTML = "Available Colours:<br><br>";
  colors.forEach((c) => {
    const div = document.createElement("div");
    div.className = "color-item";
    div.style.background = colorHex[c];
    div.textContent = c.toUpperCase();
    suggestionsBox.appendChild(div);
  });
}

showSuggestions();

function generateQuestion() {
  const randomWord = colors[Math.floor(Math.random() * colors.length)];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  wordDisplay.textContent = randomWord.toUpperCase();
  wordDisplay.style.color = colorHex[randomColor];

  wordDisplay.dataset.answer = randomColor;
}

function showAnswerThenNext() {
  const answer = wordDisplay.dataset.answer;
  answerBox.textContent = answer.toUpperCase();
  answerBox.style.color = colorHex[answer];
  answerBox.style.display = "block";

  setTimeout(() => {
    answerBox.style.display = "none";
    generateQuestion();
  }, 1000);
}

nextBtn.addEventListener("click", showAnswerThenNext);

startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  suggestionsBox.style.display = "none";
  gameContainer.style.display = "block";
  generateQuestion();
});
