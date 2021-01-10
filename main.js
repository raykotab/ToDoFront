
let ToDo = [
  "trilero",
  "async/promises",
  "myTryLaravel",
  "trigger css animations from js",
  "sequence CSS animations in chain",
  "hack money-maker-machine",
  "finally rule the world",
];

//const container = document.getElementById("list");
const list = document.getElementById("list");


function showList(ToDo) {

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
  //return list;

  //locationReload(), set Timeout

  
}

console.log(ToDo);
showList(ToDo);



function resolveAfterHalfSec () {
    return new Promise(resolve => {
        setTimeout (() => {
            resolve('resolved');
        }, 500);
    });
}

async function deleteItem(indiceArray) {
    console.log(ToDo);

    await resolveAfterHalfSec(ToDo.splice(indiceArray, 1));
    console.log(ToDo);
    
    location.reload();
}


console.log(ToDo);

function addListItem() {
  //pillar el input de form
  //asociarlo a una variable string
  //pushearlo al array
}
