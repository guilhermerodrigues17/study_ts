//É possível utilizar generics com intersection
export function joinObjects<O1, O2>(obj1: O1, obj2: O2): O1 & O2 {
  return Object.assign({}, obj1, obj2);
}

const obj1 = { key1: 'value1' };
const obj2 = { key2: 'value2' };
const joined = joinObjects(obj1, obj2);
console.log(joined);
