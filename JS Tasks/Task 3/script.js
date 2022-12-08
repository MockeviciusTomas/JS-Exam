/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

function getUsers() {
    let arr = httpGet(ENDPOINT)
    let usersList = document.getElementById("users-list")

    document.getElementById("message").style.display = "none"

    arr.forEach((user)=>{
        let li = document.createElement("li");
        li.innerHTML = `<img src="${user.avatar_url}" width="36" height="36"> <a href="${user.html_url}">${user.login}</a>`;
        usersList.appendChild(li);
    })
}

function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest()
    xmlHttp.open("GET", theUrl, false)
    xmlHttp.send(null)
    return JSON.parse(xmlHttp.responseText)
}
