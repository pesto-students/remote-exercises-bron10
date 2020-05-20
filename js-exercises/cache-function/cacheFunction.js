function cacheFunction(cb) {
  const cacheData = {};
  return function (param) {
    if (cacheData[param]) {
      return cacheData[param];
    }
    cacheData[`${param}`] = cb(param) || true;
    return cacheData[param];
  };
}

export {
  cacheFunction,
};
