import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AssignmentMarks = () => {
    const data = [
        {
            name: "Page A",
            main: 4000,
            profit: 7400,
            amt: 2400
        },
        {
            name: "Page B",
            main: 3000,
            profit: 5398,
            amt: 2210
        },
        {
            name: "Page C",
            main: 2000,
            profit: 9800,
            amt: 2290
        }
    ];
    return (
        <div>
            <h1 className='text-2xl font-bold m-2'>Sales Report with BarChart</h1>
            <div className='flex justify-center'>
                <BarChart width={500} height={500} data={data}>
                    <Bar dataKey="profit" fill="#8884d8" />
                    <XAxis dataKey="profit" />
                    <YAxis />
                    <Tooltip></Tooltip>
                </BarChart>
            </div>
        </div>
    );
};

export default AssignmentMarks;