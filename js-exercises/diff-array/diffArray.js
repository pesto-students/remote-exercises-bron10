function diffArray(dataSet1, dataSet2) {
  const setDifference1 = dataSet1.filter((item) => !dataSet2.includes(item));
  const setDifference2 = dataSet2.filter((item) => !dataSet1.includes(item));
  return [...setDifference1, ...setDifference2];
}

export {
  diffArray,
};
