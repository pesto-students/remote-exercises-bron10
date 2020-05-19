function findSeries(n) {
  const arr = [0, 1];
  for (let i = 2; i <= n; i += 1) {
    const a = arr[i - 1];
    const b = arr[i - 2];
    if (a + b >= n) {
      break;
    }
    arr.push(a + b);
  }
  return arr;
}

function sumFibs(num) {
  const series = findSeries(num);
  return series.filter((data) => (data % 2) === 1).reduce((c, n) => c + n);
}

export {
  sumFibs,
};
