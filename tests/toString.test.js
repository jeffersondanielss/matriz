const Matriz = require('../src/index');

test('matriz have a toString function', () => {
  const matriz = new Matriz();
  expect(typeof matriz.toString).toEqual('function');
});

test('convet array in string', () => {
  const matriz = new Matriz()
  matriz.push(1)
  matriz.push(2)
  matriz.push('teste')
  matriz.push('One test')
  expect(matriz.toString()).toEqual('1,2,teste,One test')
});
