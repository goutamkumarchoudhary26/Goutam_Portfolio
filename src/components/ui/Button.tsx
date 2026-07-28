import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

import { buttonClasses, type ButtonVariant } from '@lib/buttonStyles'

interface IconSlotProps {
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  children: ReactNode
}

function ButtonContent({ icon, iconPosition = 'left', children }: IconSlotProps) {
  return (
    <>
      {icon && iconPosition === 'left' && icon}
      {children}
      {icon && iconPosition === 'right' && icon}
    </>
  )
}

interface ButtonProps
  extends IconSlotProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  variant?: ButtonVariant
}

export function Button({ variant, icon, iconPosition, className, children, ...rest }: ButtonProps) {
  return (
    <button className={buttonClasses(variant, className)} {...rest}>
      <ButtonContent icon={icon} iconPosition={iconPosition}>
        {children}
      </ButtonContent>
    </button>
  )
}

interface LinkButtonProps
  extends IconSlotProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> {
  variant?: ButtonVariant
}

export function LinkButton({
  variant,
  icon,
  iconPosition,
  className,
  children,
  ...rest
}: LinkButtonProps) {
  return (
    <a className={buttonClasses(variant, className)} {...rest}>
      <ButtonContent icon={icon} iconPosition={iconPosition}>
        {children}
      </ButtonContent>
    </a>
  )
}
