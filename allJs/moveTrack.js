function drawTrack() {
  if (curentPosTrack < -31) {
    curentPosTrack = curentPosTrack + (speed + 1);
    track.style.top = curentPosTrack + "px";
  } else {
    curentPosTrack = -251;
  }
}
