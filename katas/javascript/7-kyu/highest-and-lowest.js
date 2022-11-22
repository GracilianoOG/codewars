function highAndLow(numbers){
  const numArr = numbers.split(" ").map(num => parseInt(num));
  return Math.max(...numArr) + " " + Math.min(...numArr);
}