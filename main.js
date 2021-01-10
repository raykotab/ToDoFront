
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
  //return list;

 
   
  
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
    console.log(ToDo);
    console.log(indiceArray);

    await resolveAfterHalfSec();
    //let time = await location.reload();
    ToDo.splice(indiceArray, 1);
    //location.reload();
    showList(ToDo);
    return;
    //return result;
}




function addListItem() {
  //pillar el input de form
  //asociarlo a una variable string
  //pushearlo al array
}
