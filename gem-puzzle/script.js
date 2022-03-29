'use strict';

const field = document.querySelector('.field');
const cellSize = 100;

const empty = {
    top: 0,
    left: 0
};

//array (updating cell data)
const cells = [];
cells.push(empty);

//changing the coordinates of the cell
function move(index) {
    const cell = cells[index]
    const emptyLeft = empty.left;
    const emptyTop = empty.top;
    const leftDiff = Math.abs(empty.left - cell.left);
    const topDiff = Math.abs(empty.top - cell.top);

    //only to the next cell
    if (leftDiff + topDiff > 1) {
        return;
    }

    cell.element.style.left = `${empty.left * cellSize}px`;
    cell.element.style.top = `${empty.top * cellSize}px`;

    empty.left = cell.left;
    empty.top = cell.top;

    cell.left = emptyLeft;
    cell.top = emptyTop;

    const isFinisfed = cells.every(cell => {
        return cell.value === cell.top * 4 + cell.left
    });

    if (isFinisfed) {
        alert('You won');
    }
}


const numbersRandom = [...Array(15).keys()]
    .sort(() => Math.random() - 0.5);

//creating 15 rectangles
for (let i = 1; i <= 15; i++) {
    const cell = document.createElement('div');
    const retLeft = i % 4;
    const retTop = (i - retLeft) / 4;
    const value = numbersRandom[i - 1] + 1;

    cells.push({
        value: 0,
        left: retLeft,
        top: retTop,
        element: cell
    });

    cell.className = 'cell'
    cell.innerHTML = value;

    cell.style.left = `${retLeft * cellSize}px`;
    cell.style.top = `${retTop * cellSize}px`;

    field.append(cell);

    //movement of cells
    cell.addEventListener('click', () => {
        move(i);
    })
}