let arr =[];
function addtodo(){
    let inputElement = document.querySelector(".text");
    let dateElement = document.querySelector(".date");
    let items = inputElement.value;
    let dues = dateElement.value;
    arr.push({item:items,due:dues});
    inputElement.value='';
    dateElement.value='';
    display();
}
function display(){
    let listitem = document.querySelector(".list");
    let newHtml = ''; 
    // try to destructuring
    for(let i =0;i<arr.length;i++){
        newHtml +=`
        <span>${arr[i].item}</span>
        <span>${arr[i].due}</span>
        <button class ="but del" onclick="deleteitem(${i});">Delete</button>
        `
    }
    listitem.innerHTML=newHtml;
}
function deleteitem(index){
    arr.splice(index,1);
    display();
}