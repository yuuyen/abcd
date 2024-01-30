import React from 'react'
import Tick from './Tick'

const ListTick = ({
    listData = []
}) => {
    return (
        <div className="d-flex flex-column gap-12 mb-4">
            {listData.map(item => {
                return <Tick key={item.text} showTick={item.showTick} percent={item.percent} >{item.text}</Tick>
            })}
        </div>
    )
}

export default ListTick
