
const statusDisplay = document.querySelector('.spelstatus');

    let gameActive = true;

    let currentPlayer = "X";

    let gameState = ["", "", "", "", "", "", "", "", ""];

      const winningMessage = () => `Spelare ${currentPlayer} har vunnit!`;
      const drawMessage = () => `Det blev oavgjort!`;
      const currentPlayerTurn = () => `Det är ${currentPlayer} tur`;

                statusDisplay.innerHTML = currentPlayerTurn();

                 function dragspelad() {

                 }
                 function spelarebytte() {

                 }
                 function resulteradvinst() {

                 }
                 function CellClick() {

                 }
                 function startaomspel() {

                 }

 document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', CellClick));
 document.querySelector('.spelomstart').addEventListener('click', startaomspel);

               function CellClick(CellClickEvent) {


                  const CellClick = CellClickEvent.target;

                  const CellClickIndex = parseInt(
                  CellClick.getAttribute('data-cell-index')

                  );

                  if (gameState[CellClickIndex] !== "" || !gameActive) {

                  return;
                  }

    dragspelad(CellClick, CellClickIndex);
    resulteradvinst();
}


                        function dragspelad(CellClick, CellClickIndex) {

                        gameState[CellClickIndex] = currentPlayer;
                        CellClick.innerHTML = currentPlayer;
                 }




                    const winningConditions = [
                        [0, 1, 2],
                        [3, 4, 5],
                        [6, 7, 8],
                        [0, 3, 6],
                        [1, 4, 7],
                        [2, 5, 8],
                        [0, 4, 8],
                        [2, 4, 6]
                        ];


                  function resulteradvinst() {

                   let roundWon = false;
                   for (let i = 0; i <= 7; i++) {

                   const winCondition = winningConditions[i];

                      let a = gameState[winCondition[0]];

                      let b = gameState[winCondition[1]];

                      let c = gameState[winCondition[2]];


                   if (a === '' || b === '' || c === '') {

              continue;
        }

                  if (a === b && b === c) {

            roundWon = true;
            break
        }
    }

                 if (roundWon) {
           statusDisplay.innerHTML = winningMessage();
           ameActive = false;
           return;
        }
    }



                  const winningConditions = [
                      [0, 1, 2],
                      [3, 4, 5],
                      [6, 7, 8],
                      [0, 3, 6],
                      [1, 4, 7],
                      [2, 5, 8],
                      [0, 4, 8],
                      [2, 4, 6]
                      ];


            function resulteradvinst() {

              let roundWon = false;
              for (let i = 0; i <= 7; i++) {

              const winCondition = winningConditions[i];

                  let a = gameState[winCondition[0]];

                  let b = gameState[winCondition[1]];

                  let c = gameState[winCondition[2]];


               if (a === '' || b === '' || c === '') {

            continue;

            }

            if (a === b && b === c) {

                roundWon = true;
                break
            }
        }


           if (roundWon) {
              statusDisplay.innerHTML = winningMessage();
              gameActive = false;
              return;
        }


        let roundDraw = !gameState.includes("");


         if (roundDraw) {
             statusDisplay.innerHTML = drawMessage();
             gameActive = false;
             return;
        }

        spelarebytte();
    }

           function spelarebytte() {


               currentPlayer = currentPlayer === "X" ? "O" : "X";
               statusDisplay.innerHTML = currentPlayerTurn();

}



          function startaomspel() {

             gameActive = true;
             currentPlayer = "X";
             gameState = ["", "", "", "", "", "", "", "", ""];

               statusDisplay.innerHTML = currentPlayerTurn();
                document.querySelectorAll('.cell')
                .forEach(cell => cell.innerHTML = "");
}
