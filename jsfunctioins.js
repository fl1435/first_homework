function celToFahr(n) {
   temp = ((n * 9.0 / 5.0) + 32);
   return Math.round(temp)
}

const n = 21
console.log(celToFahr(n))

function fahrToCel (v) {
    newTemp = ((v - 32) / 1.8);
    return Math.round(newTemp)
}

const v = 80
console.log(fahrToCel(v))