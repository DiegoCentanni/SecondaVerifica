function CalcolaFN(){
    let etaa = document.getElementById("eta").value;
    let settoree = document.getElementById("settore").value.toLowerCase();
    let risultatoo = document.getElementById("risultato");
    let prezzoo = 20;
            if (settoree === "tribuna") {
                prezzoo = prezzoo + 30;
            }
            if (etaa < 14) {
                prezzoo = prezzoo - 10;
                risultatoo.style.color = "green";
            } else {
                
                risultatoo.style.color = "black";
            }
        
            risultato.innerText = "Prezzo Finale: " + prezzoo + "€";
}