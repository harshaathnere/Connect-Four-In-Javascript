document.addEventListener('DOMContentLoaded',() =>{
    const square = document.querySelectorAll('.grid div');
    const result = document.querySelector('#result');
    const displayCurrentPlayer = document.querySelector('#current-player');
    let currentPlayer =1;
 const winningArray =[]

    function checkBoard(){
    for (let y =0; winningArray.length; y++){
        
    }
    }
    for (let i=0; i< square.length; i++){
              square[i].onclick =() =>{

            if(square[i +7].classList.contains('taken')){
                  if(currentPlayer ==1){
                    square[i].classList.add('taken')
                    square[i].classList.add('player-one')
                    currentPlayer =2;
                  displayCurrentPlayer.innerHTML = currentPlayer
                   }
                  else if(currentPlayer ==2){
                    square[i].classList.add('taken')
                    square[i].classList.add('player-Two')
                    currentPlayer =1;
                   displayCurrentPlayer.innerHTML = currentPlayer
                   }
                
            } else
            alert("Can not go here")

            checkBoard()

           
        }
    }
})