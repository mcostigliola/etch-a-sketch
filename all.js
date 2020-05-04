const grid_num = 16;
const grid = document.querySelector('.grid');


console.log('funziono');


// Create grid
function createGrid(grid_num){
    let numberGrid = grid_num * grid_num;

    for(let i = 0; i < numberGrid; i++){
        const div = document.createElement('div');
        const gridItem = Array.from(document.querySelectorAll('.gridItem'));
        div.addEventListener('mouseover', pixelate);
        div.classList.add('gridItem');
        gridItem.forEach(divs => divs.addEventListener('mouseover',pixelate));
        grid.appendChild(div);
    }
    return;
}

// Add persistent hover with class blackItem.
function pixelate(){
    this.classList.add('blackItem')
}

// Select all <div> with class blackItem
const hoverItems = document.getElementsByClassName('gridItem blackItem');
const resetBtn = document.querySelector('#btn-reset').addEventListener('click', reset);

// Remove class blackItem  Goes on as long as there’s things left in the collection
function reset(){
    while(hoverItems[0]){
    hoverItems[0].classList.remove('blackItem');
    }
    console.log('premuto reset')

}



createGrid(grid_num);
