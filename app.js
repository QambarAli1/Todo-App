function addTodo(){
    var getUl = document.getElementById('todoList');
    var createLi = document.createElement('li');
    
    var getInptodo = document.getElementById('inptTodo');
    var inpTodoValue = document.createTextNode(getInptodo.value);
    var appTxtinLi = createLi.appendChild(inpTodoValue);
    
    getInptodo.value = '';
    // var dltBtn = document.createElement('button');
    // var btntxt = document.createTextNode('Delete');
    // dltBtn.appendChild(btntxt);
    // createLi.appendChild(dltBtn);
    var appLi =  getUl.appendChild(createLi);
 
    var createTrash = document.createElement('i');
    createTrash.setAttribute("class","fa fa-trash");
    createTrash.setAttribute("aria-hidden","true");
    createLi.appendChild(createTrash);
    createTrash.setAttribute("onclick","dlt(this)")
    
    var createEdit = document.createElement('i');
    createEdit.setAttribute("class","fa fa-pencil-square-o");
    createEdit.setAttribute("aria-hidden","true");
    createLi.appendChild(createEdit);
    createEdit.setAttribute("onclick","edit(this)")
 
}
function dltAll(){
    var getUl = document.getElementById('todoList');
    getUl.innerHTML = '';
    var getInptodo = document.getElementById('inptTodo');
    getInptodo.value = ''
}
function dlt(e){
    e.parentNode.remove();
}
function edit(e){
    var chngetxt = prompt('Ëdit');
    e.parentNode.firstChild.textContent = chngetxt;
}
