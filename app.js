function populateBoard(size) {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;


    let squaresTotal = size * size;
    for (let i = 0; i < squaresTotal; i++) {
        let square = document.createElement('div');
        square.style.backgroundColor = 'pink';
        board.insertAdjacentElement('beforeend', square);
    }
}

populateBoard(16);

function changeSize(input) {
    if (input > 1 && input <= 100) {
        console.log('this works');
        populateBoard(input);
    } else {
        alert('I cannot go above 100 squares sowwy...')
    }
}

