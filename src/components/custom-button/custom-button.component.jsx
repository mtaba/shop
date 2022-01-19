import React from 'react'
import './custome-button.styles.scss'

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
  <button
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} ${inverted ? 'inverted': ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);
export default CustomButton;
