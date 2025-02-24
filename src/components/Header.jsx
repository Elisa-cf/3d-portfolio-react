import React from 'react';

const Header = ({ title, subtitle }) => {
  return (
    <div>
      <h1 className='head-text'>
        {title}{' '}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          {subtitle}
        </span>
      </h1>
    </div>
  );
};

export default Header;
