
function duplicateLetters(...args) {
  const duplicates = {};
  const answer = args[0].split('').map((value, index, arr) => {
    if (!duplicates[value]) {
      duplicates[value] = 1;
    }
    const remaining = arr.slice(index + 1, arr.length);
    if (remaining.lastIndexOf(value) !== -1) {
      duplicates[value] += 1;
      return duplicates[value];
    }
    return 0;
  });
  return answer.sort((a, b) => b - a)[0] || false;
}

export {
  duplicateLetters,
};
