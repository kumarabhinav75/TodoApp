const addTodoButton = document.querySelector('#add-todo-btn');
addTodoButton.addEventListener('click',() => addNewTodoItem());

const addNewTodoItem = () => {
    const todoText = document.querySelector('#todo-input').value;
    const todoList = document.querySelector('.todo-list');
    const newTodoItem = document.createElement("li");
    newTodoItem.textContent = todoText;
    newTodoItem.setAttribute('class','todo-item')
    todoList.appendChild(newTodoItem);
}

const todoContainer = document.querySelector(".view-todo");

todoContainer.addEventListener('click', (e) => handleItemClick(e));

const handleItemClick = (e) => {
    e.target.style.textDecoration = 
        e.target.style.textDecoration === ''?
            'line-through':'';
}


