//Exemplo de como criar um type para funções de callback
type MapStringCallbackFn = (item: string) => string;

function mapStrings(arr: string[], callbackFn: MapStringCallbackFn): string[] {
  const newArr: string[] = [];

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    newArr.push(callbackFn(item));
  }

  return newArr;
}

const abc = ['a', 'b', 'c'];
const abcUpper = mapStrings(abc, (item) => item.toUpperCase());

console.log(abc);
console.log(abcUpper);
