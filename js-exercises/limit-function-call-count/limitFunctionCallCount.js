const limitFunctionCallCount = (cb, limit) => {
  let counter = 1;
  return function () {
    const parameters = Array.from(arguments);
    if (counter === limit) {
      return null;
    }
    counter += 1;
    if (parameters.length) {
      return cb(...parameters);
    }
    return true;
  };
};

export {
  limitFunctionCallCount,
};
