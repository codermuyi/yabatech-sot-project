import cn from 'classnames'
import React, { forwardRef } from 'react'
import { Link } from 'react-router-dom'

const Button = forwardRef((props, ref) => {
  const {
    className,
    variant = 'solid',
    children,
    active,
    loading = false,
    disabled = false,
    center = false,
    noPadding = false,
    ariaLabel,
    linkType = 'none',
    href,
    ...rest
  } = props

  const rootClassName = cn(
    'p-3 w-32 bg-green-600 md:text-sm leading-4 inline-flex items-center transition ease-in-out duration-300 font-body text-center justify-center rounded',
    {
      'mx-auto': center,
    },
    className
  )

  if (linkType === 'abs')
    return (
      <a href={href} className={rootClassName} aria-label={ariaLabel}>
        {children}
      </a>
    )

  if (linkType === 'rel')
    return (
      <Link to={href} className={rootClassName} aria-label={ariaLabel}>
        {children}
      </Link>
    )

  return (
    <button
      aria-pressed={active}
      data-variant={variant}
      ref={ref}
      className={rootClassName}
      disabled={disabled}
      aria-label={ariaLabel}
      {...rest}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export default Button
