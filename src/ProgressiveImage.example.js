import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@kadira/storybook';
import ProgressiveImage from './ProgressiveImage';
import image1 from '../images/image1.jpg';
import image1X60 from '../images/image1X60.jpg';
import image2 from '../images/image2.jpg';
import image2X60 from '../images/image2X60.jpg';

storiesOf('ProgressiveImage', module)
  .addWithInfo(
    'Simple image',
    'Based on styled-components.',
    () => {
      const StyledProgressiveImage = styled(ProgressiveImage)`
        height: 600px;
        background-size: contain;
        background-position-y: center;
        background-position-x: center;
      `;

      return <StyledProgressiveImage src={image1} placeholder={image1X60} />;
    },
    { inline: true, propTables: [ProgressiveImage] },
  )
  .addWithInfo(
    'Custim transition',
    'Overrided with `transition: filter 1s linear;`',
    () => {
      const CoverProgressiveImage = styled(ProgressiveImage)`
        height: 80vh;
        background-color: aliceblue;
        background-size: cover;
        background-attachment: fixed;
        background-position-y: 70%;
        background-position-x: center;

        /* Overrided */
        transition: filter 1s linear;
      `;
      return <CoverProgressiveImage src={image2} placeholder={image2X60} />;
    },
    { inline: true, propTables: [ProgressiveImage] },
  );
