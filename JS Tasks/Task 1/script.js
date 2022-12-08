/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */
function calculate() {
    let kgStr = document.getElementById("search").value
    let kg = (+(kgStr)).toFixed(2)
    if (isNaN(kg)) {
        document.getElementById("search").value = "bad input"
        return
    }

    let svarai = (kg * 2.2046).toFixed(2)
    let gramai = (kg * 1000).toFixed(2)
    let uncijos = (kg * 35.274).toFixed(2)

    document.getElementById("output").innerHTML = `Kilogramai: ${kg} kg. Svarai: ${svarai} lb. Gramai: ${gramai} gr. Uncijos: ${uncijos} oz.`
}
