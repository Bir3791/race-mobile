document.addEventListener("keydown", function (event) {
  if (event.code === "ArrowRight") {
    moveRaserRight();
  }
  if (event.code === "ArrowLeft") {
    moveRaserLeft();
  }
  if (event.code === "KeyD") {
    moveRaserTwoRight();
  }
  if (event.code === "KeyA") {
    moveRaserTwoLeft();
  }
});

document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     
                                                                         
function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                
                                                                         
function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
                                                                         
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* right swipe */ 
            moveRaserLeft();
        } else {
            moveRaserRight();
        }                       
    } else {
        if ( yDiff > 0 ) {
            checkStartRace();
        } else { 
            
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};


let index = 42; //start raser position in the middle of the track

function moveRaserRight() {
  if (index > 17) {
    let initialState = index;
    index = index - 32;
    animate({
      duration: 100,
      timing: function (timeFraction) {
        return timeFraction;
      },
      draw: function (progress) {
        raserOne.style.right =
          // initialState - (17 / 100) * (progress * 100) + "%";
          initialState - 32  * progress + "%";
      },
    });
  }
}

function moveRaserLeft() {
  if (index < 73) {
    let initialState = index;
    index = index + 32;
    animate({
      duration: 100,
      timing: function (timeFraction) {
        return timeFraction;
      },
      draw: function (progress) {
        raserOne.style.right =
          // initialState + (17 / 100) * (progress * 100) + "%";
          initialState + 32 * progress  + "%";
      },
    });
  }
}
