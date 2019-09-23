"use strict"
const _ = require("../src/a.js");

describe('module a test', () => {  
  test('add numbers', () => {
    const number = 100;
    const result = _.add(number);
    expect(result).toEqual(200);
  })
})
