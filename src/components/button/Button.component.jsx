import React from 'react';
import PropTypes from 'prop-types';
import './Button.styles.scss';

const Button = ({outlineColor, handleClick, buttonAction}) => {
  return (
    <button onClick={handleClick} className={`${outlineColor}-btn`}>
      {buttonAction}
    </button>
  )
};

Button.propTypes = {
  handleClick: PropTypes.func,
  outlineColor: PropTypes.string,
  buttonAction: PropTypes.string,
};

Button.defaultProps = {
  handleClick: () => {},
  outlineColor: "",
  buttonAction: "",
};

export default Button;
