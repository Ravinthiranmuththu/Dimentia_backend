import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

const data = [
  { name: '2nd', value: 65 },
  { name: '4th', value: 75 },
  { name: '6th', value: 90 },
  { name: '8th', value: 85 },
  { name: '11th', value: 70 },
];

const GraphPreview = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="border-2 border-custom-blue rounded-lg shadow-md p-3 w-full bg-white cursor-pointer"
    >
      <div className="text-sm font-semibold text-white bg-custom-blue mb-2 text-center">
        Progress Overview
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
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
    </div>
  );
};

export default GraphPreview;
