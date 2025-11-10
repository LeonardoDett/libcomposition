import { tv, type VariantProps } from 'tailwind-variants';
import { Info, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { forwardRef, HTMLAttributes } from 'react';

const alertVariants = tv({
  base: 'relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground',
  variants: {
    variant: {
      default: 'bg-background text-foreground',
      destructive:
        'bg-error-50 border-error/50 text-error dark:border-error [&>svg]:text-error',
      success:
        'bg-green-50 border-green-500/50 text-green-700 dark:border-green-500 [&>svg]:text-green-500',
      warning:
        'bg-yellow-50 border-yellow-500/50 text-yellow-700 dark:border-yellow-500 [&>svg]:text-yellow-500',
      info:
        'bg-blue-50 border-blue-500/50 text-blue-700 dark:border-blue-500 [&>svg]:text-blue-500',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const alertIcons = {
  default: Info,
  destructive: XCircle,
  success: CheckCircle,
  warning: AlertTriangle,
  info: Info,
};

const AlertRoot = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, children, ...props }, ref) => {
  const Icon = alertIcons[variant || 'default'];

  return (
    <div
      ref={ref}
      role="alert"
      className={alertVariants({ variant, className })}
      {...props}
    >
      <Icon className="h-4 w-4" />
      {children}
    </div>
  );
});
AlertRoot.displayName = 'Alert';

export { AlertRoot };

