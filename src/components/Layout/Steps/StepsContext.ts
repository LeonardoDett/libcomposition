import { createContext, useContext } from 'react';

export type StepState = 'active' | 'completed' | 'pending';

interface StepsContextType {
  currentStep: number;
  totalSteps: number;
  orientation: 'horizontal' | 'vertical';
}

interface StepContextType {
  step: number;
  state: StepState;
  isLast: boolean;
}

export const StepsContext = createContext<StepsContextType | undefined>(undefined);
export const StepContext = createContext<StepContextType | undefined>(undefined);

export const useSteps = (): StepsContextType => {
  const context = useContext(StepsContext);
  if (!context) {
    throw new Error('useSteps must be used within a Steps.Root');
  }
  return context;
};

export const useStep = (): StepContextType => {
  const context = useContext(StepContext);
  if (!context) {
    throw new Error('useStep must be used within a Steps.Step');
  }
  return context;
};
