let ToDo = ["trilero", "async/promises", "myTryLaravel", "triogger css animations from js", "hack money-maker-machine"]

function showList (ToDo) {
    const container = document.getElementById("list");
    const list = document.createElement('ul');

    for(let i = 0; i < ToDo.length; i++) {
        let listElement = document.createElement('li');
        listElement.appendChild(document.createTextNode(ToDo[i]));
        list.appendChild(listElement);
        container.appendChild(list);
    }
    return list;
}
console.log(ToDo);
showList(ToDo);