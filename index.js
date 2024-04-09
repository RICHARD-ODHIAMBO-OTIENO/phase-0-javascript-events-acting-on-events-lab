// create a variable called dodger where we store our dodger obtained through the ID element
const dodger = document.getElementById('dodger');

// change the color of the dodger 
dodger.style.backgroundColor ='#000000';

//change color to something more visible
dodger.style.backgroundColor = '#FF69B4';

// Set the vertical position of the dodger element to 100 pixels from the bottom of its container.
dodger.style.bottom = "100px";

//Reset the vertical position of the dodger element to 0 pixels from the bottom of the container.
dodger.style.bottom = '0px';

// Change the dodger's position 
dodger.style.left= '0px';


function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });
 

  
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left =parseInt(leftNumbers, 10);

    const gameFieldWidth = 400;
    const dodgerWidth = 40;

    if (left + dodgerWidth < gameFieldWidth) {
        dodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});

  