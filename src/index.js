const messages = ['Oscar', 'Ana', 'Nicolay', 'Laula', 'Diego', 'Silvana'];
const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
};
module.exports = { randomMsg };
