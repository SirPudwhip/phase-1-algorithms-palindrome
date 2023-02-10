function isPalindrome(word) {
  let test = reverseString(word)
  if (test == word) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
 }

function reverseString(word) {
  let string = word.split('');
  let reverseArray = string.reverse();
  let reverseTest = reverseArray.join(''); 
  return reverseTest;
} 

/* 
  This really needs to be TWO functions; 

  Function to test if palindrom {
    set a variable = the reverse of the input (call the reverse function)
      If (it's the same backwards )
      return true
      ELSE 
      return false
  } 

  function to reverse stuff {
    Set a variable = the input split up into an array 
    Set a variable = that array that we just made REVERSED 
    set a variable = the reversed array smashed together into a string again
    return that variable 
  }

*/

/*
  I mean, it's all in the code, right? 

  basically I'm just calling a function to flip around whatever the input is, then seeing if the return of that function is equal to the initial input. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
