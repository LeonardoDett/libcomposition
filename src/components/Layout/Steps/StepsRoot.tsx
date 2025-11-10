import React, { Children } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { StepsContext } from './StepsContext';

const stepsRootVariants = tv({
  base: 'flex relative',
  variants: {
    orientation: {
      horizontal: 'flex-row items-center',
      vertical: 'flex-col',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

export interface StepsRootProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof stepsRootVariants> {
  currentStep: number;
}

const StepsRoot: React.FC<StepsRootProps> = ({
  currentStep,
  orientation = 'horizontal',
  className,
  children,
  ...props
}) => {
  const totalSteps = Children.count(children);
  const contextValue = { currentStep, totalSteps, orientation };

  return (
    <StepsContext.Provider value={contextValue}>
      <div className={stepsRootVariants({ orientation, className })} {...props}>
        {children}
      </div>
    </StepsContext.Provider>
  );
};

StepsRoot.displayName = 'Steps.Root';

export { StepsRoot };
