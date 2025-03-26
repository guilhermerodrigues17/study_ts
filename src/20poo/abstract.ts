//Classes e métodos abstratos fornecem um contrato a ser implementado pelas subclasses
export abstract class Character {
  protected abstract characterIcon: string;

  constructor(
    protected name: string,
    protected attack: number,
    protected life: number,
  ) {}

  attackLogic(character: Character): void {
    this.speech();
    console.log(`${this.name} is attacking...`);
    character.loseLife(this.attack);
  }

  loseLife(attackStrength: number): void {
    this.life -= attackStrength;
    console.log(`${this.name} now have ${this.life} points of life`);
    console.log();
  }

  abstract speech(): void;
}

//Subclasse é obrigada a implementar atributos e métodos abstratos
export class Soldier extends Character {
  protected characterIcon = '\u{1FA96}';

  speech(): void {
    console.log(this.characterIcon + ' Attacking the target!');
  }
}

export class Enemy extends Character {
  protected characterIcon = '\u{1F47D}';

  speech(): void {
    console.log(this.characterIcon + ' Kill the soldier');
  }
}

const soldier = new Soldier('Steve', 100, 500);
const enemy = new Enemy('Ultron', 250, 1000);

soldier.attackLogic(enemy);
soldier.attackLogic(enemy);
soldier.attackLogic(enemy);

enemy.attackLogic(soldier);
