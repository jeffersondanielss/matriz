const Matriz = require('../src/index');

test('matriz have a unshift function', () => {
  const matriz = new Matriz();
  expect(typeof matriz.unshift).toEqual('function');
});


test('matriz includes shound return true if find element', () => {
  const matriz = new Matriz();
  matriz.push(2)
  matriz.push(3)
  matriz.unshift(1)

  expect(matriz.data).toEqual([1, 2, 3]);
});