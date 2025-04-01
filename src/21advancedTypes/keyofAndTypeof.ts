//Maneiras de selecionar os tipos e chaves de um objeto que tenha tipos inferidos
//Simplifica e melhora a legibilidade em algumas soluções, propondo maior dinamismo
type RgbColors = typeof rgbColors;
type RgbColorsKeys = keyof RgbColors;

const rgbColors = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
};

export function translate(color: RgbColorsKeys, colors: RgbColors): string {
  return colors[color];
}

console.log(translate('vermelho', rgbColors));
console.log(translate('verde', rgbColors));
console.log(translate('azul', rgbColors));
