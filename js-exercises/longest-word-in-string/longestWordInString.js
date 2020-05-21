function longestWordInString(string) {
  let maxLength = 0;
  let longestWord = '';
  (string || '').split(' ').forEach((word) => {
    if (word.length > maxLength) {
      maxLength = word.length;
      longestWord = word;
    }
  });
  return longestWord;
}

export { longestWordInString };
