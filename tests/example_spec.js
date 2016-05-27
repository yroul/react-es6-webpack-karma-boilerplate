import React from 'react';
import TestUtils  from 'react-addons-test-utils';


import About from '../src/about/index';

// This is the working syntaxt to import typescript modue 'ES6 style'

import { default as AuthApi } from '../src/api/auth/index';



describe('1+1', () => {
  let sum = 1+1;

  it('should be 2', () => {
    expect(2).toBe(2);
  });
});





describe('About', function () {

  it('renders without problems', function () {
    var root = TestUtils.renderIntoDocument(<About />);
    expect(root).not.toBeUndefined();
  });

});





describe('Tyescript', function () {

    it('is able to compile and run', function () {

        let testObject = new AuthApi();

        expect(testObject.test('coucou')).toBe(true);

    });

});