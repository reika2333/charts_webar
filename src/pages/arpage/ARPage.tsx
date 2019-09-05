import React from 'react';
import cubeHtml from './cube';
import './cube.scss';

export default () => (
  <div id="sence" dangerouslySetInnerHTML={{ __html: cubeHtml }} />
);
