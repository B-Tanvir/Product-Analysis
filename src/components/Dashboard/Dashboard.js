import React, {useEffect, useState} from 'react';
import {
    BarChart,
    LineChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Line
} from 'recharts';


const Dashboard = () => {

    let [data, setdata] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json()
                .then(data => setdata(data)))
    }, []);

    return (
        <div className={'text-center flex justify-center align-middle my-4 mx6'}>
            <div>
                <h2 className={'text-2xl text-amber-800 mb-2'}> Month-wise selling</h2>
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="month"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <Line
                        type="monotone"
                        dataKey="sell"
                        stroke="#82ca9d"
                        activeDot={{r: 8}}
                    />
                </LineChart>

                <h2 className={'text-2xl text-amber-800 mb-2 mt-2'}>Investment vs Revenue</h2>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="monthe"/>
                        <YAxis/>
                        <Tooltip/>
                        <Legend/>
                        <Bar dataKey="investment" stackId="a" fill="#8884d8"/>
                        <Bar dataKey="revenue" stackId="a" fill="#82ca9d"/>
                    </BarChart>
                </ResponsiveContainer>
            </div>

        </div>
    );
};

export default Dashboard;