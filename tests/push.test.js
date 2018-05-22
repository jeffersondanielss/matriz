const Matriz = require('../src/index');

test('matriz have a push function', () => {
  const matriz = new Matriz();
  expect(typeof matriz.push).toEqual('function');
});

test('push method add a item a matriz', () => {
  const matriz = new Matriz()
  matriz.push(1)
  matriz.push(2)
  matriz.push('teste')
  matriz.push('One test')

  expect(matriz.data).toEqual([1, 2, 'teste', 'One test'])
  expect(matriz.push('final item')).toEqual(5)
  expect(matriz.data).toEqual([1, 2, 'teste', 'One test', 'final item'])
});

test('push method add multiples itens a matriz', () => {
  const matriz = new Matriz()
  matriz.push(1,2)

  expect(matriz.data).toEqual([1, 2])
});

test('push method add array a item a matriz', () => {
  const matriz = new Matriz()
  matriz.push(1,2)
  matriz.push([1, 2])

  expect(matriz.data).toEqual([1, 2, [1, 2]])
});
