import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOptions = [
        {
            id: 1, name: 'Free', price: 0, features: [
                'Awesome Feature',
                'Extra Feature',
                'Exceptional Feature',
                'Common Feature',
                'Uncommon Feature',
                'Expensive Feature',
                'Cheap Feature',
            ]
        },
        {
            id: 2, name: 'Medium', price: 9.99, features: [
                'Awesome Feature',
                'Extra Feature',
                'Exceptional Feature',
                'Common Feature',
                'Uncommon Feature',
                'Expensive Feature',
                'Cheap Feature',
            ]
        },
        {
            id: 3, name: 'Premium', price: 19.99, features: [
                'Awesome Feature',
                'Extra Feature',
                'Exceptional Feature',
                'Common Feature',
                'Uncommon Feature',
                'Expensive Feature',
                'Cheap Feature',
            ]
        }
    ]
    return (
        <div>
            <h3 className='text-5xl font-bold bg-amber-300 p-12'>Best Deal of the Town</h3>
            <div className='md:grid grid-cols-3 gap-3 mt-4'>
                {
                    pricingOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;