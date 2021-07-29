function addTodo() {
    var getInptodo = document.getElementById('inptTodo');
    var getUl = document.getElementById('todoList');

    if (getInptodo.value != "") {
        var divForList = document.createElement('div');
        divForList.setAttribute('class','todos')
        var inpTodoValue = document.createTextNode(getInptodo.value);
        var para = document.createElement('p')
        para.setAttribute('class','textOfTodo')
        para.appendChild(inpTodoValue);
        divForList.appendChild(para);
        var todoItems = getUl.appendChild(divForList);

        var divForIcons = document.createElement('div');
        divForIcons.setAttribute('class','iconsofTodo')
        var createTrash = document.createElement('i');
        createTrash.setAttribute("class", "fa fa-trash");
        createTrash.setAttribute("aria-hidden", "true");
        divForList.appendChild(createTrash);
        createTrash.setAttribute("onclick", "dlt(this)")
        var createEdit = document.createElement('i');
        createEdit.setAttribute("class", "fa fa-pencil-square-o");
        createEdit.setAttribute("aria-hidden", "true");
        divForList.appendChild(createEdit);
        createEdit.setAttribute("onclick", "edit(this)")
        
        getInptodo.value = '';
    }
    
}
function dltAll() {
    var getUl = document.getElementById('todoList');
    getUl.innerHTML = '';
    var getInptodo = document.getElementById('inptTodo');
    getInptodo.value = ''
}
function dlt(e) {
    e.parentNode.remove();
}
function edit(e) {
    var chngetxt = prompt('Ëdit',e.parentNode.firstChild.textContent);
    e.parentNode.firstChild.textContent = chngetxt;
}
