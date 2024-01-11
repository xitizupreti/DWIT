// let data1 = [1, 2, 6, 3];
// // even
// let ar1 = data1.filter((value, i) => {
//   if (value % 2 === 0) {
//     return true;
//   }
// });
// console.log(ar1);

// let data2 = [1, 2, 6, 3, 19];
// // 17<
// let ar2 = data2.filter((value, i) => {
//   if (value > 17) {
//     return true;
//   }
// });
// console.log(ar2);

// let data3 = [-1, -34, 0, 1, 19];
// // 17<
// let ar3 = data3.filter((value, i) => {
//   if (value >= 0) {
//     return true;
//   }
// });
// console.log(ar3);

// let data4 = ["xitiz", "test", "an", ""];
// // (filter those string whose length is greater or equal to 4)
// let ar4 = data4.filter((value, i) => {
//   if (value.length >= 4) {
//     return true;
//   }
// });
// console.log(ar4);

// let data5 = [true, false];
// // filter only truthy value
// let ar5 = data5.filter((value, i) => {
//   if (value) {
//     return value;
//   }
// });
// console.log(ar5);

// let data6 = ["a", 1, "b", 3, "n", 4];
// // (filter the string)
// let ar6 = data6.filter((value, i) => {
//   if (typeof value === "string") {
//     return true;
//   }
// });
// console.log(ar6);

// let data6 = ["a", 1, "b", 3, "n", 4];
// // (print the string)
// let ar6 = data6.filter((value, i) => {
//   if (typeof value === "string") {
//     // return true;
//     console.log(value);
//   }
// });

// let data7 = [1, 3, 4, 10, 66, 89, , 7];
// // 10-100
// let ar7 = data7.filter((value, i) => {
//   if (value >= 10 && value < 100) {
//     return true;
//   }
// });
// console.log(ar7);

// let data8 = [1, 2, 3, 4];
// let ar8 = data8.some((value, i) => {
//   if (value === 3) {
//     return true;
//   }
// });
// console.log(ar8);

// let data9 = [1, 2, 3, 4];
// let ar9 = data9.every((value, i) => {
//   return true;
//   // if (value === 3) {
//   //   return false;
//   // }
// });
// console.log(ar9);

let data10 = [1, 4, 18, 100];
// all>17
console.log(data10.every((value) => value > 17));

let data11 = ["a", "b", "c"];
// check if a is there
console.log(data11.some((value) => value === "a"));

let data12 = [1, 2, 4, 3];
// check if all even
console.log(data12.every((value) => value % 2 === 0));

let data13 = [40, 30, 80];
// check if all are pass40
console.log(data13.every((value) => value >= 40));

let data14 = "bearer token";
let charArr = Array.from(data14);
// check string 'bearer'
// console.log(data14.includes("bearer"));
console.log(
  charArr.some((value, index) => {
    let res = data14.slice(index, index + 6);
    return res === "bearer";
  })
);

let data15 = ["smoking", "drinking", "biting nails"];
// check whether person have smoking habit
console.log(data15.some((value) => value === "smoking"));

//test
var name = "xitiz";
(function () {
  console.log(name);
  var name = "xitiz2";
})();
