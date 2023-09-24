/**
 * Checks if a word can be found horizontally, vertically, diagonally, or backwards in a 2D array of letters.
 * @param {string[][]} letters - The 2D array of letters.
 * @param {string} word - The word to search for.
 * @returns {boolean} True if the word is found, otherwise false.
 */
const wordSearch = (letters, word) => {
  //check if the array is empty.
  if (letters.length === 0) return false;

  //check horizontally
  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (l of horizontalJoin) {
    if (l.includes(word) || l.includes(word.split("").reverse().join(""))) {
      return true;
    }
  }

  //check vertically
  const verticalJoin = [];
  for (let i = 0; i < letters[0].length; i++) {
    let col = "";
    for (let j = 0; j < letters.length; j++) {
      col += letters[j][i];
    }
    verticalJoin.push(col);
  }

  for (let l of verticalJoin) {
    if (l.includes(word) || l.includes(word.split("").reverse().join(""))) {
      return true;
    }
  }
  return false;
};

module.exports = wordSearch;
