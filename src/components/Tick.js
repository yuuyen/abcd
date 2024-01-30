import React from 'react'
import tickIcon from '../assets/tick-icon.svg';
import clsx from 'clsx';
import { FlexBetween } from './Flex';

const Tick = ({ className, children, percent, showTick = true }) => {
    return (
        <div className={clsx('d-flex gap-20 pb-3', className)}>
            {showTick && <div><img src={tickIcon} width={24} height={24} /></div>}
            <FlexBetween className='d-flex font-size-16 col-8 text-white font-weight-400'>
                <div>
                    {children}
                </div>
                {percent && <div className='text-hight-light'>{percent}</div>}
            </FlexBetween>
        </div>
    )
}

export default Tick
