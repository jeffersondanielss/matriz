const Matriz = require('../src/index');

test('matriz have a unshift function', () => {
  const matriz = new Matriz();
  expect(typeof matriz.unshift).toEqual('function');
});


test('matriz includes shound return true if find element', () => {
  const matriz = new Matriz();
  matriz.push(3)
  matriz.push(4)
  matriz.unshift(1, 2)

  expect(matriz.data.length).toEqual(4);
});