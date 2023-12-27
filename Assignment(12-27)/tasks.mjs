// // make a arrow function that takes a input and return its upperCase version
// export let convertUpper = (value) => {
//   let upperValue = value.toUpperCase();
//   return upperValue;
// };

// // make a arrow function that takes a input and return its lowercase version
// export let convertLower = (value) => {
//   let lowerValue = value.toLowerCase();
//   return lowerValue;
// };

// // 		make a arrow function that takes a input and return another string which is a trim version (remove both start and end space)
// export let trim = (value) => {
//   let trim = value.trim();
//   return trim;
// };

// // 	make a arrow function that takes a input and return true if the string starts with * else return false
// export let start = (value) => {
//   let start = value.startsWith("The");
//   return start;
// };

// // 	make a arrow function that takes a sentence and return another sentence where all * is converted to *
// export let replace = (value) => {
//   let replace = value.replace("A", "The");
//   return replace;
// };

// // 		make a arrow function that takes input and return true if it Contain admin or superAdmin
// export let includes = (value) => {
//   let lowerCaseInput = value.toLowerCase();
//   return (
//     lowerCaseInput.includes("admin") || lowerCaseInput.includes("superadmin")
//   );
// };

// let data = [1, 2, 3];
// let value = data.map((data, i) => {
//   return i * 100 + 100;
// });
// console.log(value);

// let data1 = ["my", "name", "is"];
// let value1 = data1.map((data1, i) => {
//   return data1.toUpperCase() + "N";
// });
// console.log(value1);

// let data2 = [1, 2, 3, 4, 5];
// let value2 = data2.map((data2, i) => {
//   return data2 % 2 === 0 ? 0 : data2 * 100;
// });
// console.log(value2);

// let description = "my name is xitiz";
// let d = "tjvyduyctdtctdutcdtdtyddd";
// let desArr = d.split("d");
// console.log(desArr);

// let description = "xitiz";
// let desArr = description.split("");
// let arr = desArr.map((desArr) => {
//   return `${desArr.toUpperCase()}N`;
// });
// console.log(arr);

// let ar1 = ["a", "b", "c"];
// let s = ar1.join(" ");
// let s1 = ar1.join("*");
// console.log(s);
// console.log(s1);

let ar1 = "xitiz";
let s = ar1.split("");
let s1 = s.map((s) => {
  return `${s.toUpperCase()}N`;
});
console.log(s1);
