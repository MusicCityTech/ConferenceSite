export function factoryBuilder(obj) {
  let args = obj.$inject;
  let factoryFunction = (...args) => {
    return new obj(...args);
  };
  args.push(factoryFunction);
  return args;
}
