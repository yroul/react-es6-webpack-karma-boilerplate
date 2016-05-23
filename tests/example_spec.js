var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils'); //I like using the Test Utils, but you can just use the DOM API instead.


describe('1+1', () => {
  let sum = 1+1;

  it('should be 2', () => {
    expect(2).toBe(2);
  });
});



var About = require('../src/about/index');
describe('About', function () {
  it('renders without problems', function () {
    var root = TestUtils.renderIntoDocument(<About/>);
    expect(root).not.toBeUndefined();
  });

});
