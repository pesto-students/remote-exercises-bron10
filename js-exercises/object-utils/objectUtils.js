// your implementation
function map(obj, callback) {
  const result = {};
  const keyList = Object.keys(obj || {});
  for (let index = 0; index < keyList.length; index++) {
    const key = keyList[index];
    result[key] =  callback(key, obj[key]);
  }
  return result;
}

function filter(obj, callback) {
  const result = {};
  const keyList = Object.keys(obj || {});
  for (let index = 0; index < keyList.length; index++) {
    const key = keyList[index];
    const datum = callback(key, obj[key])
    if (datum){
      result[key] =  datum;
    }
  }
  return result;
}

function invert(obj) {
  const result = {};
  const keyList = Object.keys(obj || {}).reverse();
  for (let index = 0; index < keyList.length; index++) {
    const key = keyList[index];
    result[key] =  obj[key];
  }
  return result;
}

function merge() {
  const argumentArray = Array.from(arguments);
  const target = {};
  argumentArray.forEach((obj)=>{
    Object.assign(target, obj)
  })
  return target;
}

function all(obj, callback) {
  const keyList = Object.keys(obj || {});
  let counter = 0;
  for (let index = 0; index < keyList.length; index++) {
    const key = keyList[index];
    const datum = callback(key, obj[key])
    if (datum){
      counter += 1;
    }
  }
  return (!!counter && (counter === keyList.length));
}

function some(obj, callback) {
  const keyList = Object.keys(obj || {});
  let result = false;
  for (let index = 0; index < keyList.length; index++) {
    const key = keyList[index];
    result = !!callback(key, obj[key])
    if(result){
      break;
    }
  }
  return result
}

export {
  map,
  filter,
  invert,
  merge,
  all,
  some,
};
