import React from 'react';
import './TitledCard.css'

function TitledCard({ source, alt, name }) {
    return (
        <div className='max-w-[400px] card bg-black'>
            <div className='bg-black p-4 rounded-[15px]'>
                <img src={source} alt={alt} className='w-full h-full object-cover object-top rounded-[10px] aspect-square' />
                <h3 className='mt-2'>{name}</h3>
            </div>
        </div>
    )
}

export default TitledCard