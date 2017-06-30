import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledImg = styled.div`
  height: 100%;
  background-repeat: no-repeat;
  transition: opacity 0.3s linear;
`;

const Img = ({ image, isLoaded, style, ...otherProps }) =>
  <StyledImg
    style={{
      ...style,
      backgroundImage: `url("${image}"`,
      filter: isLoaded ? 'none' : 'blur(20px)',
      opacity: isLoaded ? 1 : 0.5,
    }}
    {...otherProps}
  />;

Img.displayName = 'Img';
Img.propTypes = {
  image: PropTypes.string.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Img;
