const addTodoButton = document.querySelector("#add-todo-btn");
const todoListContainer = document.querySelector(".todo-list");
const filterContainer = document.querySelector(".filter-btn-container");

addTodoButton.addEventListener("click",() => addNewTodoItem());
todoListContainer.addEventListener("click", (e) => handleItemClick(e.target));
filterContainer.addEventListener("click", (e) => handleFilterChange(e.target));


const addNewTodoItem = () => {
    const todoText = document.querySelector("#todo-input");
    const todoList = document.querySelector(".todo-list");

    const todoTextValue = todoText.value;
    todoText.value = "";
    todoText.focus();

    const newTodoItem = document.createElement("li");
    newTodoItem.textContent = todoTextValue.trim();
    newTodoItem.setAttribute("class","todo-item");
    todoList.appendChild(newTodoItem);
}

const handleItemClick = (element) => {
    element.style.textDecoration = 
        element.style.textDecoration === ""?
            "line-through":"";
}

const displayAllTodos = (todoItems) => {
    todoItems.style.display = "";
}

const displayDoneTodos = (todoItems) => {
    if(todoItems.style.textDecoration !== "line-through"){
        todoItems.style.display = "none";
    }else{
        todoItems.style.display = "";
    }
}

const displayLeftTodos = (todoItems) => {
    if(todoItems.style.textDecoration === "line-through"){
        todoItems.style.display = "none";
    }
    else{
        todoItems.style.display = "";
    }
}

const handleFilterChange = (element) => {
    const todoListContainer = document.querySelector(".todo-list");
    const todoItems = todoListContainer.children;

    for(var i=0;i<todoItems.length;i++){
        switch(element.id){
            case "all-filter":
                displayAllTodos(todoItems[i]);
                break;
            case "done-filter":
                displayDoneTodos(todoItems[i])
                break;
            case "left-filter":
                displayLeftTodos(todoItems[i]);
                break;
            default:
        }
    }
}
