//Unknown é similar ao any, porém exige que faça checagem de tipo para realizar alguma operação com o valor
let x: unknown;
x = 'a';
x = 10;
x = true;
x = 2;

const y = 10;
// console.log(x + y); -> gera um erro pois não foi feito a verificação do tipo de x

if (typeof x === 'number') console.log(x + y);
