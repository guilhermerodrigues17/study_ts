/*
Cria-se protocolos específicos pra cada caso; Cada um possui características específicas
*/

export interface IndividualCustomerProtocol {
  firstName: string;
  lastName: string;
  cpf: string;
}

export interface EnterpriseCustomerProtocol {
  name: string;
  cnpj: string;
}

export interface CustomerOrder {
  getName(): string;
  getIDN(): string;
}
