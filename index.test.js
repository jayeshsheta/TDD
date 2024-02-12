const add = require('./index');

//always faild as i throw exeption explicitly
test('negative numbers should throw an exception', () => {
  expect(() => add("//;\n-1;-2")).toThrow("Negative numbers not allowed: -1, -2");
});

//always faild as i throw exeption explicitly
test('passed ard is invalid args',()=>{
  expect(()=>add("#")).toThrow("invalid args");
})

//always faild as i throw exeption explicitly
test('passed arg is not a string',()=>{
  expect(()=>add(1,2)).toThrow("pass valid string");
})

test('empty string should return 0', () => {
  expect(add('')).toBe(0);
});

test('single number should return the number itself', () => {
  expect(add('1')).toBe(1);
});


test('two numbers separated by comma should return their sum', () => {
  expect(add('1,5')).toBe(6);
});

test('numbers separated by comma and new line should return their sum', () => {
  expect(add('1\n2,3')).toBe(6);
});


test('custom delimiter should work and return the sum', () => {
  expect(add("//;\n1;2")).toBe(3);
});

// test.only('single number should return the number itself', () => {
//   expect(add('1')).toBe(1);
// });

// test.only('negative numbers should throw an exception', () => {
//   expect(() => add("//;\n-1;-2")).toThrow("Negative numbers not allowed: -1, -2");
// });

// test.only('numbers separated by comma and new line should return their sum', () => {
//   expect(add('1\n2,3')).toBe(6);
// });