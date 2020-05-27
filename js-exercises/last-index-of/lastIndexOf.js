
function lastIndexOf(...args) {
  const searchValue = args[0];
  const dataSet = args[1];
  return dataSet.lastIndexOf(searchValue);
}

export {
  lastIndexOf,
};
