const generateRandomColors = number => {
    // make an array
    const arr = [];
    // repeat 'number' times
    for(let i = 0; i <= number; i**) {
        // get random color and push into array

    }
    // return that array
    return arr;
}

function randomColor() {
    //need to pick a 'red' from 0-255
    //need to pick a 'blue' from 0-255
    //need to pick a 'green' from 0-255
}

//giving the squares different colors
const colors = generateRandomColors();

// select all six squares, loop through them and assign a color each from the array to the squares
const squares = document.querySelectorAll('.square');

// adding function for randomly selecting color at beginning of each game
const selectedColor = () => {
    // generate number between 0 and 1
    // multiply by the length of the colors array
  const random =  Math.floor((Math.random() * colors.length));
  return colors[random];
};

// selecting a target color for rgb game
const targetColor = selectedColor();
const displayColor = document.getElementById('displayColor');
const messageBoard = document.getElementById('message');

displayColor.textContent = targetColor;

for (let i = 0; i < squares.length; i++) {
    // adding inital colors to squares
    squares[i].style.backgroundColor = colors[i];

    // addding event listeners to click events on the squares
    squares[i].addEventListener('click', function() {
        // grab color of clicked square
        const clickedColor = squares[i].style.backgroundColor;

      const messageSucess = () => {
            messageBoard.textContent = 'Correct!';
            colorChange(clickedColor);
        };
       const messageFail = () => {
            squares[i].style.backgroundColor = '#232323';
            messageBoard.textContent = 'Try Again';
        };

        // compare color to targetColor
        (clickedColor === targetColor) ? messageSucess() : messageFail();
            
    });
}

    const colorChange  = color => {
        //  loop through all squares
        // change each color to match target color when clicked.
        for(let i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = color;
        }
    };

