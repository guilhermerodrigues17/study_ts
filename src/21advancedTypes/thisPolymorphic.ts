//this pode ser passado como um tipo
export class Calculator {
  constructor(public number: number) {}

  add(n: number): this {
    this.number += n;
    return this;
  }

  sub(n: number): this {
    this.number -= n;
    return this;
  }

  div(n: number): this {
    this.number /= n;
    return this;
  }

  mul(n: number): this {
    this.number *= n;
    return this;
  }
}

export class SubCalc extends Calculator {
  pow(n: number): this {
    this.number **= n;
    return this;
  }
}

const calculator = new SubCalc(10);
calculator.add(5).mul(2).div(2).sub(5).pow(2);
console.log(calculator);

//Builder - GoF
export class RequestBuilder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    console.log(`Sending data via ${this.method} to ${this.url}`);
  }
}

const request = new RequestBuilder();
request.setMethod('post').setUrl('http://google.com').send();
