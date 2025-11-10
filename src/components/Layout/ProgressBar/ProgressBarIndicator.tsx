import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { useProgressBar } from './ProgressBarContext';
import { cn } from '../../../utils/cn';

const progressFillVariants = tv({
  base: 'h-full flex flex-col justify-center rounded-full overflow-hidden text-xs text-white text-center whitespace-nowrap transition-all duration-500',
  variants: {
    color: {
      primary: 'bg-primary-500',
      secondary: 'bg-secondary-500',
      error: 'bg-error-500',
      success: 'bg-success-500',
      warning: 'bg-yellow-500',
      info: 'bg-blue-500',
    },
    striped: {
      true: 'bg-stripes',
    },
    animated: {
      true: 'animate-stripes',
    },
  },
  defaultVariants: {
    color: 'primary',
  },
});

export interface ProgressBarIndicatorProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof progressFillVariants> {
  value?: number;
}

const ProgressBarIndicator: React.FC<ProgressBarIndicatorProps> = ({
  className,
  color: localColor,
  striped,
  animated,
  value: localValue,
  children,
  ...props
}) => {
  const { value: contextValue, max, color: contextColor } = useProgressBar();
  const value = localValue ?? contextValue;
  const percentage = (value / max) * 100;
  const color = localColor ?? contextColor;

  return (
    <div
      className={cn(progressFillVariants({ color, striped, animated, className }))}
      style={{ width: `${percentage}%` }}
      {...props}
    >
      {children}
    </div>
  );
};

ProgressBarIndicator.displayName = 'ProgressBar.Indicator';

export { ProgressBarIndicator };
