import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const circularProgressVariants = tv({
  slots: {
    svg: '',
    track: 'stroke-gray-200 dark:stroke-neutral-700',
    indicator: 'stroke-linecap-round transition-all duration-300',
  },
  variants: {
    variant: {
      determinate: '',
      indeterminate: {
        svg: 'animate-spin', // Using Tailwind's built-in spin animation
      },
    },
    color: {
      primary: { indicator: 'stroke-primary-500' },
      secondary: { indicator: 'stroke-secondary-500' },
      error: { indicator: 'stroke-error-500' },
      success: { indicator: 'stroke-success-500' },
    },
  },
  defaultVariants: {
    variant: 'determinate',
    color: 'primary',
  },
});

export interface CircularProgressProps extends React.SVGAttributes<SVGSVGElement>, VariantProps<typeof circularProgressVariants> {
  value?: number;
  size?: number;
  thickness?: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  value = 0,
  variant = 'determinate',
  color = 'primary',
  size = 48,
  thickness = 4,
  className,
  ...props
}) => {
  const { svg, track, indicator } = circularProgressVariants({ variant, color });

  const radius = (size - thickness) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={svg({ className })}
      {...props}
    >
      <circle
        className={track()}
        fill="transparent"
        strokeWidth={thickness}
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
      <circle
        className={indicator()}
        fill="transparent"
        strokeWidth={thickness}
        strokeDasharray={circumference}
        strokeDashoffset={variant === 'determinate' ? offset : undefined}
        r={radius}
        cx={size / 2}
        cy={size / 2}
        style={{
          // Start the circle from the top
          transform: 'rotate(-90deg)',
          transformOrigin: '50% 50%',
        }}
      />
    </svg>
  );
};

CircularProgress.displayName = 'CircularProgress';

// Exporting as a namespace for consistency, even though it's a single component.
export { CircularProgress };
