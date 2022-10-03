import React from 'react';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
    const { features } = option;
    return (
        <div className='bg-indigo-300 m-3 rounded-md p-2'>
            <div>
                <h3><span className='text-5xl font-bold'>{option.price}</span><span className='text-2xl'>/mon</span></h3>
                <p className='text-3xl'>{option.name}</p>
            </div>
            {
                features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
            }
            <button className='bg-amber-500 mt-2 w-full rounded-md py-2 font-bold'>Buy Now</button>
        </div>
    );
};

export default PriceOption;