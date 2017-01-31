// Reverse Challenge
// Purpose: Take a string of words, and reverse the letter order of any words that contain atleast 5 letters.  Words with less than 5 letters will return in the same order. The order of the words within the string will remain the same.
// Signature: Gather a string of words from teh user. Return another string with words rearranged in the way the Purpose describes.
// Examples:
//  reverseChallenge("Hi there neighbor") --> "Hi ereht robhgien"
//  reverseChallenge("What are you doing today?") --> "What are you gniod ?yadot"
//  reverseChallenge("Hey") --> "Hey"
//  reverseChallenge("Goodbye children") --> "eybdooG nerdlihc"
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var energy = fruits.join(" and ");
function reverse(s) {
  return s.split("").reverse().join("");
}

function reverseChallenge() {
  var string = prompt("Please enter a string of text.");
  var array = string.split(" ");
  var arraySize = array.length;
  var reorderCount = 0;
  while (arraySize > reorderCount) {
    if (array[reorderCount].length > 4) {
      array[reorderCount] = reverse(array[reorderCount]);
      reorderCount = reorderCount + 1;
    } else {
      reorderCount = reorderCount + 1;
    }
  }
  var output = array.join(" ");
  alert(output);
}
