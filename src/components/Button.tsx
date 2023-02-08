import type { PropsWithChildren } from 'react'
import { ButtonType, ButtonSize } from './theme'

interface BaseButton extends PropsWithChildren {
  size: string,
  type: string
  action?: () => any
}

const Button = ({...props}: BaseButton) => {
  const { size, type, children, action } = props
  const classNames = `d-inline-block user-select-none active-scale ${ButtonType[type]} ${ButtonSize[size]}`;
  return (
    <button
      className={classNames}
      onClick={action}
    >{children}</button>
  )
}
export default Button;