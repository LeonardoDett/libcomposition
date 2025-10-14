import React from "react";

export interface IconProps {
  component: React.ElementType;
  size?: number | string;
  color?: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({
  component: Component,
  size = 24,
  className,
  ...rest
}) => {
  return (
    <Component
      size={size}
      className={className}
      {...rest}
    />
  );
};