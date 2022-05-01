function drawTrack() {
  if (curentPosTrack < -29) {
    curentPosTrack = curentPosTrack + (speed + 1);
    track.style.top = curentPosTrack + "px";
  } else {
    curentPosTrack = -74;
  }
}
