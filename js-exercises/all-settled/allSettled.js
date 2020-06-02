
function allSettled(values = []) {
  return new Promise((resolve, reject) => {
    const result = [];
    const fulfilled = 'fulfilled';
    const rejected = 'rejected';
    const defaultError = 'Something went wrong';
    const noIterableError = 'No iterable provided';
    let promiseCounter = values.length;
    if (!values.length) {
      reject(noIterableError);
    }
    for (let index = 0; index < values.length; index++) {
        const item = values[index];
        Promise.resolve(item)
        .then((value) => {
            --promiseCounter;
            result[index] = {
              status: fulfilled,
              value,
            };
        })
        .catch((itemError) => {
            --promiseCounter;
            result[index] = {
              status: rejected,
              reason: itemError.message || defaultError,
            };
        })
        .finally(() => {
            if (!promiseCounter) {
                if (!result) {
                    return rejected('');
                }
                resolve(result);
            }
        });
    }
  });
}


export { allSettled };
