
const play= $('#play');
const instructions= $('#instructions');
const boardGame = $('#boardGame');

play.on("mousedown", () => {
    $(boardGame).empty();
    makeBoard();
    if (play.text() === 'Play') {
        play.text('New Game');
    }else{
        play.text('Play');
    }
    startGame()
})

const makeBoard = () => {
    let count = 1;

    for (let r=0; r < 3; r++) {
        let row=$(`<div/>`);
        for (let c=0; c < 3; c++) {
            let button = $(`<button/>` , {
                id: `${count}` ,
                class: `slot`
            });
            row.append($(button).clone().text('_'));
            count++
        }
        $(boardGame).append(row);
    }
}


const startGame = () => {
    const X= "X";
    const O= "O";

    let firstPlayer= Math.floor(Math.random() *100);
    firstPlayer= firstPlayer > 50 ? X : O;

    let currentPlayer = firstPlayer;
    let move = 0;
    let slots= new Array(9);
    

    instructions.text(`Player ${firstPlayer} starts the game!`);

    $(`.slot`).on("mouseup", (e) => {
        console.log(e.target.id);
        playerMove(e.target.id);
    })

    const playerMove = (slot) => {
        move++;
        slots[slot-1] = currentPlayer;
        let playerSlot = $(`#${slot}`);
        playerSlot.text(currentPlayer);
        currentPlayer = currentPlayer === X ? O : X;

        playerSlot.off("mouseup");

        
        

        instructions.text(`Now it's ${currentPlayer}'s turn`);


        checkWinner();
        if (move === 9) {
            alert(`It's a tie! Game over.`)
        }


    }

    const checkWinner = () => {
        let win= slots[0];
        if (win != null) {
            if (win === slots[1] && win ===slots[2]) {
                alert(`${win} wins!`);
            }
            else if (win === slots[3] && win === slots[6]) {
                alert(`${win} wins!`);
            }
            else if (win === slots[4] && win === slots[8]) {
                alert(`${win} wins!`);
            }
        }
        let winTwo= slots[1];
        if (winTwo != null) {
            if (winTwo === slots[4] && winTwo === slots[7]) {
                alert(`${winTwo} wins!`)
            }
        }
        let winThree= slots[2];
        if (winThree != null) {
            if (winThree === slots[5] && winThree === slots[8]) {
                alert(`${winThree} wins!`);
            }
            else if (winThree === slots[4] && winThree === slots[6]) {
                alert(`${winThree} wins!`);
            }
        }
        let winFour= slots[3];
        if (winFour != null) {
            if (winFour === slots[4] && winFour === slots[5]) {
                alert(`${winFour} wins!`);
            }
        }
        let winFive= slots[6];
        if (winFive !=null) {
            if (winFive === slots[7] && winFour === slots[8]) {
                alert(`${winFive} wins!`);
            }
        }
}


}