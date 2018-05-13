const Matriz = require('../src/index');

test('matriz have a peek function', () => {
  const matriz = new Matriz();
  expect(typeof matriz.peek).toEqual('function');
});

test('return the last item in array, but not remove it', () => {
  const matriz = new Matriz()
  matriz.push(1)
  matriz.push('last')

  expect(matriz.peek()).toEqual('last')
});
