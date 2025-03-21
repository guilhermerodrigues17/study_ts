//É a maneira que o TS trabalha com os tipos; Em essência, significa que para cumprir um contrato de type ou interface,
//basta fornecer os dados pedidos no conteúdo, não se importando com o nome
type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string }; //vai aceitar qualquer objeto que tenha as chaves 'username' e 'password' sendo strings

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser = { username: 'John', password: '123456' };
const sentUser = { username: 'John', password: '123456' };

const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);
