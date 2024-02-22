
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AtikPilChart = ({ data }) => {
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
        <Bar dataKey="ATIK_PIL_MIKTARI_KG_YIL" fill="#005f70" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default AtikPilChart;
