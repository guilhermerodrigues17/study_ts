//É possível utilizar construtor private no TS; Pode ser útil para criar um singleton, utilizando também factory method
//Singleton só permite uma única instância de uma classe; Se houver "duas" instâncias, elas vão ser a mesma
export class Database {
  private static database: Database;

  //Singleton pattern
  private constructor(
    private host: string,
    private username: string,
    private password: string,
  ) {}

  //Factory method
  static getDatabase(
    host: string,
    username: string,
    password: string,
  ): Database {
    if (this.database) {
      console.log('Returning an already existing instance');
      return this.database;
    }

    console.log('Creating a new instance');
    this.database = new Database(host, username, password);
    return this.database;
  }

  connect(): void {
    console.log(`Connecting: ${this.host}, ${this.username}, ${this.password}`);
  }
}

const database1 = Database.getDatabase('localhost', 'admin', 'admin');
database1.connect();

console.log();

const database2 = Database.getDatabase('localhost', 'admin', 'admin');
database2.connect();
