const login = (email, pwd) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === true && pwd === true) {
        resolve({ token: "123abc" });
      } else {
        reject(new Error("Wrong Email or Password"));
      }
    }, 2000);
  });
};

const getAllProducts = (token) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (token === "123abc") {
        resolve({ id: "1", name: "Shoes" });
      } else {
        reject(new Error("Authorization failed"));
      }
    }, 2000);
  });
};

// RETRIEVING DATA WITH "THEN" SYNTAX
// login(true, true)
//   .then((result) => {
//     return getAllProducts(result.token);
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

//RETRIEVING DATA WITH ASYNC AWAIT SYNTAX
async function displayProducts(email, password) {
  try {
    const result = await login(email, password);
    const products = await getAllProducts(result.token);
    console.log(products);
  } catch (error) {
    console.log(error);
  }
}

displayProducts(true, true);
console.log("Finished");
