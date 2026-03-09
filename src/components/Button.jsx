import React from 'react';

export const Button = ({ className, children, variant, contentKey, ...props }) => {
  return (
    <button id="mobile-menu-btn" className={className} {...props}>{children}</button>
  );
};

