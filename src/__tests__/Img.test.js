import React from 'react';
import { mount } from 'enzyme';
import Img from '../Img';

it('should render <Img> with isLoaded prop', () => {
  const wrapper = mount(<Img image="image.jpg" isLoaded />);

  expect(wrapper).toMatchSnapshot();
});

it('should render <Img> without isLoaded prop', () => {
  const wrapper = mount(<Img image="image.jpg" isLoaded={false} />);

  expect(wrapper).toMatchSnapshot();
});
