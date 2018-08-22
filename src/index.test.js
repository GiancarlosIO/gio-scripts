const expect = require('chai').expect;

const lib = require('./index');

describe('example test', () => {
  it('should work', () => {
    expect(lib.log()).to.be.string;
  });
});