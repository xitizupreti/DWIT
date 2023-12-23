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
  alert(Number(a) + Number(b));
}
function sub() {
  let a = prompt("Enter 1st number:");
  let b = prompt("Enter 2nd number:");
  alert(Number(a) - Number(b));
}
function mul() {
  let a = prompt("Enter 1st number:");
  let b = prompt("Enter 2nd number:");
  alert(Number(a) * Number(b));
}
function div() {
  let a = prompt("Enter 1st number:");
  let b = prompt("Enter 2nd number:");
  alert(Number(a) / Number(b));
}

function isGreaterThan18eo() {
  let a = prompt("Enter age or random number");
  let dynamicbutton = document.getElementById("dynamic");
  if (a >= 18) {
    if (a % 2 === 1) {
      dynamicbutton.innerHTML = "True && Odd";
    } else {
      dynamicbutton.innerHTML = "True && Even";
    }
    /* cSpell:disable */
  } else if (a < 18) {
    if (a % 2 === 1) {
      dynamicbutton.innerHTML = "False && Odd";
    } else {
      dynamicbutton.innerHTML = "False && Even";
    }
  } else {
    dynamicbutton.innerHTML = "Error Age";
  }
}

function avg3() {
  let a = prompt("Enter 1st number:");
  let b = prompt("Enter 2nd number:");
  let c = prompt("Enter 3rd number:");
  alert((Number(a) + Number(b) + Number(b)) / 3);
}
