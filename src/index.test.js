const expect = require('chai').expect;

const lib = require('./index');

describe('example test', () => {
  it('should work', () => {
    expect(lib.log()).to.be.string;
  });
  it('should get a string', () => {
    expect(lib.getLog3()).to.be.eq('logger3');
  });
});