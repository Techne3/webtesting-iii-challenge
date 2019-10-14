// Test away!

import React from 'react';
import { render } from '@testing-library/react';
import Controls from './Controls'
import { fireEvent } from 'react-testing-library';


test('Control is rendering correctly.', () => {
    expect(render(<Controls />)).toMatchSnapshot();
    
});


test('test if Unlock Gate is called on click', () => {
    const unlockGateMock = jest.fn();
    const {getByText} = render(
        <Controls closed={unlockGateMock}/>
    )
    fireEvent.click(getByText(/lock gate/i));
    fireEvent.click(getByText(/open gate/i));
    
  
})

test('test if toggleLocked is called on click', () => {
    const toggleLockMock = jest.fn();
    const {getByText} = render(
        <Controls toggleLocked={toggleLockMock}/>
    )
    fireEvent.click(getByText(/lock gate/i));
    fireEvent.click(getByText(/close gate/i));
    
    expect(toggleLockMock).toHaveBeenCalledTimes(0);
  
})


test('test if toggleClosed is called on click', () => {
    const toggleClosedMock = jest.fn();
    const {getByText} = render(
        <Controls toggleClosed={toggleClosedMock}/>
    )
    fireEvent.click(getByText(/lock gate/i));
    fireEvent.click(getByText(/close gate/i));
   

    expect(toggleClosedMock).toHaveBeenCalled();
    expect(toggleClosedMock).toHaveBeenCalledTimes(1);
  
})

