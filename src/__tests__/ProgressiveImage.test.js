import React from 'react';
import { mount } from 'enzyme';
import ProgressiveImage, { Img, DELAY } from '../ProgressiveImage';

it('should render <Img> with isLoaded prop', () => {
  const wrapper = mount(
    <Img image="image.jpg" isLoaded />,
  );

  expect(wrapper).toMatchSnapshot();
})

it('should render <Img> without isLoaded prop', () => {
  const wrapper = mount(
    <Img image="image.jpg" />,
  );

  expect(wrapper).toMatchSnapshot();
})

it('should render <ProgressiveImage>', done => {
  const wrapper = mount(
    <ProgressiveImage src="origin.jpg" placeholder="small.jpg" />,
  );

  expect(wrapper).toMatchSnapshot();

  setTimeout(() => {
    expect(wrapper).toMatchSnapshot();
    done()
  }, 250)
});
