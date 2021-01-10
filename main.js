
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
    return;
}

function addListItem() {

    const newItemInput = document.querySelector('input[name="newListElement"]');
    const newItem = newItemInput.nodeValue;
    ToDo.push(newItem);
   showList(ToDo);
}
