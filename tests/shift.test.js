const Matriz = require('../src/index');

test('matriz have a shift function', () => {
  const matriz = new Matriz();
  expect(typeof matriz.shift).toEqual('function');
});

test('push method add a item a matriz', () => {
  const matriz = new Matriz()
  matriz.push(1)
  matriz.push(2)
  matriz.push('teste')
  matriz.push('One test')

  expect(matriz.shift()).toEqual(1)
  expect(matriz.data).toEqual([2, 'teste', 'One test'])
});
