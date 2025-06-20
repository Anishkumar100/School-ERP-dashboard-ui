"use client"
import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import Image from 'next/image';

const data = [
    {
        name: 'Total',
        count: 106,
        fill: 'white',
    },

    {
        name: 'Boys',
        count: 60,
        fill: '#C3EBFA',
    },

    {
        name: 'Girls',
        count: 46,
        fill: '#FAE27C',
    },
];



const CountChart = () => {
    return (
        <div className=' bg-[#FFFFFF]  rounded-xl w-full h-full p-4'>
            {/*Title of the card */}

            <div className=' flex justify-between items-center'>
                <h1 className=' text-lg font-semibold'>Students</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>

            {/* CHART */}

            <div className=" relative w-full h-[75%]">

                <ResponsiveContainer width="100%" height="100%" >
                    <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
                        <RadialBar

                         
                            background

                            dataKey="count"
                        />
                       
                    </RadialBarChart>
                </ResponsiveContainer>
                <Image src="/maleFemale.png" alt="" width={50} height={50} className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '/>
            </div>

            {/*Bottom of the card */}

            <div className='flex justify-center gap-16'>

                <div className=''>
                    <div className=' w-5 h-5 bg-sparkSky rounded-full'></div>
                    <h1 className=' font-bold '>1,234</h1>
                    <h2 className=' text-xs text-sparkGray500'>Boys (55%)</h2>

                </div>
                <div className=''>
                    <div className=' w-5 h-5 bg-sparkYellow rounded-full'></div>
                    <h1 className=' font-bold '>1,234</h1>
                    <h2 className=' text-xs text-sparkGray500'>Girls (45%)</h2>

                </div>

            </div>
        </div>
    )
}

export default CountChart
