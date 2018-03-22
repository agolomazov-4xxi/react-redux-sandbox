import React from 'react';
import { Link } from 'react-router-dom';

const Logo = (props) => {
  if (!props.link) {
    return (
      <img src={props.src} {...props}/>
    );
  }
  return (
    <Link to={props.link}>
      <img src={props.src} {...props} alt="logo"/>
    </Link>
  );
};

export default Logo;
