import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.scss';
import Button from 'components/atoms/button/Button';

export default () => (
  <div id="Homepage">
    <h1 className="title-welcome">welcome to</h1>
    <h2 className="title-name">AR - Big Data Of Medicine</h2>
    <Link to="/ar">
      <Button buttonStyle={{ marginTop: '250px' }}>let's scan</Button>
    </Link>
  </div>
);
