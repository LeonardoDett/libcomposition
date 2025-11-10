import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { useProgressBar } from './ProgressBarContext';

const progressTrackVariants = tv({
  base: 'relative w-full bg-gray-200 rounded-full dark:bg-neutral-700 flex overflow-hidden',
  variants: {
    size: {
      xs: 'h-1.5',
      sm: 'h-2.5',
      md: 'h-4',
      lg: 'h-6',
      xl: 'h-8',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export interface ProgressBarTrackProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof progressTrackVariants> {}

const ProgressBarTrack: React.FC<ProgressBarTrackProps> = ({
  className,
  children,
  ...props
}) => {
  const { size } = useProgressBar();

  return (
    <div className={progressTrackVariants({ size, className })} {...props}>
      {children}
    </div>
  );
};

ProgressBarTrack.displayName = 'ProgressBar.Track';

export { ProgressBarTrack };
