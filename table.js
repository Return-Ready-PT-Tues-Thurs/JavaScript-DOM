const items = document.querySelectorAll('div')[1].children;
let table = document.querySelector('div');

function addItems(item){
    console.log({items})
    table.appendChild(item)
}
for (let i=0; i<items.length; i++){
    let item = items[i];
    const newNode = document.createElement('li');
    const text = document.createTextNode(item.innerText);
    newNode.appendChild(text);
    addItems(newNode);
}
