// https://www.codewars.com/kata/558fc85d8fd1938afb000014
function sumTwoSmallestNumbers(arr) {  
    return arr.splice(arr.indexOf(Math.min(...arr)), 1)[0] + arr.splice(arr.indexOf(Math.min(...arr)), 1)[0];
}