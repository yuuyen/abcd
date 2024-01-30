import React from 'react'
import clsx from 'clsx'
import { FlexFullCenter } from './Flex'

const DivButton = ({
  className,
  children,
}) => {
  return (
    <FlexFullCenter className={clsx("btn app-button", className)}>{children}</FlexFullCenter>
  )
}

export default DivButton
