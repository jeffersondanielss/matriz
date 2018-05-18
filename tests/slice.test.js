const Matriz = require('../src/index');

test('matriz have a slice function', () => {
  const matriz = new Matriz();
  expect(typeof matriz.slice).toEqual('function');
});


test('matriz each and duplicate itens', () => {
  const matriz = new Matriz();
  matriz.push('Banana')
  matriz.push('Laranja')
  matriz.push('Limão')
  matriz.push('Maçã')
  matriz.push('Manga')
  
  expect(matriz.slice(1, 3)).toEqual(['Laranja','Limão']);
});

test('matriz slice itens using begin and end ', () => {
  const matriz = new Matriz();
  matriz.push(1)
  matriz.push(2)
  matriz.push(3)
  matriz.push(4)
  matriz.push(5)
  matriz.push(6)
  matriz.push(7)
  
  expect(matriz.slice(1)).toEqual([ 2, 3, 4, 5, 6, 7 ]);
  expect(matriz.slice(5)).toEqual([ 6, 7 ]);
  expect(matriz.slice(2,6)).toEqual([ 3, 4, 5, 6 ]);
  expect(matriz.slice(-2)).toEqual([ 6, 7 ]);
});