import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PhoneBar = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phonesLoaded = data.data.data;
                const phoneData = phonesLoaded.map(phone => {
                    const parts = phone.slug.split('-');
                    const price = parseInt(parts[1]);
                    const singlePhone = {
                        name: phone.phone_name,
                        price: price
                    }
                    return singlePhone;
                })
                console.log(phoneData);
                setPhones(phoneData);
            });
    }, [])
    return (
        <div>
            <h1 className='text-2xl font-bold m-2'>iPhone's Price</h1>
            <div className='flex justify-center'>
                <LineChart width={500} height={500} data={phones}>
                    <Line type="monotone" dataKey="price" stroke="#8884d8" strokeWidth={2} />
                    <XAxis dataKey="price" />
                    <YAxis />
                    <Tooltip></Tooltip>
                </LineChart>
            </div>
        </div>
    );
};

export default PhoneBar;