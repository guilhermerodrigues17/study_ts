//Record<K,T> - objeto<key, value>
const obj1: Record<string, string> = {
  key1: 'value1',
  key2: 'value2',
};
console.log(obj1);

type PersonProtocol = {
  name?: string;
  surname?: string;
  age?: number;
};

//Required<T> - torna todos atributos obrigatórios
type PersonRequired = Required<PersonProtocol>;
//Partial<T> - torna todos atributos opcionais
type PersonPartial = Partial<PersonRequired>;
//Readonly<T> - torna todos os atributos readonly
type PersonReadonly = Readonly<PersonRequired>;
//Pick<T, K extends keyof T> - seleciona chaves especificas de um type
type PersonPick = Pick<PersonRequired, 'name' | 'surname'>;

const obj2: PersonPick = {
  name: 'John',
  surname: 'Harris',
};
console.log(obj2);

//Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TypeExclude = Exclude<ABC, CDE>; //exclui tipos iguais -> 'A' | 'B'
type TypeExtract = Extract<ABC, CDE>; //deixa apenas tipos iguais -> 'C'

//###Exemplo com Exclude e Pick###
type AccountMongo = {
  _id: string;
  name: string;
  age: number;
};

//Pega chaves de AccountMongo exceto '_id' e adiciona 'id: string' para mapeamento
type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: '06252912-db8e-426d-bb55-62a4e5646e31',
  name: 'John',
  age: 25,
};

//Mapeia _id -> id, cumprindo contrato de AccountApi
function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log('API:');
console.log(accountApi);

//Module mode
export default 1;
