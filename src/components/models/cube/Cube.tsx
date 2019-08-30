import React from 'react';
import 'aframe';
import 'aframe-particle-system-component';
import { Entity, Scene } from 'aframe-react';

// import 'aframe-ar'

export default () => (
  <Scene>
    <Entity
      geometry={{ primitive: 'box' }}
      material={{ color: 'red' }}
      position={{ x: 3, y: 3, z: -5 }}
    />
    <Entity particle-system={{ preset: 'snow' }} />
    <Entity light={{ type: 'point' }} />
    <Entity gltf-model={{ src: 'virtualcity.gltf' }} />
    <Entity text={{ value: 'Hello, WebVR!' }} />
  </Scene>
);
