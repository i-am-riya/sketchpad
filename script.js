let newGrid = document.getElementById('newGrid');
let container = document.getElementById('container');

createGrid(16);

function createGrid(num) {
    container.innerHTML = '';
    for (i = 1; i <= num * num; i++) {
        const box = document.createElement('div');
        box.classList.add('boxes');
        box.addEventListener('mouseenter', () => {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            let color = `rgb(${r}, ${g}, ${b})`;
            box.style.backgroundColor = color;
        })
        container.appendChild(box);
    }

}

newGrid.addEventListener('click', () => {
    let num = prompt("Enter the numbers of squares from 1 to 100")
    if (num >= 1 && num <= 100) {
        createGrid(num);
    }
    else {
        alert("Enter number between 1 to 100");
    }
})