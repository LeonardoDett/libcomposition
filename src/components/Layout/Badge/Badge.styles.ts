import { tv } from 'tailwind-variants'

export const badge = tv({
  base: 'absolute flex items-center justify-center text-white rounded-full',
  variants: {
    size: {
      small: 'size-4 text-xs',
      large: 'size-5 text-sm'
    },
    position: {
      'top-right': 'top-0 right-0 translate-x-1/2 -translate-y-1/2',
      'top-left': 'top-0 left-0 -translate-x-1/2 -translate-y-1/2',
      'bottom-right': 'bottom-0 right-0 translate-x-1/2 translate-y-1/2',
      'bottom-left': 'bottom-0 left-0 -translate-x-1/2 translate-y-1/2'
    },
    hasContent: {
      true: 'p-1',
      false: 'p-0'
    },
    color: {
      primary: 'bg-primary-500',
      secondary: 'bg-secondary-500',
      danger: 'bg-error-500',
      success: 'bg-success-500',
      warning: 'bg-warning-500'
    }
  },
  compoundVariants: [
    {
      size: ['small'],
      hasContent: false,
      class: "p-0 size-2"
    },
     {
      size: ['large'],
      hasContent: false,
      class: "p-0 size-3"
    }
  ],
  defaultVariants: {
    size: 'small',
    position: 'top-right',
    hasContent: false,
    color: 'danger'
  }
})
