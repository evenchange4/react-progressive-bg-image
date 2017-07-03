import React from 'react';
import PropTypes from 'prop-types';
import omit from 'ramda/src/omit';
import styled from 'styled-components';

const omitProps = omit(['blur', 'transition', 'isCached', 'isLoaded']);

const BaseComponent = ({ component, children, ...otherProps }) =>
  React.createElement(component, omitProps(otherProps), children);
BaseComponent.displayName = 'BaseComponent';
BaseComponent.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
  children: PropTypes.node, // Remind: There is not a children for Input tag.
};
const StyledImg = styled(BaseComponent)`
  height: 100%;
  background-repeat: no-repeat;
  transition: ${props => (props.isCached ? 'none' : props.transition)};

  opacity: ${props => (props.isLoaded ? 1 : props.opacity)};
  filter: ${props => (props.isLoaded ? 'none' : `blur(${props.blur}px)`)};
  /* this is needed so Safari keeps sharp edges */
  transform: ${props => (props.isLoaded ? 'none' : `scale(${props.scale})`)};
`;

const Img = ({ component, image, style, ...otherProps }) =>
  <StyledImg
    {...otherProps}
    component={component}
    {...component === 'img' && { src: image }}
    style={{
      ...style,
      ...(component !== 'img' && { backgroundImage: `url("${image}")` }),
    }}
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
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

export default Img;
