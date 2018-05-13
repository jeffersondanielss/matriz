const Matriz = require('../src/index');

test('matriz have a pop function', () => {
  const matriz = new Matriz();
  expect(typeof matriz.pop).toEqual('function');
});

test('return the last item in array, but not remove it', () => {
  const matriz = new Matriz()
  matriz.push(1)
  matriz.push('two')
  matriz.push(5)

  expect(matriz.pop()).toEqual(5)
  expect(matriz.data).toEqual([1, 'two'])
});
