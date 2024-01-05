// import { smoke } from "./index.mjs";
// console.log(smoke("smoking", "drinking", "nails"));

/*
Primitive types:
Number,String,Boolean,Null,Undefined
Primitive types are immutable, meaning their values cannot be changed once they are created.
Any operation that appears to modify a primitive value is actually creating a new value.

Non-primitive types (Reference types):
Object,Array,Function
Non-primitive types are mutable, meaning their values can be changed by modifying the object directly.

One key difference is how they are stored and compared. Primitive values are stored directly in memory,and comparisons check for value equality.
Non-primitive values are stored as references in memory, and comparisons check whether the references point to the same object, not necessarily if the values are the same.
*/
// console.log(undefined === undefined); //true
// console.log(null === null); //true

// let a = [3, 4];
// let b = a;
// let c = [3, 4];
// console.log(a === b); // true
// console.log(a === c); // false

// SHALLOW COPY
// let ar1 = [1, 2];
// let ar2 = ar1;
// // let ar3 = ar1.concat();
// let ar3 = ar1.slice(); //DEEP COPY
// ar1.push(5);

// console.log(ar1);
// console.log(ar2);
// console.log(ar3);

// let curDate = new Date().toLocaleTimeString();
// console.log(curDate);
