function celToFahr(tempCel) {
   temp = ((tempCel * 9.0 / 5.0) + 32);
   return Math.round(temp)
}

const tempCel = 21
console.log(celToFahr(tempCel))

function fahrToCel (tempFahr) {
    newTemp = ((tempFahr - 32) / 1.8);
    return Math.round(newTemp)
}

const tempFahr = 80
console.log(fahrToCel(tempFahr))