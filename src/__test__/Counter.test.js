// DOM test

import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import { Counter } from '../components';

// automatically unmount and cleanup DOM after the test is finished
afterEach(cleanup);

test(`Counter one click`, ()=>{
    const {getByTestId} = render(
        <Counter />
    );
    
    expect(getByTestId('counter').innerHTML).toBe('0');
    fireEvent.click(getByTestId('trigger'));
    expect(getByTestId('counter').innerHTML).toBe('1');
});