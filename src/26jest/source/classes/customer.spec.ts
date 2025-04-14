import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

describe('IndividualCustomer', () => {
  it('should have firstName, lastName and cpf', () => {
    const sut = createIndividualCustomer('John', 'Johnson', '111.111.111-11');
    expect(sut).toHaveProperty('firstName', 'John');
    expect(sut).toHaveProperty('lastName', 'Johnson');
    expect(sut).toHaveProperty('cpf', '111.111.111-11');
  });

  it('should have methods for get name and idn for individual customer', () => {
    const sut = createIndividualCustomer('John', 'Johnson', '111.111.111-11');
    expect(sut.getName()).toBe('John Johnson');
    expect(sut.getIDN()).toBe('111.111.111-11');
  });
});

describe('EnterpriseCustomer', () => {
  it('should have firstName, lastName and cpf', () => {
    const sut = createEnterpriseCustomer('Meta', '111/0001');
    expect(sut).toHaveProperty('name', 'Meta');
    expect(sut).toHaveProperty('cnpj', '111/0001');
  });

  it('should have methods for get name and idn for enterprise customer', () => {
    const sut = createEnterpriseCustomer('Meta', '111/0001');
    expect(sut.getName()).toBe('Meta');
    expect(sut.getIDN()).toBe('111/0001');
  });
});
