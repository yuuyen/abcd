import React from 'react';
import clsx from 'clsx';

const Tag = ({ className, tagClassName, tag, word1, word2, word3 }) => {
    return (
        <div className={clsx('d-flex flex-column gap-12 tag', className)}>
            {tag &&
                <div className={clsx('d-flex align-items-center gap-12 font-size-12 text-uppercase', tagClassName)}>
                    <div className='tag-arrow'>
                    </div>
                    {tag}
                    <div className='tag-arrow right'>
                    </div>
                </div>
            }
            <h2 className="text-white font-size-48 font-size-sm-32">{word1} <span className="text-hight-light">{word2}</span> {word3}</h2>
        </div>
    )
}

export default Tag
