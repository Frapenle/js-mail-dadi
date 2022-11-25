// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

const buttonElement = document.getElementById("randomButton");

buttonElement.addEventListener("click", function(){
    const userOneValue = document.getElementById("user").value;
    const playerOne = Math.floor(Math.random() * 6) + 1;
    const playerTwo = Math.floor(Math.random() * 6) + 1;
    const pcResultText = document.getElementById("pc");
    const userResultText = document.getElementById("player");
    const result = document.querySelector(".result");
    
    
    if (playerOne > playerTwo) {
        userResultText.innerHTML = `<p class="output">${userOneValue} hai totalizzato ${playerOne}</p>`;
        pcResultText.innerHTML = `<p class="output">PC ha totalizzato ${playerTwo}</p>`;
        result.innerHTML = `<p class="green">HAI VINTO</p>`;
    } else if (playerOne < playerTwo) {
        userResultText.innerHTML = `<p class="output">${userOneValue} hai totalizzato ${playerOne}</p>`;
        pcResultText.innerHTML = `<p class="output">PC ha totalizzato ${playerTwo}</p>`;
        result.innerHTML = `<p class="red">HAI PERSO</p>`;

    } else {
        userResultText.innerHTML = `<p class="output">${userOneValue} hai totalizzato ${playerOne}</p>`;
        pcResultText.innerHTML = `<p class="output">PC ha totalizzato ${playerTwo}</p>`;
        result.innerHTML = `<p class="yellow">PARITÀ</p>`;
    }
})

