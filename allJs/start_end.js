document.addEventListener("keydown", function (event) {
  if (event.code === "Space" && gameOver === true) {
    startRace();
    mainDisplay.lastChild.remove();
    gameOver = false;
  }
});

function checkStartRace() {
  if (gameOver === true) {
    startRace();
    mainDisplay.lastChild.remove();
    gameOver = false;
  }
}

function startRace() {
  raserOne.classList.add("raser_drive");
  press.classList.add("hidden");
  scoreContainer.innerHTML = `${score}`;
  trafikId = setInterval(function () {
    createCar(cars);
  }, traffick);
  deleteID = traffick + 4000;
  goFasterId = setInterval(function () {
    goFaster();
  }, 10000);
  let requestId = requestAnimationFrame(function f2() {
    drawCars(carsOnDIsplay);
    drawTrack();
    calcPosition(carsOnDIsplay);
    colide(carsOnDIsplay);
    checkGameOver();
    requestAnimationFrame(f2);
  });
}

function checkGameOver() {
  if (gameOver) {
    gameOverFunc();
  }
}

function gameOverFunc() {
  raserOne.classList.remove("raser_drive");
  press.classList.remove("hidden");
  let gameOverText = document.createElement(`span`);
  gameOverText.classList.add("game-over");
  gameOverText.innerHTML = `Game Over<br>${score}`;
  mainDisplay.appendChild(gameOverText);
  clearInterval(trafikId);
  clearInterval(goFasterId);
  if (record < score) {
    record = score;
    recordContainer.innerHTML = `${record}`;
  }
  score = 0;
  speed = 5;
  Audio.playbackRate = 0.8;
  Audio.currentTime = 0;
  traffick = 1000;
  cancelAnimationFrame(requestId);
}

function goFaster() {
  speed++;
  traffick = traffick - 50;
  Audio.playbackRate = Audio.playbackRate + 0.1;
}
