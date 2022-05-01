function colide(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (
      raserOne.getBoundingClientRect().y <=
        arr[i].name.getBoundingClientRect().y +
          arr[i].name.getBoundingClientRect().height &&
      raserOne.getBoundingClientRect().x <
        arr[i].name.getBoundingClientRect().x +
          arr[i].name.getBoundingClientRect().width &&
      raserOne.getBoundingClientRect().x +
        raserOne.getBoundingClientRect().width >
        arr[i].name.getBoundingClientRect().x &&
      raserOne.getBoundingClientRect().y +
        raserOne.getBoundingClientRect().height >
        arr[i].name.getBoundingClientRect().y
    ) {
      gameOver = true
    } else {
    }
  }
}