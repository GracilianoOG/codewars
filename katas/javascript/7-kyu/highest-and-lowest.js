// https://www.codewars.com/kata/554b4ac871d6813a03000035
function highAndLow(numbers){
  const numArr = numbers.split(" ").map(num => parseInt(num));
  return Math.max(...numArr) + " " + Math.min(...numArr);
}