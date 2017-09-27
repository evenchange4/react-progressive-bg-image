import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import ProgressiveImage from '.';
import image1 from '../images/image1.jpg';
import image1X60 from '../images/image1X60.jpg';
import image2 from '../images/image2.jpg';
import image2X60 from '../images/image2X60.jpg';

storiesOf('ProgressiveImage', module)
  .addWithInfo(
    'Inline-style',
    'Based on styled-components.',
    () => (
      <ProgressiveImage
        src={image1}
        placeholder={image1X60}
        style={{
          height: 600,
          backgroundSize: 'contain',
          backgroundPosition: 'center center',
        }}
      />
    ),
    { inline: true, propTables: [ProgressiveImage] },
  )
  .addWithInfo(
    'With Styled-components',
    'Overrided with `transition: filter 1s linear;`',
    () => {
      const CoverProgressiveImage = styled(ProgressiveImage)`
        height: 80vh;
        background-color: aliceblue;
        background-size: cover;
        background-attachment: fixed;
        background-position-y: 70%;
        background-position-x: center;
      `;
      return <CoverProgressiveImage src={image2} placeholder={image2X60} />;
    },
    { inline: true, propTables: [ProgressiveImage] },
  )
  .addWithInfo(
    'With other props',
    'blur / opacity / scale / transition',
    () => (
      <ProgressiveImage
        src={image1}
        placeholder={image1X60}
        blur={2}
        opacity={0.9}
        transition="all 1s linear"
        style={{
          height: 600,
          backgroundSize: 'contain',
          backgroundPosition: 'center center',
        }}
      />
    ),
    { inline: true, propTables: [ProgressiveImage] },
  )
  .addWithInfo(
    'With component props',
    'Use <img> tag with src',
    () => (
      <ProgressiveImage
        src={image1}
        placeholder={image1X60}
        component="img"
        style={{
          height: 600,
          backgroundSize: 'contain',
          backgroundPosition: 'center center',
        }}
      />
    ),
    { inline: true, propTables: [ProgressiveImage] },
  );
