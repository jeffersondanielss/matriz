const Matriz = require('../src/index');

test('matriz have a indexOf function', () => {
  const matriz = new Matriz();
  expect(typeof matriz.indexOf).toEqual('function');
});


test('matriz indexOf shound return first index of find element in array', () => {
  const matriz = new Matriz();
  matriz.push(1)
  matriz.push(2)
  matriz.push(5)

  expect(matriz.indexOf(1)).toEqual(0)
  expect(matriz.indexOf(7)).toEqual(-1)
  expect(matriz.indexOf(1, 1)).toEqual(-1)
  expect(matriz.indexOf(1, -3)).toEqual(0)
  // expect(matriz.indexOf(1, -1)).toEqual(-1)
});
