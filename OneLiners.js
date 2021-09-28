//Reverse a String
const reversedString = (str) => str.split('').reverse().join('');

//Get the average of a Number array
const average = (arr) => arr.reduce((acc, curr) => acc + curr) / arr.length;

//Get an array with the past seven days from given date
const pastSevenDays = (date) =>
  [...Array(7).keys()].map((days) => new Date(date - 86400000 * days));

//Capitalize a String
const capitalize = (str) => (str.charAt(0).toUpperCase() + str.slice(1)).trim();

//Remove Duplicates in an Array
const removeDuplicates = (arr) => [...new Set(arr)];

//Generate a random number
const randomId = () => Math.random().toString(36).substring(2);

//Generate random Hex-color
const hexColor = () =>
  '#' +
  Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, '0');

//Get the number of days between two Dates
const dayDiff = (fromDate, toDate) =>
  Math.ceil(Math.abs(fromDate.getTime() - toDate.getTime()) / 86400000);

//Strip HTML from text
const stripHtml = (html) =>
  new DOMParser().parseFromString(html, 'text/html').body.textContent || '';
