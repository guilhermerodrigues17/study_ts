//Uma classe é instanciada dentro de outra, ou seja, ela não existe fora daquele escopo
export class Car {
  private readonly engine = new Engine();

  turnOn(): void {
    this.engine.turnOn();
  }

  accelerate(): void {
    this.engine.accelerate();
  }

  brake(): void {
    this.engine.brake();
  }

  turnOff(): void {
    this.engine.turnOff();
  }
}

export class Engine {
  turnOn(): void {
    console.log('Engine is on');
  }

  accelerate(): void {
    console.log('Engine is accelerating');
  }

  brake(): void {
    console.log('Engine is braking');
  }

  turnOff(): void {
    console.log('Engine is off');
  }
}

const car = new Car();
car.turnOn();
car.accelerate();
car.brake();
car.turnOff();
