/*
 * Write a function that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * To implement this we'll create a joinList function which will take 
 * in any array of strings return a comma-separated string.
 *
 * Note: We can NOT use the built-in Array join function.
 */

// Write our function (we must define it too!) below
// ...

const joinList = function (list) {
  var sentence = "";

  //Loop repeats depending on length of input array
  for (var i = 0; i < list.length; i++) {
    //conditionals to determine placement of punctuation btwn words
    if (i === 0) {
      sentence += list[i];
    }
    else if (i < list.length) {
      sentence += ", " + list[i];
    }
    /*
    else {
      sentence += ", and " + list[i];
    }*/
  }

  return sentence;
}


//Test code
const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);
