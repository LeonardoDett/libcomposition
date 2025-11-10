import { createContext, useContext } from 'react';

interface ProgressBarContextType {
  value: number;
  max: number;
  color: 'primary' | 'secondary' | 'error' | 'success' | 'warning' | 'info';
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showLabel?: boolean;
  labelPosition?: 'inside' | 'outside';
}

export const ProgressBarContext = createContext<ProgressBarContextType | undefined>(undefined);

export const useProgressBar = (): ProgressBarContextType => {
  const context = useContext(ProgressBarContext);
  if (!context) {
    throw new Error('useProgressBar must be used within a ProgressBarRoot');
  }
  return context;
};
