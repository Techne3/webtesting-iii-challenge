// Test away
import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard'


test('Control is rendering correctly.', () => {
    expect(render(<Dashboard />)).toMatchSnapshot();
});