/* eslint-disable default-case */
/* eslint-disable prefer-const */
const checkArray = [
  NaN,
  12,
  45,
  Infinity,
  "text",
  NaN,
  undefined,
  15.3,
  0,
  "",
  "17",
];
const contacts = [
  { name: "Tom", phoneNumber: "777-77-77" },
  { name: "TBoy", phoneNumber: "777-77-77" },
  { name: "Das", phoneNumber: "777-77-77" },
];

const chkArray = ["  1.9 ", "16.4", 17, " 1 dollar "];
const cleanTransactionsList = (lst) =>
  lst
    .map((el) => el.toString().trim())
    .filter(
      (el) =>
        !(
          Number.isNaN(Number(el[0])) || Number.isNaN(Number(el[el.length - 1]))
        )
    )
    .map((el) => "$" + Number.parseFloat(el).toFixed(2));

// Old working part
// const reverseString = (str) =>
//   typeof str === "string" ? str.split("").reverse().join("") : null;

// const calc = (str) => {
//   const [a, operator, b] = str.split(" ");
//   let result = 0;
//   switch (operator) {
//     case "+": {
//       result = Number(a) + Number(b);
//       break;
//     }
//     case "-": {
//       result = Number(a) - Number(b);
//       break;
//     }
//     case "/": {
//       result = Number(a) / Number(b);
//       break;
//     }
//     case "*": {
//       result = Number(a) * Number(b);
//       break;
//     }
//   }
//   return `${str} = ${result}`;
// };
// eslint-disable-next-line default-param-last
// const countOccurrences = (text = "", str) => {
//   if (str === "") {
//     return null;
//   }
//   let count = 0;
//   let workString = text;
//   while (true) {
//     let index = workString.indexOf(str);
//     if (index >= 0) {
//       count += 1;
//       workString = workString.slice(index + str.length);
//     } else {
//       break;
//     }
//   }
//   return count;
//   // put your code here
// };

// function splitText(str, len = 10) {
//   if (typeof str !== "string") {
//     return null;
//   }
//   let resultArr = [];
//   while (true) {
//     resultArr.push(str.substr(0, len));
//     // eslint-disable-next-line no-param-reassign
//     str = str.slice(len);
//     if (str.length < len && str.length > 0) {
//       resultArr.push(str + ".".repeat(len - str.length));
//       break;
//     }
//   }
//   return resultArr;
// }

// const sortContacts = (arr, isAsc) =>
//   Array.isArray(arr)
//     ? arr.sort((a, b) =>
//         isAsc ? a.name.localeCompare(b.name) : !a.name.localeCompare(b.name)
//       )
//     : null;

// function splitText(str, len = 10) {
//   if (typeof str !== "string") {
//     return null;
//   }
//   let resultArr = [];
//   while (true) {
//     resultArr.push(
//       str.substr(0, len)[0].toUpperCase() + str.substr(0, len).slice(1)
//     );
//     // eslint-disable-next-line no-param-reassign
//     str = str.slice(len);
//     if (str.length === 0) return console.log(resultArr.join("\n"));
//   }
// }

// const multiRound = (num, acc) => [
//   Math.floor(num * 10 ** acc) / 10 ** acc,
//   Math.trunc(num * 10 ** acc) / 10 ** acc,
//   Math.ceil(num * 10 ** acc) / 10 ** acc,
//   Math.round(num * 10 ** acc) / 10 ** acc,
//   Number(num.toFixed(acc)),
// ];

// function getRandomNumbers(len, min, max) {
//   const resultArray = [];
//   for (let i = 1; i <= len; i += 1) {
//     resultArray.push(
//       Math.floor(
//         Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min)
//       )
//     );
//   }
//   return parseInt(max, 10) - parseInt(min, 10) > 0 ? resultArray : null;
// }

// const getTotalPrice = (arr) =>
//   "$" + Math.floor(arr.reduce((acc, elem) => acc + elem) * 100) / 100;

// let numbers = [-6, 3, 5, -1];
// const getMaxAbsoluteNumber = (arr) =>
//   arr.length > 0 && Array.isArray(arr)
//     ? Math.max(...arr.map((el) => Math.abs(el)))
//     : null;

// const getMaxAbsoluteNumber = (arr) =>
//   arr.length > 0
//     ? arr.reduce(
//         (acc, el) => (Math.abs(el) > acc ? Math.abs(el) : acc),
//         -Infinity
//       )
//     : null;
// put your code here

// examples
// getMaxAbsoluteNumber([-10, 10, -10]); // ===> 10
// getMaxAbsoluteNumber([2.1, 0, 1.6]); // ===> 2.1
// getMaxAbsoluteNumber([-6, 3, 5, -1]); // ===> 6

// ("use strict");

// /**
//  * @param {number} num
//  * @return {number[]}
//  */
// const multiRound = (num) => [
//   Math.floor(num * 100) / 100,
//   Math.trunc(num * 100) / 100,
//   Math.ceil(num * 100) / 100,
//   Math.round(num * 100) / 100,
//   Number(num.toFixed(2)),
// ];

// // examples
// multiRound(11.12556); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
// multiRound(6.112); // ==> [6.11, 6.11, 6.12, 6.11, 6.11]

// const getParsedIntegers = (arr) => arr.map((el) => Number.parseInt(el, 10));
// const getParsedIntegersV2 = (arr) => arr.map((el) => parseInt(el, 10));
// const getParsedFloats = (arr) => arr.map((el) => Number.parseFloat(el));
// const getParsedFloatsV2 = (arr) => arr.map((el) => parseFloat(el));
