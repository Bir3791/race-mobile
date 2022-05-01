function createCar(arr) {
  let car = document.createElement("img");
  let carIndex = Math.floor(Math.random() * arr.length);
  car.setAttribute("src", `img/${arr[carIndex]}`);
  carsOnDIsplay.push({
    name: car,
    positionCar: -200,
  });
  car.classList.add("car");
  car.classList.add(`car${Math.floor(Math.random() * 3)}`);
  raceDisplay.appendChild(car);
  score++
  scoreContainer.innerHTML = `${score}`;
  setTimeout(function () {
    deleteCar(car);
  }, 4000);
  setInterval(function clearArr(){
   if (carsOnDIsplay[0].positionCar > 1000) {
     carsOnDIsplay.shift();
  }}, 1000);
}

function deleteCar(car) {
  raceDisplay.removeChild(car);
}

function calcPosition(arr) {
  for (let index = 0; index < arr.length; index++) {
    carsOnDIsplay[index].positionCar = carsOnDIsplay[index].positionCar + speed;
  }
}

function drawCars(arr) {
  for (let index = 0; index < arr.length; index++) {
    let draw = carsOnDIsplay[index].name;
    draw.style.top = carsOnDIsplay[index].positionCar + "px";
  }
}

