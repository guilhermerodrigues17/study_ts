//enum é uma estrutura não ordenada, de chave e valor, utilizada para quando se tem mais de uma opção pra alguma coisa
enum Colors {
  RED, // 0
  BLUE, // 1
  YELLOW, // 2
}

//quando há dois enums com mesmo nome ele faz a junção em uma única estrutura
enum Colors {
  GREEN = 'green',
  PURPLE = 'purple',
  BROWN = 5,
  BLACK, // 6
}

console.log(Colors);

console.log(Colors[0]);
console.log(Colors.RED);

export function chooseColor(color: Colors): void {
  console.log(color);
}

chooseColor(Colors.GREEN);
