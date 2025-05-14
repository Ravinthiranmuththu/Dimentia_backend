import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// Example data for the graph
const data = [
  { name: '2nd', value: 65 },
  { name: '4th', value: 75 },
  { name: '6th', value: 90 },
  { name: '8th', value: 85 },
  { name: '11th', value: 70 },
];

const GraphWindow = () => {
  return (
    <div style={{ margin: 0, padding: 0, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f4f4f4' }}>
      <ResponsiveContainer width="90%" height="90%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#D9D9D9" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#26046B"
            strokeWidth={3}
            dot={{ r: 5, stroke: "", strokeWidth: 2, fill: "#26046B" }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraphWindow;
