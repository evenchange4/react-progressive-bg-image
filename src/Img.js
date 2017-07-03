import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledImg = styled.div`
  height: 100%;
  background-repeat: no-repeat;
  transition: ${props => (props.isCached ? 'none' : props.transition)};

  opacity: ${props => (props.isLoaded ? 1 : props.opacity)};
  filter: ${props => (props.isLoaded ? 'none' : `blur(${props.blur}px)`)};
  /* this is needed so Safari keeps sharp edges */
  transform: ${props => (props.isLoaded ? 'none' : `scale(${props.scale})`)};
`;

const Img = ({ image, style, ...otherProps }) =>
  <StyledImg
    style={{
      ...style,
      backgroundImage: `url("${image}")`,
    }}
    {...otherProps}
  />;

Img.displayName = 'Img';
Img.propTypes = {
  // Internal
  image: PropTypes.string.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  isCached: PropTypes.bool.isRequired,

  // props
  opacity: PropTypes.number.isRequired,
  blur: PropTypes.number.isRequired,
  scale: PropTypes.number.isRequired,
  className: PropTypes.string,
  transition: PropTypes.string,
  style: PropTypes.object,
};

export default Img;
