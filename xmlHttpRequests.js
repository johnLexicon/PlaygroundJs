const HOST = 'https://jsonplaceholder.typicode.com';

/** @type {XMLHttpRequest} */
const xhr = new XMLHttpRequest();

xhr.addEventListener('progress', handleProgress);
xhr.addEventListener('load', handleLoad);
xhr.addEventListener('error', handleError);

// Third argument is for the asynchronous option, the default is asynchronous.
xhr.open('GET', `${HOST}/todos`);
xhr.send();

/**
 * On transfer complete.
 * @param {ProgressEvent} event
 */
function handleLoad(event) {
  const result = JSON.parse(xhr.responseText);
  console.log('Transfer complete');
  console.log(result);
}

/**
 * On transfer fail.
 * @param {ProgressEvent} event
 */
function handleError(event) {
  console.log('An error occurred while tranfering the content');
}

/**
 * Progress on transfers from the server to the client (downloads).
 * @param {ProgressEvent} event
 */
function handleProgress(event) {
  if (event.lengthComputable) {
    const percentComplete = (event.loaded / event.total) * 100;
    console.log(`${percentComplete}%`);
  } else {
    console.log(
      'Unable to compute progress information sinze the total size is unknown'
    );
  }
}
