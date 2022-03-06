const HOST = 'http://localhost:3000';

function fetchOrders() {
  return fetch(`${HOST}/orders`)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log('An error occurred:', err.message);
    });
}

function fetchOrder(orderId) {
  return fetch(`${HOST}/orders/${orderId}`)
    .then((response) => {
      if (!response.ok)
        throw Error(`${response.status}: ${response.statusText}`);
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err.message);
    });
}

function fetchOrderAddress(addressId) {
  return fetch(`${HOST}/addresses/${addressId}`)
    .then((response) => {
      if (!response.ok)
        throw Error(`${response.status}: ${response.statusText}`);
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err.message);
    });
}

fetchOrder(1)
  .then((order) => {
    return fetchOrderAddress(order.shippingAddress);
  })
  .then((shippingAddress) => {
    console.log(shippingAddress);
  })
  .catch((err) => console.log(err.message));
