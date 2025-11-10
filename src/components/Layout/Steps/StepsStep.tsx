import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { StepContext, useSteps, type StepState } from './StepsContext';

// Combined variants for all internal elements
const stepVariants = {
  step: tv({
    base: 'flex items-center',
    variants: {
      orientation: {
        horizontal: 'flex-1',
        vertical: 'min-h-20 flex-initial',
      },
    },
  }),
  marker: tv({
    base: 'flex items-center justify-center rounded-full font-bold z-10',
    variants: {
      state: {
        pending: 'bg-gray-200 text-gray-500',
        active: 'bg-primary-500 text-white',
        completed: 'bg-primary-500 text-white',
      },
      size: {
        sm: 'w-8 h-8 text-sm',
        md: 'w-10 h-10 text-base',
        lg: 'w-12 h-12 text-lg',
      },
    },
    defaultVariants: { size: 'md' },
  }),
  separator: tv({
    base: '',
    variants: {
      state: {
        pending: 'bg-gray-200',
        active: 'bg-gray-200',
        completed: 'bg-primary-500',
      },
      orientation: {
        horizontal: 'h-0.5 w-full',
        vertical: 'w-0.5 h-full absolute left-1/2 top-0 -translate-x-1/2',
      },
    },
  }),
  content: tv({
    base: 'text-sm',
    variants: {
      state: {
        pending: 'text-gray-500',
        active: 'text-primary-500 font-semibold',
        completed: 'text-gray-800 dark:text-white',
      },
      orientation: {
        horizontal: 'ml-4',
        vertical: 'mt-2 text-center',
      },
    },
  }),
};

export interface StepsStepProps extends React.HTMLAttributes<HTMLLIElement> {
  step: number;
  title: string;
  description?: string;
  size?: 'sm' | 'md' | 'lg';
}

const StepsStep: React.FC<StepsStepProps> = ({ step, title, description, size = 'md', className, ...props }) => {
  const { currentStep, totalSteps, orientation } = useSteps();

  let state: StepState = 'pending';
  if (step < currentStep) {
    state = 'completed';
  } else if (step === currentStep) {
    state = 'active';
  }

  const isLast = step === totalSteps;
  const contextValue = { step, state, isLast };

  const Marker = () => (
    <div className={stepVariants.marker({ state, size })}>{step}</div>
  );

  const Separator = () => {
    if (isLast) return null;
    return <div className={stepVariants.separator({ state, orientation })} />;
  };

  const Content = () => (
    <div className={stepVariants.content({ state, orientation })}>
      <span className="block font-semibold">{title}</span>
      {description && <span className="block">{description}</span>}
    </div>
  );

  return (
    <StepContext.Provider value={contextValue}>
      {orientation === 'horizontal' ? (
        <li className={stepVariants.step({ orientation, className })} {...props}>
          <Marker />
          <Separator />
          <div className="absolute top-full mt-2 w-max max-w-xs text-center">
            <Content />
          </div>
        </li>
      ) : (
        <li className={stepVariants.step({ orientation, className })} {...props}>
            <div className="relative flex flex-col items-center">
                <Marker />
                <Separator />
                <div className="mt-1">
                    <Content />
                </div>
            </div>
        </li>
      )}
    </StepContext.Provider>
  );
};

StepsStep.displayName = 'Steps.Step';

export { StepsStep };