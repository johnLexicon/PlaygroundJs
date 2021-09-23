let olElem = document.querySelector('ol');

document.querySelector('#hideShowButton').addEventListener('click', (e) => {
  let buttonText = e.currentTarget.textContent.toLowerCase();
  if (buttonText === 'hide') {
    e.currentTarget.textContent = 'Show';
    olElem.style.display = 'none';
  } else {
    e.currentTarget.textContent = 'Hide';
    olElem.style.display = 'block';
  }
});

let formElem = document.querySelector('form');

formElem.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Sent');
});
