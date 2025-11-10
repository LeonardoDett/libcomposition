import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { useProgressBar } from './ProgressBarContext';

const progressLabelVariants = tv({
  base: '',
  variants: {
    position: {
      inside: 'absolute w-full text-center text-xs font-semibold text-white',
      outside: 'text-sm text-gray-800 dark:text-white',
    },
  },
  defaultVariants: {
    position: 'inside',
  },
});

export interface ProgressBarLabelProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof progressLabelVariants> {}

const ProgressBarLabel: React.FC<ProgressBarLabelProps> = ({ className, position, ...props }) => {
  const { value, showLabel } = useProgressBar();

  if (!showLabel) {
    return null;
  }

  return (
    <span className={progressLabelVariants({ position, className })} {...props}>
      {value}%
    </span>
  );
};

ProgressBarLabel.displayName = 'ProgressBar.Label';

export { ProgressBarLabel };
