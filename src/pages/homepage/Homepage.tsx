import React from 'react';
// import * as THREE from 'three';
import './Homepage.scss';
import Button from 'components/atoms/button/Button';
// import Cube from 'components/models/cube/Cube';

export default () => (
  <div id="Homepage">
    <h1 className="title-welcome">welcome to</h1>
    <h2 className="title-name">AR - Big Data Of Medicine</h2>
    <Button
      buttonStyle={{ marginTop: '250px' }}
      onClick={() => {
        console.log('Button Clicked!');
        window.location.href = './cube.html';
      }}
    >
      let's scan
    </Button>
    {/* <Cube /> */}
  </div>
);
