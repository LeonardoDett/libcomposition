import React from 'react';
import { ProgressBarContext } from './ProgressBarContext';

// Assuming progressRootVariants was defined elsewhere and is now part of Track
// We still need size for context, so we'll define a minimal interface for it.
interface ProgressRootVariantProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export interface ProgressBarRootProps extends React.HTMLAttributes<HTMLDivElement>, ProgressRootVariantProps {
  value: number;
  max?: number;
  color?: 'primary' | 'secondary' | 'error' | 'success' | 'warning' | 'info';
  showLabel?: boolean;
}

const ProgressBarRoot: React.FC<ProgressBarRootProps> = ({
  value,
  max = 100,
  color = 'primary',
  size = 'md',
  showLabel = false,
  children,
}) => {
  const contextValue = { value, max, color, size, showLabel, labelPosition: 'inside' as const };

  return (
    <ProgressBarContext.Provider value={contextValue}>
      {children}
    </ProgressBarContext.Provider>
  );
};

ProgressBarRoot.displayName = 'ProgressBar.Root';

export { ProgressBarRoot };