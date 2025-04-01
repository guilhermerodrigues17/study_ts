//Encadeamento opcional e operador de coalescência nula
type DocumentTypo = {
  title: string;
  text: string;
  date?: Date;
};

const documentObj: DocumentTypo = {
  title: 'Title',
  text: 'Text',
};

//date pode ser Date | undefined, então usa-se o encadeamento opcional, não lançando runtimeError
console.log(documentObj.date?.toDateString());

//?? -> operador de coalescência nula; se o que está à esquerda for null | undefined, retorna o que está à direita
console.log(documentObj.date?.toDateString ?? 'Date is undefined');
