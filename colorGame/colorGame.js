let numberOfSquares = 6
let colors = [];
let pickedColor;

let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.getElementById("message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    //mode button event listeners
    setupModeButtonListeners();
    setupSquares();
    reset();
}

function setupSquares() {
    for(let i = 0; i < squares.length; i++) {
        //add initial colors to squares
        //squares[i].style.backgroundColor = colors[i];
        //add click listeners to squares
        squares[i].addEventListener("click", function(){
            //grab color of clicked square
            let clickedColor = this.style.backgroundColor
            //compare color to pickedColor
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play again";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "try Again";
            }
        })
    }
}

function setupModeButtonListeners() {
    for(let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected")
        
        this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares = 6;
        // if(this.textContent === "Easy") {
        //     numberOfSquares = 3;
        // } else {
        //     numberOfSquares = 6;
        // }
        reset();
    })
}
}




function reset() {
    colors = gernerateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    for (let i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

// easyBtn.addEventListener("click", function() {
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     numberOfSquares = 3;
//     colors = gernerateRandomColors(numberOfSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(let i = 0; i < squares.length; i++) {
//         if (colors[i]) {
//             squares[i].style.backgroundColor = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
// })

// hardBtn.addEventListener("click", function() {
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numberOfSquares = 6;
//     colors = gernerateRandomColors(numberOfSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(let i = 0; i < squares.length; i++) {
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
//     }
// })

resetButton.addEventListener("click", function() {
    // colors = gernerateRandomColors(numberOfSquares);
    // pickedColor = pickColor();
    // colorDisplay.textContent = pickedColor;
    // messageDisplay.textContent = "";
    // this.textContent = "New Colors";
    // for (let i = 0; i < squares.length; i++) {
    //     squares[i].style.backgroundColor = colors[i];
    // }
    // h1.style.backgroundColor = "steelblue";
    reset();
})

colorDisplay.textContent = pickedColor;

// for(let i = 0; i < squares.length; i++) {
//     //add initial colors to squares
//     //squares[i].style.backgroundColor = colors[i];
//     //add click listeners to squares
//     squares[i].addEventListener("click", function(){
//         //grab color of clicked square
//         let clickedColor = this.style.backgroundColor
//         //compare color to pickedColor
//         if(clickedColor === pickedColor){
//             messageDisplay.textContent = "Correct!";
//             resetButton.textContent = "Play again";
//             changeColors(clickedColor);
//             h1.style.backgroundColor = clickedColor;
//         } else {
//             this.style.backgroundColor = "#232323";
//             messageDisplay.textContent = "try Again"
//         }
//     });
// }

function changeColors(color) {
    //loop through all squares
    //change each color to match given color
    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    let random = Math.floor(Math.random()*colors.length);
    return colors[random];
}

function gernerateRandomColors(num) {
    //make an array
    //add num random colors to array
    //return that array
    let arr = [];
    for(let i = 0; i < num; i++) {
        //get random color and push into array
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    //pick a red from 0 to 255
    //pick a green from 0 to 255
    //pick a blue from 0 to 255
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    //"rgb(r, g, b)"
    return "rgb(" + r +  ", " + b + ", " + b +")";
}