import React from 'react';
import { Button, ButtonProps } from '../../Forms/Button';
import { Icon, IconProps } from '../Icon';
import { tv } from 'tailwind-variants';

export interface IconButtonProps extends Omit<ButtonProps, 'children'> {
  icon: IconProps['component'];
  iconSize?: IconProps['size'];
  iconColor?: IconProps['color'];
  variant?: ButtonProps['variant'];
  children?: React.ReactNode; 
}

export const IconButtonVariants = tv({
  base: "p-2.5",
  variants: {
    size: {
      sm: "p-1.5",
      md: "p-2.5",
      lg: "p-3.5"
    }
  },
  defaultVariants: {
    size: "md"
  }
});

export const IconButton: React.FC<IconButtonProps> = ({
  icon: IconComponent,
  iconSize,
  iconColor,
  children,
  className,
  variant = "text",
  size = "md",
  ...rest
}) => {
  return (
    <Button
      size={size}
      className={IconButtonVariants({ size, className })}
      variant={variant}
      {...rest}
    >
      <Icon component={IconComponent} size={iconSize} color={iconColor} />
      {children && <span className="ml-2">{children}</span>}
    </Button>
  );
};
