const helloFn = require('./hello')

test('hello', ()=>{
  //arrange
  let name = 'guy'
  //act
  let result = helloFn(name)
  //assert
  expect(result).toBe('hello guy')
})
