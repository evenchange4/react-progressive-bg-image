import React from 'react';
import { mount } from 'enzyme';
import ProgressiveImage, { DELAY } from '../ProgressiveImage';

it('should return DELAY constant', () => {
  expect(DELAY).toBe(200);
})

it('should render <ProgressiveImage>', done => {
  const wrapper = mount(
    <ProgressiveImage src="origin.jpg" placeholder="small.jpg" />,
  );

  expect(wrapper).toMatchSnapshot('1. before resolving image');

  setTimeout(() => {
    expect(wrapper).toMatchSnapshot('2. after resolving image');
    done()
  }, 250)
});
