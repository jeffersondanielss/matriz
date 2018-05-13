const Matriz = require('../src/index');

test('matriz have a includes function', () => {
  const matriz = new Matriz();
  expect(typeof matriz.includes).toEqual('function');
});


test('matriz includes shound return true if find element', () => {
  const matriz = new Matriz();
  matriz.push(1)
  matriz.push(2)
  expect(matriz.includes(1)).toBeTruthy();
});

test('matriz includes shound return false if not find element', () => {
  const matriz = new Matriz();
  matriz.push(1)
  matriz.push(2)
  expect(matriz.includes(5)).toBeFalsy();
});

test('matriz includes by index', () => {
  const matriz = new Matriz();
  matriz.push('test')
  matriz.push('item two')
  matriz.push('jest')
  expect(matriz.includes('test', 1)).toBeFalsy();
});
