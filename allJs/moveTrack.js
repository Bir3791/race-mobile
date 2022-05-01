function drawTrack() {
  if (curentPosTrack < -100) {
    curentPosTrack = curentPosTrack + (speed + 1);
    track.style.top = curentPosTrack + "px";
  } else {
    curentPosTrack = -696;
  }
}
