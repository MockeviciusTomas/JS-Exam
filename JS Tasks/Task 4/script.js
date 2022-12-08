/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

function loadCars() {
    let data = cars
    let carsList = document.getElementById("cars-list")

    data.forEach((car) => {
        let li = document.createElement("li");
        li.innerHTML = `<h1>${car.brand}</h1>`;
        carsList.appendChild(li);

        let innerList = document.createElement("ul")

        car.models.forEach((model) => {
            let liModel = document.createElement("li");
            liModel.innerHTML = `<h3>${model}</h3>`;
            innerList.appendChild(liModel);
        })
        
        carsList.appendChild(innerList)
    })
}
