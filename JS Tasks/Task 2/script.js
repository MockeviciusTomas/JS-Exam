/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

function clickMe() {
    let stateStr = document.getElementById("btn__state").innerHTML
    let state = +(stateStr) + 1
    document.getElementById("btn__state").innerHTML = state
}