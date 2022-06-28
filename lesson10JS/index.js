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
function getFiniteNumbers(arr) {
  return arr.filter((elem) => Number.isFinite(elem));
}

function getFiniteNumbersV2(arr) {
  return arr.filter((elem) => isFinite(elem) && typeof elem === "number");
}
function getNan(arr) {
  return arr.filter((elem) => Number.isNaN(elem));
}
function getNanV2(arr) {
  return arr.filter((elem) => isNaN(elem) && typeof elem === "number");
}
function getIntegers(arr) {
  return arr.filter((elem) => Number.isInteger(elem));
}
