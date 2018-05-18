const Matriz = require('../src/index');

test('matriz have a reverse function', () => {
  const matriz = new Matriz();
  expect(typeof matriz.reverse).toEqual('function');
});

test('return reversed array', () => {
  const matriz = new Matriz()
  matriz.push(1)
  matriz.push(2)
  matriz.push(3)

  expect(matriz.reverse()).toEqual([3,2,1])
});

test('return reversed array', () => {
  const matriz = new Matriz()
  matriz.push('google')
  matriz.push('clound')
  matriz.push('board')

  expect(matriz.reverse()).toEqual(['board', 'clound', 'google'])
});

test('reversed mutate original array', () => {
  const matriz = new Matriz()
  matriz.push('google')
  matriz.push('clound')
  matriz.push('board')
  matriz.reverse()
  
  expect(matriz.data).toEqual(['board', 'clound', 'google'])
});
