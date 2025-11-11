import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const avatarStyles = tv({
  base: 'relative flex shrink-0 overflow-hidden rounded-full items-center justify-center',
  variants: {
    variant: {
      circular: 'rounded-full',
      rounded: 'rounded-md',
      square: 'rounded-none',
    },
    size: {
      sm: 'h-7 w-7 text-xs',
      md: 'h-12 w-12 text-base',
      lg: 'h-16 w-16 text-lg',
    },
  },
  defaultVariants: {
    variant: 'circular',
    size: 'md',
  },
});

interface AvatarProps extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof avatarStyles> {
  src?: string;
  alt?: string;
  children?: ReactNode;
}

const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  ({ className, children, src, alt, variant, size, ...props }, ref) => {
    const hasImage = src && src.length > 0;

    return (
      <span ref={ref} className={avatarStyles({ variant, size, className })} {...props}>
        {hasImage ? (
          <img src={src} alt={alt} className="h-full w-full object-cover" />
        ) : (
          children
        )}
      </span>
    );
  }
);

Avatar.displayName = 'Avatar';

export { Avatar };
