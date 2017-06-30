import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledImg = styled.div`
  height: 100%;
  background-repeat: no-repeat;
  transition: opacity 0.3s linear;

  opacity: ${props => (props.isLoaded ? 1 : 0.5)};
  filter: ${props => (props.isLoaded ? 'none' : 'blur(20px)')};
  /* this is needed so Safari keeps sharp edges */
  transform: ${props => (props.isLoaded ? 'none' : 'scale(1)')};
`;

const Img = ({ image, style, ...otherProps }) => (
  <StyledImg
    style={{
      ...style,
      backgroundImage: `url("${image}"`,
    }}
    {...otherProps}
  />
);

Img.displayName = 'Img';
Img.propTypes = {
  image: PropTypes.string.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Img;
