//<T> usado para generalizações em que não se sabe qual o tipo será passado
//Pode ser usado em diversas estruturas da linguagem

type FilterCallback<U> = (value: U, index?: number, array?: U[]) => boolean;

//Criando um filter similar ao nativo do js, é necessário uma generalização pois o método pode ser utilizado em diversas situações
export function myFilter<T>(array: T[], callbackFn: FilterCallback<T>): T[] {
  const newArr = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackFn(array[i])) {
      newArr.push(array[i]);
    }
  }

  return newArr;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrFilteredOriginal = arr.filter((value) => value > 5);
console.log(arrFilteredOriginal);

const arrFiltered = myFilter(arr, (value) => value > 5);
console.log(arrFiltered);
