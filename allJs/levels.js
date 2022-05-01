speedPlus.addEventListener("mousedown", function () {
  speed++;
});
speedMinus.addEventListener("mousedown", function () {
  speed > 3 ? speed-- : console.log()
});
traffickPlus.addEventListener("mousedown", function () {
    console.log(traffick);
  traffick > 300 ? (traffick = traffick - 50) : console.log();
});
traffickMinus.addEventListener("mousedown", function () {
    console.log(traffick);
  traffick < 2500 ? (traffick = traffick + 50) : console.log();
});
