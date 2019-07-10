const addTodoButton = document.querySelector('#add-todo-btn');
addTodoButton.addEventListener('click',() => addNewTodoItem());

const addNewTodoItem = () => {
    const todoText = document.querySelector('#todo-input');
    const todoTextValue = todoText.value;
    todoText.value = '';
    todoText.focus();
    const todoList = document.querySelector('.todo-list');
    const newTodoItem = document.createElement("li");
    newTodoItem.textContent = todoTextValue.trim();
    newTodoItem.setAttribute('class','todo-item')
    todoList.appendChild(newTodoItem);
}

const todoListContainer = document.querySelector(".todo-list");

todoListContainer.addEventListener('click', (e) => handleItemClick(e.target));

const handleItemClick = (element) => {
    element.style.textDecoration = 
        element.style.textDecoration === ''?
            'line-through':'';
}


const filterContainer = document.querySelector('.filter-btn-container');
filterContainer.addEventListener('click', (e) => handleFilterChange(e.target));

const handleFilterChange = (element) => {
    const todoListContainer = document.querySelector(".todo-list");
    const todoItems = todoListContainer.children;

    for(var i=0;i<todoItems.length;i++){
        switch(element.id){
            case 'all-filter':
                displayAllTodos(todoItems[i]);
                break;
            case 'done-filter':
                displayDoneTodos(todoItems[i])
                break;
            case 'left-filter':
                displayLeftTodos(todoItems[i]);
                break;
            default:
        }
    }
}


const displayAllTodos = (todoItems) => {
    todoItems.style.display = '';
}

const displayDoneTodos = (todoItems) => {
    if(todoItems.style.textDecoration !== 'line-through'){
        todoItems.style.display = 'none';
    }else{
        todoItems.style.display = '';
    }
}

const displayLeftTodos = (todoItems) => {
    if(todoItems.style.textDecoration === 'line-through'){
        todoItems.style.display = 'none';
    }
    else{
        todoItems.style.display = '';
    }
}
