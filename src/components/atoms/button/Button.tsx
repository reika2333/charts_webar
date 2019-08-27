import React from 'react';
import './Button.scss';

export interface ButtonProps {
  buttonStyle?: React.CSSProperties;
  onClick?: () => void;
}

const Button: React.FunctionComponent<ButtonProps> = props => (
  <button
    className="webar-btn"
    style={props.buttonStyle}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

export default Button;
