import React from 'react';

const sessionData = [
  { date: '2025-03-15', duration: '45 min', score: 78 },
  { date: '2025-03-12', duration: '40 min', score: 70 },
  { date: '2025-03-10', duration: '50 min', score: 82 },
];

const SessionHistory = () => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg w-full border-2 border-custom-blue overflow-x-auto">
      <h3 className="text-lg font-semibold text-custom-blue mb-3 text-center">Session History</h3>
      <table className="w-full table-auto text-sm">
        <thead>
          <tr className="bg-custom-blue text-white">
            <th className="px-4 py-2 text-left">Date</th>
            <th className="px-4 py-2 text-left">Duration</th>
            <th className="px-4 py-2 text-left">Score</th>
          </tr>
        </thead>
        <tbody>
          {sessionData.map((session, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="px-4 py-2">{session.date}</td>
              <td className="px-4 py-2">{session.duration}</td>
              <td className="px-4 py-2">{session.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SessionHistory;
