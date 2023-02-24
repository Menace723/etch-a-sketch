let color = 'black';
let click = false;
//clicking to start and stop sketch
document.querySelector('body').addEventListener('click',function(e){
    if(e.target.tagName != 'BUTTON'){
        click = !click;
        let sketch = document.querySelector('#sketch');
        if (click){
            sketch.innerHTML = "click to stop drawing";
        } else {
            sketch.innerHTML = "click to start drawing!"
        }
    }
})

const sizeValue = document.getElementById('sizeValue');
const sizeRange = document.getElementById('sizeRange');
sizeRange.onchange = (e) => createBoard(e.target.value);


function createBoard(size){
    let board = document.querySelector('.board');
    //show size value
    sizeValue.innerHTML = `${size} x ${size}`;

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    //creating the divs for board
    for (let i = 0; i < size * size; i++) {
        let boardElement = document.createElement('divs');
        //drawing function
        boardElement.addEventListener('mouseover', draw);
        board.insertAdjacentElement('beforeend', boardElement);
  }
  console.log(size)
}

function draw() {
    if (click){
        if (color == 'random') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
    else {
        this.style.backgroundColor = 'black';
    }
}}


function setColor(colorChoice) {
    color = colorChoice;

}

function clearBoard() {
    let boardElement = document.querySelectorAll('divs');
    boardElement.forEach((divs) => divs.style.backgroundColor = 'white')
}