function mf() {
  let a = prompt("Enter male or female");
  if (a === "male" || a === "Male") {
    alert("Male");
  } else if (a === "female" || a === "Female") {
    alert("female");
  } else {
    alert("others");
  }
}
function ar() {
  let a = prompt("Enter age");
  if (a <= 18) {
    /* cSpell:disable */
    alert("Bacha");
  } else if (a >= 18 && a <= 35) {
    alert("Jawan");
  } else if (a > 35) {
    alert("Budo");
  } else {
    alert("Error");
  }
}
function sum() {
  let s1 = prompt("Enter number 1");
  let s2 = prompt("Enter number 2");

  alert(Number(s1) + Number(s2));
}
function dp(a, b) {
  alert(a - b);
}
function dv(a = 10, b = 20) {
  alert(a);
  alert(b);
}

// Assignment 12/23

function add() {
  let a = prompt("Enter 1st number:");
  let b = prompt("Enter 2nd number:");
  let dynamicbutton = document.getElementById("add");
  dynamicbutton.innerHTML = `${a}+${b}=${Number(a) + Number(b)}`;
  alert(Number(a) + Number(b));
}
function sub() {
  let a = prompt("Enter 1st number:");
  let b = prompt("Enter 2nd number:");
  let dynamicbutton = document.getElementById("sub");
  dynamicbutton.innerHTML = `${a}-${b}=${Number(a) - Number(b)}`;
  alert(Number(a) - Number(b));
}
function mul() {
  let a = prompt("Enter 1st number:");
  let b = prompt("Enter 2nd number:");
  let dynamicbutton = document.getElementById("mul");
  dynamicbutton.innerHTML = `${a}x${b}=${Number(a) * Number(b)}`;
  alert(Number(a) * Number(b));
}
function div() {
  let a = prompt("Enter 1st number:");
  let b = prompt("Enter 2nd number:");
  let dynamicbutton = document.getElementById("div");
  dynamicbutton.innerHTML = `${a}/${b}=${Number(a) / Number(b)}`;
  alert(Number(a) / Number(b));
}

function isGreaterThan18eo() {
  let a = prompt("Enter age or random number");
  let dynamicbutton = document.getElementById("eo");
  if (a >= 18) {
    if (a % 2 === 1) {
      dynamicbutton.innerHTML = "True && Odd";
      alert("True && Odd");
    } else {
      dynamicbutton.innerHTML = "True && Even";
      alert("True && Even");
    }
    /* cSpell:disable */
  } else if (a < 18) {
    if (a % 2 === 1) {
      dynamicbutton.innerHTML = "False && Odd";
      alert("False && Odd");
    } else {
      dynamicbutton.innerHTML = "False && Even";
      alert("False && Even");
    }
  } else {
    dynamicbutton.innerHTML = "Error Age";
    alert("Error Age");
  }
}

function avg() {
  let a = prompt("Enter 1st number:");
  let b = prompt("Enter 2nd number:");
  let c = prompt("Enter 3rd number:");
  let dynamicbutton = document.getElementById("avg");
  dynamicbutton.innerHTML = `${a},${b},${c}=${(
    (Number(a) + Number(b) + Number(b)) /
    3
  ).toFixed(2)}`;
  alert(((Number(a) + Number(b) + Number(b)) / 3).toFixed(2));
}

// make a function , pass one input as  ["smoking", "drinking", "biting nails"] and the function must return true if the given input has smoking field
export function smoke(a, b, c) {
  // if (c === "smoking" || b === "smoking" || a === "smoking") {
  //   return true;
  // } else {
  //   return false;
  // }
  return c === "smoking" || b === "smoking" || a === "smoking";
}
