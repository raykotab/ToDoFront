
let ToDo = [
  "trilero",
  "myTryLaravel",
  "trigger css animations from js",
  "sequence CSS animations in chain",
  "hack money-maker-machine",
  "finally rule the world",
];


const list = document.getElementById("list");


function showList(ToDo) {

    document.getElementById("list").innerHTML = "";

    for (let i = 0; i < ToDo.length; i++) {
        list.innerHTML += `
            <li class="buttons">
            <span> ${ToDo[i]} </span> 
            <div>
                <button type="button" onclick="deleteItem(${i})">dilit</button>
                <button type="button" onclick="editItem(${i})">idit</button>
            </div>
            </li>
        `;
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
    showList(ToDo);
   
}

function addListItem() {

    const newItemInput = document.querySelector('input[name="newListElement"]');
    console.log(newItemInput);
    const newItem = newItemInput.value;
    ToDo.push(newItem);
    showList(ToDo);
}

function editItem (indiceArray) {

    const updatedItemInput = document.querySelector('input[name="newListElement"]');
    console.log(updatedItemInput);
    const updatedItem = updatedItemInput.value;
    ToDo.splice(indiceArray, 1, updatedItem);
    showList(ToDo);
    
}