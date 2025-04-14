import { Messaging } from './messaging';

//Criar uma factory para o sut para evitar repetição de código
const createSut = () => {
  return new Messaging();
};

describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks());

  it('should return undefined', () => {
    expect(createSut().sendMessage('test')).toBeUndefined();
  });

  it('should call console.log once', () => {
    const consoleSpy = jest.spyOn(console, 'log');

    createSut().sendMessage('test');
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should call console.log with "Message sent:" and msg', () => {
    const consoleSpy = jest.spyOn(console, 'log');

    createSut().sendMessage('test');
    expect(consoleSpy).toHaveBeenCalledWith('Message sent: ' + 'test');
  });
});
