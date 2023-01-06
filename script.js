let character = document.getElementById("character");
let block = document.getElementById("block");
let btnJump = document.querySelector(".btn_jump");
let game = document.querySelector(".game");
let counter = 0;
let intervalID;

function jump() {
  if (character.classList == "animate") {
    return;
  }
  character.classList.add("animate");
  setTimeout(() => {
    character.classList.remove("animate");
  }, 300);
}

function stopGame() {
  block.style.animation = "none";
  clearInterval(intervalID);
  btnJump.innerHTML = "Restart";
  btnJump.removeEventListener("click", jump);
  btnJump.addEventListener("click", startGame);
  block.style.left = "20px";
  counter = 0;
}
function startGame() {
  intervalID = setInterval(checkDead, 10);
  btnJump.innerHTML = "Jump";
  btnJump.removeEventListener("click", startGame);
  btnJump.addEventListener("click", jump);
  block.style.animation = " block 1s infinite linear";
}

function checkDead() {
  let characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );

  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  if (blockLeft < 20 && blockLeft > -20 && characterTop >= 130) {
    stopGame();
  } else {
    counter++;
    document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
  }
}

window.addEventListener("DOMContentLoaded", startGame);
