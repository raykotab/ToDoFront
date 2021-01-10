
//localStorge.setItem('item')
//getItem
//removeItem
//clear
//storageAvailable('sessionStorage')
//create function populate storage
//ToDo.onchange = populateStorage
//window.addEventListener('storage', function(e) {
    //document.querySelector('.my-storage').textContent = JSON.stringify(e.storageArea);
    //});
    
    let ToDo = [
        "trilero",
        "trigger css animations from js",
        "sequence CSS animations in chain",
        "API favourite Movies",
        "myTryLaravel",
        "Kata Gilded Rose",
        "hack money-maker-machine",
        "finally rule the world",
    ];
    
    
const list = document.getElementById("list");


function showList(ToDo) {
    
    document.getElementById("list").innerHTML = "";
    localStorage.clear();

    for (let i = 0; i < ToDo.length; i++) {
        localStorage.setItem([i], ToDo[i]);
        list.innerHTML += `
        <li class="buttons">
        <span> ${ToDo[i]} </span> 
            <div>
            <button type="button" onclick="deleteItem(${i})">Delete</button>
            <button type="button" onclick="editItem(${i})">Edit</button>
            </div>
            </li>
            `;
            ToDo.onchange = localStorage.setItem([i], ToDo[i]);
    }
    
//   for (let i = 0; i < ToDo.length; i++) {
//     let listElement = document.createElement("li");
//     listElement.appendChild(document.createTextNode(ToDo[i]));
//     let button = document.createElement("BUTTON");
//     button.innerHTML = "dilit";
//     listElement.appendChild(button);
//     list.appendChild(listElement);
//     container.appendChild(list);
//   }
}
showList(ToDo);


console.log(localStorage);


function resolveAfterHalfSec () {
    return new Promise(resolve => {
        setTimeout (() => {
            resolve('newToDo');
        }, 500);
    });
}


async function deleteItem(indiceArray) {

    await resolveAfterHalfSec();
    ToDo.splice(indiceArray, 1);
    let key = localStorage.key;
    key = indiceArray; 
    localStorage.removeItem(key)
    showList(ToDo);
   
}

function addListItem() {

    const newItemInput = document.querySelector('input[name="newListElement"]');
    
    const newItem = newItemInput.value;
    ToDo.push(newItem);
    showList(ToDo);
}

function editItem (indiceArray) {

    const updatedItemInput = document.querySelector('input[name="newListElement"]');
    
    const updatedItem = updatedItemInput.value;
    ToDo.splice(indiceArray, 1, updatedItem);
    showList(ToDo);
    
}

        

