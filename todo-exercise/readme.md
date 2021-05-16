Steps:
Project:

1. Create a folder todo-exercise
2. Create an html file index.html
3. Create a javascript file main.js

Add Todo (in main.js):

1. Create a global array called todos.
2. Add an event listener to the button with a click event that calls a function by name: addTodo.
3. In the addTodo function retrieve the value of the input field.
4. Create a literal object for the new todo e.g {id: Date.now(), title: inputValue, completed: false }
5. Add the todo object to the todos array.
6. Clear the input value of the input field.
7. Create a function called updateTodoList
8. In updateTodoList display all the todos from the todo array in the #todoList div. You can use the template (the div #todoItem) if you want.

Remove Todo (in main.js):

1. Create a function called removeTodo that takes a todo id as an argument.
2. Call the function removeTodo by using the onclick event in the button element inside the #todoItem div.
3. In the function remove the todo from the todos array (the todo with the same id as the parameter id).
4. Call your updateTodList function to update the displayed todos.
