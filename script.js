function CalcolaFN(){
    let etaa = document.getElementById("eta").value;
    let etaaStile = document.getElementById("eta");
    let settoree = document.getElementById("settore").value.toLowerCase();
    let settoreeStile = document.getElementById("settore")
    let risultatoo = document.getElementById("risultato");
    let prezzoo = 20;
            if (settoree === "tribuna") {
                prezzoo = prezzoo + 30;
            }
            if (etaa == "" && settoree == ""){
                settoreeStile.style.borderColor = "red";
                etaaStile.style.borderColor = "red";
                risultatoo.innerText = "Inserire un età e un settore valido";
            }else{
                if (etaa < 14) {
                settoreeStile.style.borderColor = "gray";
                etaaStile.style.borderColor = "gray";
                prezzoo = prezzoo - 10;
                risultatoo.style.color = "green";
            } else {
                settoreeStile.style.borderColor = "gray";
                etaaStile.style.borderColor = "gray";
                risultatoo.style.color = "black";
            }
                risultatoo.innerText = "Prezzo: " + prezzoo + "€";
            }
}
function VerificaVipFN() {
            let codice = document.getElementById('codiceVip').value;
            let input = document.getElementById('codiceVip');
            let risultatoVip = document.getElementById('risultatoVip');
            if (codice === "") {
                input.style.borderColor = "red";
                risultatoVip.innerText = "Inserire un codice";
                risultatoVip.style.backgroundColor = "white";
            } else if (codice === "VIP2024") {
                input.style.borderColor = "gray";
                risultatoVip.innerText = "Accesso Area Lounge";
                risultatoVip.style.backgroundColor = "gold";
            } else {
                input.style.borderColor = "gray";
                risultatoVip.style.backgroundColor = "white";
                risultatoVip.innerText = "Tessera Standard";
            }
        }