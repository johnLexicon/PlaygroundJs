const todoInput = document.getElementById('todoInput');
const todoList = document.querySelector('#todoList');
document.getElementById('btnAddTodo').addEventListener('click', addTodo);

let todos = [];

function addTodo() {
  const title = todoInput.value;
  const newTodo = { id: Date.now(), title, completed: false };
  todos.unshift(newTodo);
  todoInput.value = '';
  updateTodoList();
}

function removeTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  updateTodoList();
}

function toggleCompletion(id) {
  const todo = todos.find((todo) => todo.id === id);
  todo.completed = !todo.completed;
  updateTodoList();
}

function updateTodoList() {
  todoList.innerHTML = '';
  todos.forEach((todo) => {
    todoList.innerHTML += `
        <div id="${todo.id}" class="row rounded shadow-sm py-3">
        <div class="col-10">
          <span class="pointer ${
            todo.completed ? 'text-decoration-line-through' : ''
          }" onclick="toggleCompletion(${todo.id})">${todo.title}</span>
        </div>
        <div class="col-2">
          <button onclick="removeTodo(${todo.id})" class="btn-close"></button>
        </div>
      </div>
    `;
  });
}
