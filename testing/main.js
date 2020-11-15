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

login(true, true)
  .then((result) => {
    return getAllProducts("123abd");
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err.message);
  });

console.log("Finished");
