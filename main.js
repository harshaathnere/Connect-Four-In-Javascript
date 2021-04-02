document.addEventListener('DOMContentLoaded',() =>{
    const square = document.querySelectorAll('.grid div');
    const result = document.querySelector('#result');
    const displayCurrentPlayer = document.querySelector('#current-player');
    let currentPlayer =1;
    for (let i=0; i< square.length; i++){
        square[i].onclick =() =>{
            alert('You have clicked' +i);
        }
    }
})