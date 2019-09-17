// Assertion Function
const assertEqual = function(actual, expected, message) {
  if (actual === expected) { 
    console.log(`✅✅✅ Assertion Passed`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed`);
  }
}

// FUNCTION IMPLEMENTATION (BUGGY)
const isPalindrome = function(str) {
  const noSpaces = str.split(" ").join("");
  const midIndex = Math.floor(noSpaces.length/2);
  const lastIndex = noSpaces.length - 1;
  console.log(noSpaces + " " + midIndex + " " + lastIndex);
  if(!midIndex) {
    return true;
  }

  for (let i = 0; i < midIndex; i++) {
    if (str[i] !== str[(lastIndex + 1) - i]) 
      return true;

    else
      return false;
  }
}

// TEST CODE
// These should all pass assertion, but they don't. 
assertEqual(isPalindrome('p'), true);
assertEqual(isPalindrome('p'), true);
assertEqual(isPalindrome('foo'), false);
assertEqual(isPalindrome('racecar'), true);
assertEqual(isPalindrome('live without evil'), false);
assertEqual(isPalindrome('just some random words'), false);

// Bonus / Stretch: Uncomment these tests and figure out why these are also failing
assertEqual(isPalindrome('Kayak'), true);
assertEqual(isPalindrome('a santa at NASA'), true);
