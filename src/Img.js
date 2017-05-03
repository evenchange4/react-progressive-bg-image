import PropTypes from 'prop-types';
import styled from 'styled-components';

const Img = styled.div`
  height: 100%;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  transition: opacity 0.3s linear;

  opacity: ${props => (props.isLoaded ? 1 : 0.5)};
  filter: ${props => (props.isLoaded ? 'none' : 'blur(20px)')};
  /* this is needed so Safari keeps sharp edges */
  transform: ${props => (props.isLoaded ? 'none' : 'scale(1)')};
`;

Img.displayName = 'Img';
Img.propTypes = {
  image: PropTypes.string.isRequired,
  isLoaded: PropTypes.bool.isRequired,
};

export default Img;
