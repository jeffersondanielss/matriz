const Matriz = require('../src/index');

test('matriz have a forEach function', () => {
  const matriz = new Matriz();
  expect(typeof matriz.forEach).toEqual('function');
});


test('function each every item in matriz', () => {
  const matriz = new Matriz();
  let stdout = ''

  matriz.push(1)
  matriz.push(2)
  matriz.push(3)
  matriz.push(' Done')
  matriz.forEach( current => stdout += current )
  
  expect(stdout).toEqual('123 Done')
});