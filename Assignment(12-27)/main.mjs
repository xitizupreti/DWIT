import {
  convertUpper,
  convertLower,
  trim,
  start,
  replace,
  includes,
} from "./tasks.mjs";

console.log(convertUpper("abcdefghij"));
console.log(convertLower("ABCDEFGHIJ"));
console.log(trim("   aAbB    "));
console.log(start("The Avengers"));
console.log(replace("A Avengers"));
console.log(includes("SuperAdmin123"));
