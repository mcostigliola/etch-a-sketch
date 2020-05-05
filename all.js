const grid_num = prompt('Insert number from 16 to 64');
const grid = document.querySelector('.grid');

// Create grid
function createGrid(grid_num){

    // Verify user input
    if(grid_num < 16 || grid_num > 64){

        alert('Insert a valid number. Range 16 - 64');
        grid_num = prompt('Insert number from 16 to 64');

    }
    else{

        let numberGrid = grid_num * grid_num;
        let htmlStyles = window.getComputedStyle(document.querySelector('html')); 
        let rowNumber = parseInt(htmlStyles.getPropertyValue('--rowNum'));
        let colNumber = parseInt(htmlStyles.getPropertyValue('--colNum'));
        document.documentElement.style.setProperty('--colNum', grid_num);
        document.documentElement.style.setProperty('--rowNum', grid_num);

        // Create grid for any element with numberGrid and create hover effect
        for(let i = 0; i < numberGrid; i++){

            const div = document.createElement('div');
            const gridItem = Array.from(document.querySelectorAll('.gridItem'));
            div.addEventListener('mouseover', pixelate);
            div.classList.add('gridItem');
            gridItem.forEach(divs => divs.addEventListener('mouseover',pixelate));
            grid.appendChild(div);

        }

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

}

// Change grid number with a refresh page
const btnIns = document.querySelector('#insNum').addEventListener('click', newNumber);

function newNumber(){
    location.reload();
}



createGrid(grid_num);
