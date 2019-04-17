// DOM test

import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import { CheckBoxWithLabel } from '../components';

// automatically unmount and cleanup DOM after the test is finished
afterEach(cleanup);

test(`CheckBoxWithLabel changes the text afer click`, ()=>{
    const {queryByLabelText, getByLabelText} = render(
        <CheckBoxWithLabel labelOn='on' labelOff='off'/>
    );
    expect(queryByLabelText(/off/i)).toBeTruthy();
    fireEvent.click(getByLabelText(/off/i));
    expect(queryByLabelText(/on/i)).toBeTruthy();
});