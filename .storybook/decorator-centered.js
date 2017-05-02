/* eslint no-unused-expressions:0 */
import React from 'react';
import { injectGlobal } from 'styled-components';
import 'normalize.css';

injectGlobal`
  body {
    padding: 30px;
    margin: 0;
  }
`;

export default function(renderStory) {
  return renderStory();
}
