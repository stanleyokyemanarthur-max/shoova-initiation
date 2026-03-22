import React from 'react';

export const Badge = ({ className, children, variant, contentKey, ...props }) => {
  return (
    <div className={className} {...props}>{children}</div>
  );
};

