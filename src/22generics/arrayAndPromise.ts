//Arrays e Promises são generics
const arr: Array<number> = [1, 2, 3, 4, 5];
console.log(arr);

export async function promiseAsync() {
  return 1;
}
promiseAsync().then((result) => console.log(result + 1));

//Promise<T> aceita qualquer type
export function myPromise(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
}
myPromise().then((result) => console.log(result + 10));
