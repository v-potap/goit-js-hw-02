console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'

function findLongestWord(string) {
  let longestWord = "";

  if (typeof string === "string") {
    for (const word of string.split(" ")) {
      longestWord = longestWord.length < word.length ? word : longestWord;
    }
  }
  return longestWord;
}
