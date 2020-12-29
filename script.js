let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highs = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);

  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage(`😧 It's not my number`);
  } else if (guess === number) {
    displayMessage(` 😍 EEEE it's my numberr`);
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = number;

    if (score > highs) {
      highs = score;
      document.querySelector(".highscore").textContent = highs;
    }
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? ` 🙃 It's too high` : ` 🙃 It's too low`);
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage(`😧  You LOOOSSTTTTT`);
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
});
