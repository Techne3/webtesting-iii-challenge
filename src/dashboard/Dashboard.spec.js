// Test away
import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard'
import { fireEvent } from 'react-testing-library';


test('Control is rendering correctly.', () => {
    expect(render(<Dashboard />)).toMatchSnapshot();
});

test ('default is open and unlocked', ()=> {
    const { getByText } = render(<Dashboard />);
    getByText(/unlocked/i);
    getByText(/open/i);

    const lockedToggle = getByText(/lock gate/i);
    expect(lockedToggle.disabled).toBe(true);


    const closeToggle = getByText(/close gate/i);
    expect(closeToggle.disabled).toBe(false);
  
  })
  


  test('test for fireEvents', ()=> {
    const { getByText } = render (<Dashboard />);

    fireEvent.click(getByText(/unlocked/i));
    fireEvent.click(getByText(/locked/i));
    fireEvent.click(getByText(/open/i));
  
  })


  test(`can't be closed or opened if it it locked`, ()=> {
  const { getByText } = render (<Dashboard />);

  const lockBtn = getByText(/lock gate/i);
  fireEvent.click(closeBtn);

  const closeBtn = getByText(/close gate/i);
  fireEvent.click(lockBtn);

  const openBtn = getByText(/open gate/i);
  expect(openBtn.disabled).toBe(true);


  const unlockBtn = getByText(/unlock gate/i);
  expect(unlockBtn.disabled).toBe(false)

  expect(openBtn).toBeTruthy();
  expect(unlockBtn).toBeTruthy();

  })