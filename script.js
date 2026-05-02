let destinacije = ["Pariz", "Maldivi", "Alpi"];

function brojDestinacija(niz) {
    return niz.length;
}

function porukaPutovanja(ime) {
    return "Hvala na poruci, " + ime + "! Javićemo vam se uskoro.";
}

let kartice = document.querySelectorAll(".destinacija-kartica");

for (let i = 0; i < kartice.length; i++) {
    kartice[i].addEventListener("mouseover", function () {
        kartice[i].style.backgroundColor = "#e0f7ff";
    });

    kartice[i].addEventListener("mouseout", function () {
        kartice[i].style.backgroundColor = "white";
    });
}

let forma = document.querySelector(".kontakt-forma");

if (forma) {
    forma.addEventListener("submit", function (e) {
        e.preventDefault();

        let ime = document.querySelector("input[type='text']").value;

        if (ime === "") {
            alert("Morate uneti ime.");
        } else {
            alert(porukaPutovanja(ime));
        }
    });
}

let broj = brojDestinacija(destinacije);

if (broj > 2) {
    console.log("Imamo više destinacija u ponudi.");
} else {
    console.log("Malo destinacija.");
}
let gradovi = ["Pariz", "Maldivi", "Alpi"];

let velikaSlova = gradovi.map(function(g){
    return g.toUpperCase();
});

let filtrirani = gradovi.filter(function(g){
    return g.length > 4;
});

let naslov = document.querySelector(".destinacije h2");

if(naslov){
    naslov.addEventListener("click", function(){

        let novaLista = document.createElement("ul");

        for(let i = 0; i < velikaSlova.length; i++){
            let li = document.createElement("li");
            li.textContent = velikaSlova[i];
            novaLista.appendChild(li);
        }

        document.querySelector(".destinacije").appendChild(novaLista);
    });
}

let tekst = "SkyTravel";
let mali = tekst.toLowerCase();
let deo = tekst.substring(0,3);