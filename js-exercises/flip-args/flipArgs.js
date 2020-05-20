function flipArgs() {
  return function () {
    return Array.from(arguments).reverse();
  };
}

export {
  flipArgs,
};
