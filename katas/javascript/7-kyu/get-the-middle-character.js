// https://www.codewars.com/kata/56747fd5cb988479af000028
const getMiddle = s => s.substring(s.length / 2 - (s.length % 2 ? 0 : 1), s.length / 2 + 1);