//domain
export class OptionVoting {
  private _count: number = 0;

  constructor(private _name: string) {}

  public get count(): number {
    return this._count;
  }

  public get name(): string {
    return this._name;
  }

  addCount(): void {
    this._count++;
  }
}

export class Voting {
  private _options: Array<OptionVoting> = [];

  constructor(public title: string) {}

  public get options(): Array<OptionVoting> {
    return this._options;
  }

  addOptions(options: Array<OptionVoting>): void {
    this.options.push(...options);
  }

  addVote(optionIndex: number): void {
    if (!this.options[optionIndex]) return;
    this.options[optionIndex].addCount();
  }

  showVotes(): void {
    console.log(this.title);

    this.options.forEach((element) => {
      console.log(element.name, element.count);
    });
    console.log('_____________________________________');
  }
}

//Voting - Linguagem de programação
const voting1 = new Voting('Qual sua linguagem de programação preferida?');
voting1.addOptions([
  new OptionVoting('JavaScript'),
  new OptionVoting('TypeScript'),
  new OptionVoting('Java'),
]);

voting1.addVote(0);
voting1.addVote(0);
voting1.addVote(1);
voting1.addVote(2);

voting1.showVotes();

//Voting - Cor
const voting2 = new Voting('Qual sua cor favorita?');
voting2.addOptions([
  new OptionVoting('Red'),
  new OptionVoting('Green'),
  new OptionVoting('Blue'),
]);

voting2.addVote(0);
voting2.addVote(1);
voting2.addVote(2);
voting2.addVote(2);
voting2.addVote(0);

voting2.showVotes();
