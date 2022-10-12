const button = document.getElementById('btn2');

// const nomi = ["Ture", "Nino", "Saro", "Pippo", "Placido"]
// const cognomi = ["1300", "Turbo Diesel", "Copertone", "Testa Nica", "Mao Mao"]

const nomi = ["Francesco", "Gianluca", "Mattia", "Vincenzo", "Lino"]
const cognomi = ["Rossi", "Beghelli", "Maretti", "Testa", "Mao Mao"]

let fx = function() {
    
    const random1 = Math.floor(Math.random() * nomi.length);
    console.log(random1, nomi[random1]);
    const random2 = Math.floor(Math.random() * cognomi.length);
    console.log(random2, cognomi[random2]);
    document.getElementById('nome').innerHTML = nomi[random1]
    document.getElementById('cognome').innerHTML = cognomi[random2]


}
button.addEventListener('click' ,fx);