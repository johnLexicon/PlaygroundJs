/**
 * Function that waits for an amount of seconds until resolved.
 * @param {number} seconds
 * @returns {Promise}
 */
function wait(seconds) {
  const waitPromise = new Promise((resolve) => {
    setTimeout(() => resolve(`Waited for ${seconds} seconds`), seconds * 1000);
  });
  return waitPromise;
}

wait(3).then((result) => console.log(result));

const http = require('http');
const HOST = 'http://localhost:3000';

function fetchData(path) {
  return new Promise((resolve, reject) => {
    http
      .get(`${HOST}${path}`, (resp) => {
        let data = '';

        //A chunk of data has been received
        resp.on('data', (chunk) => {
          data += chunk;
        });

        resp.on('end', () => {
          resolve(data);
        });
      })
      .on('error', (err) => {
        reject(err);
      });
  });
}

function fetchAll() {
  const itemCategoriesPromise = fetchData('/itemCategories');
  const userTypesPromise = fetchData('/userTypes');
  const orderStatusesPromise = fetchData('/orderStatuses');

  Promise.all([itemCategoriesPromise, userTypesPromise, orderStatusesPromise])
    .then(([items, userTypes, orderStatuses]) => {
      console.log(JSON.stringify(items, null, 1));
      console.log(JSON.stringify(userTypes, null, 1));
      console.log(JSON.stringify(orderStatuses, null, 1));
    })
    .catch((err) => {
      console.log(err.message);
    });
}

fetchAll();

// fetchData('/orders')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err.message));
