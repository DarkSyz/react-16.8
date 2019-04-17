// Snapshot test

import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { SimpleComponent } from '../components';

// automatically unmount and cleanup DOM after the test is finished
afterEach(cleanup);

test(`<username/> should render Ben`, ()=>{
    const { container } = render(
        <SimpleComponent username='Ben'/>
    );
    expect(container).toMatchSnapshot();
});
