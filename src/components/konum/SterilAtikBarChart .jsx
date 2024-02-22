import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SterilAtikBarChart = ({ data }) => {
  return (
    <ResponsiveContainer width="70%" height={300}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="YIL" />
        <YAxis />
        <Tooltip />
        <Legend />
        {Object.keys(data[0]).map((key, index) => {
          if (key !== 'YIL' && key !== 'TOPLAM') {
            return <Bar key={index} dataKey={key} stackId="a" fill={`#${Math.floor(Math.random()*16777215).toString(16)}`} />;
          }
          return null;
        })}
      </BarChart>
    </ResponsiveContainer>
  );
}

export default SterilAtikBarChart;
