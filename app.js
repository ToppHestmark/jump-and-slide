document.addEventListener('DOMContentLoaded', () => {
const  prince = document.querySelector(".character");
let bottom = 0;
let gravity = 0.9;
let isJumping = false;
let isGoingLeft = false;
let isGoingRight = false;
let left = 0;
let rightTimerId
let leftTimerId

const jump = () => {
  if (isJumping) return
  prince.classList.remove("character-slide")
  prince.classList.add("character")
  let timerUpID = setInterval(function() {

    if (bottom > 250) {
      clearInterval(timerUpID)
      let timerDownID = setInterval(function() {
        if (bottom < 0) {
          clearInterval(timerDownID)
          isJumping = false
        }
        bottom -= 5
        prince.style.bottom = bottom + 'px';
      }, 20)
    }

    isJumping = true;
    bottom += 30;
    bottom = bottom * gravity;

  prince.style.bottom = bottom + 'px';
  }, 20)
}

const slideLeft = () => {
  prince.classList.add("character-slide")
  prince.classList.remove("character")

  if (isGoingRight) {
    clearInterval(rightTimerId)
    isGoingRight = false;
  }
  isGoingLeft = true;
  leftTimerId = setInterval(function() {
    left -= 5
    console.log("going left")
    prince.style.left = left + 'px'
  }, 20)
}

const slideRight = () => {
  prince.classList.add("character-slide")
  prince.classList.remove("character")

  if (isGoingLeft) {
    clearInterval(leftTimerId)
    isGoingLeft = false
  }
  isGoingRight = true;
  rightTimerId = setInterval(function() {
    left += 5
    console.log("going right")
    prince.style.left = left + 'px'
  }, 20)
}


//Assign function to keycode -- key #38 = space bar
const control = (e) => {
  if (e.keyCode === 38) {
    jump()
  } else if (e.keyCode === 37) {
    slideLeft() // press left
  } else if (e.keyCode === 39) {
    slideRight() // press right
  }
}
document.addEventListener('keydown', control)


})