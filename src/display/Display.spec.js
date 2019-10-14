// Test away!

import React from 'react';
import { render, toHaveClass} from '@testing-library/react';
import Display from './Display'


test('Control is rendering correctly.', () => {
    expect(render(<Display />)).toMatchSnapshot();
});


test ('test if its unlocked and open', ()=>{
    const { getByText } = render(<Display />)
  
    const open = getByText(/open/i);
    const unlocked = getByText(/unlocked/i);
  
    expect(open.className).toMatch(/green-led/i);
    expect(unlocked.className).toMatch(/green-led/i);
})


test('test to see className when locked and closed', () => {
    const {getByText} = render(
      <Display closed={true} locked={true} />
    )

    const closedDoor = getByText(/closed/i)
    const lockedDoor = getByText(/locked/i)

    expect(closedDoor.className).toMatch(/red-led/i)
    expect(lockedDoor.className).toMatch(/red-led/i)
})

test('test to see className when unlocked and closed', ()=>{
    const { getByText } = render(
    <Display closed={true} locked={false}/>
    )
  
    const closeDoor = getByText(/closed/i);
    const unlockDoor = getByText(/unlocked/i);
  
    expect(closeDoor.className).toMatch(/red-led/i);
    expect(unlockDoor.className).toMatch(/green-led/i);
  })


  test("should use green led class when open", () => {
      const {getByText} = render(
          <Display closed={false} />
      )
        const closedDisplay = getByText(/open/i)

        expect(closedDisplay.className).toMatch("green-led");

  })

  test("should use red-led when closed", () => {
      const {getByText} = render(
          <Display closed={true} />
      )
      const closedDisplay = getByText(/closed/i)

      expect(closedDisplay.className).toMatch("red-led")
  })
