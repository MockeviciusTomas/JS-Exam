/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Item () {
    this.sum = function (a, b) {
        return a + b
    }
    
    this.subtraction = function (a, b) {
        return a - b
    }
    
    this.multiplication = function (a, b) {
        return a * b
    }
    
    this.division = function (a, b) {
        return a / b
    }
}

const item = new Item()

console.log(item.sum(4, 8))
console.log(item.subtraction(4, 8))
console.log(item.multiplication(4, 8))
console.log(item.division(4, 8))