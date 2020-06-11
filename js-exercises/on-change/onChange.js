const buildProxy = (obj, validator) => new Proxy(obj, validator);

const onChange = (obj, onChangeFn) => {
  const handler = {
    get(target, property) {
      const value = Reflect.get(target, property);
      if (typeof value === 'object') {
        return buildProxy(value, handler);
      }
      return value;
    },
    set(target, property, value) {
      onChangeFn();
      return Reflect.set(target, property, value);
    },
    defineProperty(target, property, desc) {
      onChangeFn();
      return Reflect.defineProperty(target, property, desc);
    },
    deleteProperty(target, property) {
      onChangeFn();
      return Reflect.deleteProperty(target, property);
    },
  };
  return buildProxy(obj, handler);
};

export { onChange };
