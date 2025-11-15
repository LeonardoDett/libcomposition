import React, { ReactNode } from 'react'
import { VariantProps } from 'tailwind-variants'
import { badge } from './Badge.styles'

export type BadgeProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof badge> & {
    children: ReactNode
    content?: ReactNode
    show?: boolean
  }

export const Badge = ({
  children,
  content,
  show = true,
  size,
  position,
  color,
  className
}: BadgeProps) => {
  const hasContent = content !== undefined && content !== null

  return (
    <div className="relative inline-flex p-0 m-0">
      {children}
      {show && (
        <div
          className={badge({
            size,
            position,
            hasContent,
            color,
            className
          })}
        >
          {hasContent && content}
        </div>
      )}
    </div>
  )
}
