function sumAll(arr) {
  const [min, max] = arr.sort((a, b) => a - b);
  let sum = 0;
  for (let i = min; i <= max; i += 1) {
    if (i === min) {
      sum = min;
    } else {
      sum += i;
    }
  }
  return sum;
}

sumAll([10, 5]);
export {
  sumAll,
};
