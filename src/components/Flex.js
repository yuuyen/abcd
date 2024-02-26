import clsx from 'clsx'
import React from 'react'

export const FlexBetween = ({
    children,
    className
}) => {
    return (
        <div className={clsx('d-flex flex-row justify-content-between', className)}>
            {children}
        </div>
    )
}

export const FlexCenter = ({
    children,
    className
}) => {
    return (
        <div className={clsx('d-flex flex-row justify-content-center', className)}>
            {children}
        </div>
    )
}

export const FlexFullCenter = ({
    children,
    className
}) => {
    return (
        <div className={clsx('d-flex justify-content-center align-items-center', className)}>
            {children}
        </div>
    )
}

export const FlexMidCenter = ({
    children,
    className
}) => {
    return (
        <div className={clsx('d-flex align-items-center', className)}>
            {children}
        </div>
    )
}

export const FlexColumn = ({
    children,
    className
}) => {
    return (
        <div className={clsx('d-flex flex-column', className)}>
            {children}
        </div>
    )
}



