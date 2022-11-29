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

// ==================================================
/* Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio
appropriato sull’esito del controllo. Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte ? Se dobbiamo confrontare qualcosa che "cosa" ci serve ? */

const emailsList = `tt@gmail.com,arcudilu@gmail.com,albertobaggio96@gmail.com,giulia.ballestrero@gmail.com,vincenzobelardo10@gmail.com,tommasob1210@gmail.com,popomomo.0545@gmail.com,manuelbravaccini2000@gmail.com,sebastianocalella97@gmail.com,matteocarbone17@live.com,rcartamantiglia@gmail.com,castellucciluca98@gmail.com,samuelecerretti@gmail.com,emonikk.mo@gmail.com,giorgiodll93@gmail.com,saradonzie@gmail.com,claudioemmolo90@gmail.com,renatofringuello@gmail.com,98.fumagalli.andrea@gmail.com,gallitto.giada@gmail.com,irrera.antonio2003@gmail.com,locastof30@gmail.com,lucamarchesani.lavoro@gmail.com,donato.montrone94@gmail.com,alessio.napoletano.job@gmail.com,samwellsoficcial@gmail.com
,riccardinux@gmail.com,lorenzo.ognibene@gmail.com,andreaseiuno.ap@gmail.com,picariellopaolo224@gmail.com,aniello.piscopo0707@gmail.com,prestisimone96@gmail.com,nanobu88@gmail.com,tripodi.angelo@gmail.com,francescotrudu84@gmail.com,sebastiano.urban98@gmail.com,thegeniusnikonom@gmail.com`

const emailsToArray = emailsList.split(",");
const buttonEmail = document.getElementById("email-btn");

buttonEmail.addEventListener("click", function () {
const checkEmail = document.getElementById("email").value;
// console.log(checkEmail);
let checked = false;


for (let i = 0; i < emailsToArray.length; i++) {
    if (checkEmail == emailsToArray[i]) {
        checked = true;
    } 
}
    if (checked) {
        console.log("entra");
        document.getElementById("email-output").innerHTML = `<p>Il ticket è stato spedito via e-mail</p>`
    } else {
        document.getElementById("email-output").innerHTML = `<p>E-mail errata o non presente nella lista</p>`
        console.log("non sei nella lista");
    }
})