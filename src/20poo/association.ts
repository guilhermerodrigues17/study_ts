//Tipo de ligação mais fraca entre classes, onde uma só utiliza a outra e não necessariamente depende desse objeto.
export class Writer {
  private _tool: Tool | null = null;

  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }

  get tool(): Tool | null {
    return this._tool;
  }

  set tool(value: Tool | null) {
    this._tool = value;
  }

  write(): void {
    if (this._tool === null) {
      console.log("Can't write without a tool...");
      return;
    }
    this._tool.write();
  }
}

export abstract class Tool {
  constructor(private _name: string) {}

  abstract write(): void;

  get name(): string {
    return this._name;
  }
}

export class Pen extends Tool {
  write(): void {
    console.log(`${this.name} is writing...`);
  }
}

export class Keyboard extends Tool {
  write(): void {
    console.log(`${this.name} is typing...`);
  }
}

const writer = new Writer('John');
const pen = new Pen('Bic');
const keyboard = new Keyboard('Logitech GPRO TKL');
writer.write();

writer.tool = pen;
writer.write();

writer.tool = keyboard;
writer.write();
