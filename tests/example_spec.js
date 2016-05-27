import React from 'react';
import TestUtils  from 'react-addons-test-utils';


describe('1+1', () => {
  let sum = 1+1;

  it('should be 2', () => {
    expect(2).toBe(2);
  });
});





import About from '../src/about/index';
describe('About', function () {

  it('renders without problems', function () {
    var root = TestUtils.renderIntoDocument(<About />);
    expect(root).not.toBeUndefined();
  });





});