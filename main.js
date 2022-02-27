// tady je místo pro náš program

// Uvodni cviceni
/*
let salary = 40001;
let personName = "Andrea";

if (salary > 40000 && personName === "Andrea") {
    console.log("pekny plat");
} else if (salary > 25000){
    console.log("OK")
} else {
    console.log("rekni si o vic");
}
*/


function nahodneCislo() {
   let cislo = Math.ceil(Math.random() *6);

    if (cislo === 1) {
        nastavZpravu("zprava", "Hodil jsi jedničku. Zkus to znovu.");
        zmenObrazek("kostka", "obrazky/1.png");
    } else if (cislo === 2) {
        nastavZpravu("zprava", "Hodil jsi dvojku. Zkus to znovu.");
        zmenObrazek("kostka", "obrazky/2.png");
    } else if (cislo === 3) {
        nastavZpravu("zprava", "Hodil jsi trojku. Zkus to znovu.");
        zmenObrazek("kostka", "obrazky/3.png");
    } else if (cislo === 4) {
        nastavZpravu("zprava", "Hodil jsi čtyřku. Zkus to znovu.");
        zmenObrazek("kostka", "obrazky/4.png");
    } else if (cislo === 5) {
        nastavZpravu("zprava", "Hodil jsi pětku. Zkus to znovu.");
        zmenObrazek("kostka", "obrazky/5.png");
    } else {
        nastavZpravu("zprava", "Super, vyhráváš! Hodil jsi šestku.");
        zmenObrazek("kostka", "obrazky/6.png");
    }
}

function nastavZpravu(id, text) {
    document.getElementById(id).innerHTML = text;
}

function zmenObrazek(id, obrazek) {
    document.getElementById(id).src = obrazek;
}

