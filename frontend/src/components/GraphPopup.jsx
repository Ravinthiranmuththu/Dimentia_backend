import React from 'react';
import { X } from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: '2nd', value: 65 },
  { name: '4th', value: 75 },
  { name: '6th', value: 90 },
  { name: '8th', value: 85 },
  { name: '11th', value: 70 },
];

const GraphPopup = ({ onClose }) => {
  // Define the openInNewTab function
  const openInNewTab = () => {
    const graphTab = window.open('/graph-tab', '_blank'); // Opens a new tab and navigates to the /graph-tab route
    graphTab.focus();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
      <div className="bg-white w-[90%] max-w-3xl p-6 rounded-xl shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-custom-blue hover:text-red-500 transition"
        >
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-xl font-bold text-custom-blue mb-4">Patient Progress - Last Day</h2>
        <div className="w-full h-80">
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
        <div className="mt-6 flex justify-end">
          {/* Button to open the graph in a new tab */}
          <button
            onClick={openInNewTab}
            className="bg-custom-blue text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Open in New Tab
          </button>
        </div>
      </div>
    </div>
  );
};

export default GraphPopup;
