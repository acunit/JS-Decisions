// What number's bigger?
// Purpose: takes two numbers and returns the greater of the two
// Signature: taking two numbers and returning the highest of the two
// Examples:
//      greaterNum(4,5) --> 5
//      greaterNum(9,2) --> 9
//      greaterNum(11,14) --> 14
//      greaterNum(-3,-1) --> -1

function greaterNum(num1,num2) {
  if (num1 > num2) {
    console.log(num1);
  } else if (num1 === num2) {
    console.log("Both numbers are equal.");
  } else {
    console.log(num2);
  }
}

// The World Translator
// Purpose: To greet the world in the selected language, English is default
// Signature: Take an argument and return "Hello, World" in argument language
// Examples:
//    helloWorld("en") --> "Hello, World"
//    helloWorld("es") --> "Hola, Mundo"
//    helloWorld("de") --> "Hallo, Welt"
//    helloWorld() -->  "Hello, World"

function helloWorld(str) {
  if (str === "en") {
    return("Hello, World");
  } else if (str === "de") {
    return("Hallo, Welt");
  } else if (str === "es") {
    return("Hola, Mundo");
  } else {
    return("Hello, World");
  }
}

//  The Grade Assigner
//  Purpose:  Assign a grade based on a defined grading scale
//  Signature:  Take a number and return a letter grade as a string
//  Examples:
//    assignGrade(94) --> "A"
//    assignGrade(87) --> "B"
//    assignGrade(50) --> "F"
//    assignGrade(74) --> "C"

function assignGrade(num) {
  if (num >= 90) {
    return("A");
  } else if (num >= 80) {
    return("B");
  } else if (num >= 70) {
    return("C");
  } else if (num >= 60) {
    return("D");
  } else {
    return("F")
  }
}

// The Pluralizer
// Purpose: Take a noun and a number and return the number in correct pluralized form
// Signature: Take a string and integer return them concatended and the string in correct plural form.
// Examples:
//  pluralize(5, cat) --> "5 cats"
//  pluralize(1, dog) --> "1 dog"
//  pluralize(2, goose) --> "2 geese"
// pluralize(0, rat) --> "0 rats"
// pluralize(-4, hat) --> "Cannot Pluralize"

function pluralize(num, str) {
  if (num < 0) {
    return("Cannot Pluralize");
  } else if (str === "sheep" || str === "species") {
    return(num + " " + str);
  } else if ((str === "goose" || str === "geese") && num === 1) {
    return(num + " " + "goose");
  } else if ((str === "goose" || str === "geese") && num != 1) {
    return(num + " " + "geese");
  } else if ((str === "child" || str === "children") && num === 1) {
    return(num + " " + "child");
  } else if ((str === "child" || str === "children") && num != 1) {
    return(num + " " + "children");
  } else if ((str === "person" || str === "people") && num === 1) {
    return(num + " " + "person");
  } else if ((str === "person" || str === "people") && num != 1) {
    return(num + " " + "people");
  } else if (num != 1) {
    return(num + " " + str + "s");
  } else {
    return(num + " " + str);
  }
}

// The Odd and Even
// Purpose: Count from 0 to 15 indicating odd vs. even
// Signature: Indicate odds and evens from 0 to 15
// Examples:
//  oddEven() --> alert "O is even"
var count = 0;

function oddEven() {
  do {
    alert(count + " is even.");
    count = count + 1;
    alert(count + " is odd.");
    count = count + 1;
  } while (count<16);
}

// The Fizz Buzz
// Purpose: Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
// Signature:
// Examples:

var count = 1;

function fizzBuzz() {
  do {
    if (count % 15 === 0) {
      alert("FizzBuzz");
      count = count + 1;
    } else if (count % 5 === 0) {
      alert("Buzz");
      count = count + 1;
    } else if (count % 3 === 0) {
      alert("Fizz");
      count = count + 1;
    } else {
      alert(count);
      count = count + 1;
    }
  } while (count < 101);
}
