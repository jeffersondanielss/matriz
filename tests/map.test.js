const Matriz = require('../src/index');

test('matriz have a map function', () => {
  const matriz = new Matriz();
  expect(typeof matriz.map).toEqual('function');
});


test('matriz each and duplicate itens', () => {
  const matriz = new Matriz();
  matriz.push(1)
  matriz.push(2)
  let stdout = matriz.map( current => current * 2)
  expect(stdout).toEqual([2,4]);
});

test('matriz each itens and use index', () => {
  const matriz = new Matriz();
  matriz.push(1)
  matriz.push(2)
  matriz.push(10)
  matriz.push(3)

  let stdout = matriz.map( (current, index) =>
    index < 2
      ? current * 2
      : current
  )
  
  expect(stdout).toEqual([2, 4, 10, 3]);
});