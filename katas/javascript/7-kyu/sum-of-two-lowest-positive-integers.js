function sumTwoSmallestNumbers(arr) {  
    return arr.splice(arr.indexOf(Math.min(...arr)), 1)[0] + arr.splice(arr.indexOf(Math.min(...arr)), 1)[0];
}