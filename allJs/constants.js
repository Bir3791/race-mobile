const track = document.querySelector(".track"),
  raserOne = document.querySelector(".raser_one"),
  raserTwo = document.querySelector(".raser_two"),
  mainDisplay = document.querySelector(".main_display"),
  raceDisplay = document.querySelector(".race_display"),
  volumeControls = document.querySelectorAll(".volume"),
  volumeContainer = document.querySelector(".volume-control"),
  press = document.querySelector(".title-container")

let startEndGame;
let score = 0;
let record = 0;
let scoreContainer = document.querySelector(".score-container");
let recordContainer = document.querySelector(".record-container");
let speedPlus = document.querySelector(".speed-plus");
let speedMinus = document.querySelector(".speed-minus");
let traffickPlus = document.querySelector(".traffick-plus");
let traffickMinus = document.querySelector(".traffick-minus");
let time = 2000;
let carsOnDIsplay = [];
let currentPosition;
let speed = 5;
let traffick = 1000;
let curentPosTrack = -696;
let gameOver = true;
let Audio = document.querySelector("audio");
let trafikId;


// let carsOnDIsplay = ["img.car.car1", "img.car.car0", "img.car.car1"];


