import clsx from 'clsx'
import React from 'react'

const DivTag = ({
    mobileContent,
    webContent,
    classNameMobile,
    classNameWeb,
    className,
    children,
    ...props
}) => {
    return (
        <React.Fragment>
            {mobileContent && <div {...props} className={clsx('d-sm-block d-md-none', classNameMobile, className)}>{mobileContent}</div>}
            {webContent && <div {...props} className={clsx('d-none d-sm-none d-md-block', classNameWeb, className)}>{webContent}</div>}
        </React.Fragment>
    )
}


export default DivTag
