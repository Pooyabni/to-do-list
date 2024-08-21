document.getElementById('add-btn').addEventListener('click', function() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();

    if (todoText) {
        const todoList = document.getElementById('todo-list');
        const newTodo = document.createElement('li');

        newTodo.innerHTML = `
            <span>${todoText}</span>
            <button class="delete-btn">Delete</button>
        `;

        todoList.appendChild(newTodo);
        todoInput.value = '';

        newTodo.querySelector('.delete-btn').addEventListener('click', function() {
            todoList.removeChild(newTodo);
        });
    }
});
