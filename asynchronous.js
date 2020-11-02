function second() {
  setTimeout(() => {
    console.log("Second function after two secs.");
  });
}

function first() {
  second();
  console.log("First function ready");
}

// Callback Hell (callbacks nested into eachother)
function getTodos() {
  console.log("Fetching...");
  setTimeout(() => {
    const ids = [1, 2];
    setTimeout(
      (id) => {
        const todos = [
          { id: 1, text: "Clean bedroom", done: false },
          { id: 2, text: "Take a shower", done: true },
        ];
        const todo = todos.find((t) => t.id === id);
        console.log(`Id: ${todo.id}: text: ${todo.text}, Done: ${todo.done}`);
      },
      1000,
      ids[1]
    );

    console.log(`Ids: ${ids}`);
  }, 1500);
}

/*
    Promises:
    - A promise is an object that keeps track if a certain event has happened or not
    - Determines what happens after an event has happened.
*/

// A promise gets executed as soon as it gets created
// The paramenters are functions, one for success and one for failure.
const getIds = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([1, 2]); //Send as argument of the value that the promise will return.
  }, 1500);
});

const getTodoText = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (id) => {
        const todos = [
          { id: 1, text: "Clean bedroom", done: false },
          { id: 2, text: "Take a shower", done: true },
        ];
        const todo = todos.find((t) => t.id === id);
        if (todo) {
          resolve(`Text: ${todo.text}`);
        } else {
          reject("Todo no found!");
        }
      },
      1500,
      id
    );
  });
};

// Executing promises without async await
// The "then" function is for successful Promises.
// The "catch" function is for unscuccesful Promises.
// getIds
//   .then((ids) => {
//     console.log(ids);
//     return getTodoText(ids[0]);
//   })
//   .then((todoText) => {
//     console.log(todoText);
//   })
//   .catch((errorMessage) => {
//     console.log(errorMessage);
//   });

// Executing promises with sync await.
// The await keyword can only be used in an async function.
async function getTodoInfoAW() {
  const ids = await getIds;
  console.log(ids);
  const todoText = await getTodoText(ids[1]);
  //   console.log(todoText);

  return todoText;
}

getTodoInfoAW().then((todoText) => {
  console.log(todoText);
});

// Uses the proxy server
fetch("http://localhost:3000/?url=https://www.metaweather.com/api/location/search/?query=london")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("Program ends");
