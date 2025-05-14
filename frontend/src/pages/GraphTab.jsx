import React, { useState, useEffect, useCallback } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";
import NavBar from "../components/NavBar";

const dataSet = [
  {
    chapter: 1,
    word: "word1",
    trials: [
      { year: 2023, month: "January", date: 1, trial: 1, accuracy: 65 },
      { year: 2023, month: "January", date: 1, trial: 2, accuracy: 70 },
      { year: 2023, month: "January", date: 1, trial: 3, accuracy: 75 },
    ],
  },
  {
    chapter: 1,
    word: "word2",
    trials: [
      { year: 2023, month: "January", date: 2, trial: 1, accuracy: 80 },
      { year: 2023, month: "January", date: 2, trial: 2, accuracy: 85 },
    ],
  },
  {
    chapter: 2,
    word: "word3",
    trials: [
      { year: 2023, month: "February", date: 1, trial: 1, accuracy: 90 },
      { year: 2023, month: "February", date: 1, trial: 2, accuracy: 95 },
    ],
  },
];

const GraphTab = () => {
  const [selectedYear, setSelectedYear] = useState(2023); // Default year
  const [selectedMonth, setSelectedMonth] = useState("January"); // Default month
  const [selectedDate, setSelectedDate] = useState(1); // Default date
  const [selectedChapter] = useState(1); // Static chapter number for demonstration
  const [selectedWord] = useState("word1"); // Static word for demonstration
  const [graphData, setGraphData] = useState([]); // State for graph data

  // Filter data for the graph based on selected year, month, and date
  const filterGraphData = useCallback(() => {
    const wordData = dataSet.find(
      (item) =>
        item.chapter === selectedChapter &&
        item.word === selectedWord
    );

    if (wordData) {
      const filteredTrials = wordData.trials.filter(
        (trial) =>
          trial.year === selectedYear &&
          trial.month === selectedMonth &&
          trial.date === selectedDate
      );
      return filteredTrials;
    }

    return [];
  }, [selectedYear, selectedMonth, selectedDate, selectedChapter, selectedWord]);

  // Auto-generate graph when the component loads
  useEffect(() => {
    const initialData = filterGraphData();
    setGraphData(initialData); // Automatically set graph data on page load
  }, [filterGraphData]); // Fixed the React Hook warning by including `filterGraphData` in dependency array

  // Handle Graph Generation (after the user selects a date and clicks "Generate Graph")
  const handleGenerateGraph = () => {
    const filteredData = filterGraphData();
    setGraphData(filteredData); // Update the graph data based on user input
  };

  return (
    <div className="h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex flex-col overflow-hidden">
      <NavBar />

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center bg-white pt-6 px-6 overflow-hidden">
        {/* Chapter and Word Display Section */}
        <div className="mb-6 text-center">
          <h2 className="text-xl font-bold text-custom-blue">
            Chapter Number: {selectedChapter}
          </h2>
          <h3 className="text-lg text-gray-700">
            Selected Word: {selectedWord}
          </h3>
        </div>

        {/* Dropdowns Section */}
        <div className="flex items-center gap-6 mb-8 bg-white p-4 rounded-lg w-full max-w-4xl border-2 border-custom-blue">
          <div className="flex-1">
            <label htmlFor="year" className="block text-custom-blue font-semibold mb-1">
              Year
            </label>
            <select
              id="year"
              className="border-2 border-custom-blue rounded-md px-3 py-2 shadow w-full hover:border-custom-blue hover:text-custom-blue transition"
              value={selectedYear}
              onChange={(e) => setSelectedYear(Number(e.target.value))} // Update state on selection
            >
              <option value={2023}>2023</option>
              <option value={2024}>2024</option>
            </select>
          </div>
          <div className="flex-1">
            <label htmlFor="month" className="block text-custom-blue font-semibold mb-1">
              Month
            </label>
            <select
              id="month"
              className="border-2 border-custom-blue rounded-md px-3 py-2 shadow w-full hover:border-custom-blue hover:text-custom-blue transition"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)} // Update state on selection
            >
              <option value="January">January</option>
              <option value="February">February</option>
            </select>
          </div>
          <div className="flex-1">
            <label htmlFor="date" className="block text-custom-blue font-semibold mb-1">
              Date
            </label>
            <select
              id="date"
              className="border-2 border-custom-blue rounded-md px-3 py-2 shadow w-full hover:border-custom-blue hover:text-custom-blue transition"
              value={selectedDate}
              onChange={(e) => setSelectedDate(Number(e.target.value))} // Update state on selection
            >
              {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>
          {/* Generate Graph Button */}
          <div className="flex">
            <button
              onClick={handleGenerateGraph}
              className="bg-custom-blue text-white px-6 py-3 rounded-lg border-2 border-custom-blue shadow hover:bg-white hover:text-custom-blue transition"
            >
              Generate Graph
            </button>
          </div>
        </div>

        {/* Graph Section */}
        <div className="flex-grow w-full max-w-5xl bg-white rounded-lg p-6 flex flex-col overflow-hidden border-2 border-custom-blue">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Patient Progress
          </h2>
          {graphData.length > 0 ? (
            <div className="w-full h-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={graphData} margin={{ top: 20, right: 30, left: 30, bottom: 40 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#D9D9D9" />
                  <XAxis dataKey="trial" stroke="#333">
                    <Label value="Trial Number" position="insideBottom" offset={-15} fill="#333" />
                  </XAxis>
                  <YAxis stroke="#333">
                    <Label value="Accuracy (%)" angle={-90} position="insideLeft" offset={-5} fill="#333" />
                  </YAxis>
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="accuracy"
                    stroke="#26046B"
                    strokeWidth={3}
                    dot={{ r: 5, fill: "#26046B" }}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <div className="text-center text-gray-500 text-lg">
              There were no practice in that date 😊
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between w-full max-w-5xl mt-6 mb-4">
          <button className="bg-custom-blue text-white px-6 py-3 rounded-lg border-2 border-custom-blue shadow hover:bg-white hover:text-custom-blue transition">
            Previous Word
          </button>
          <button className="bg-custom-blue text-white px-6 py-3 rounded-lg border-2 border-custom-blue shadow hover:bg-white hover:text-custom-blue transition">
            Patient Information
          </button>
          <button className="bg-custom-blue text-white px-6 py-3 rounded-lg border-2 border-custom-blue shadow hover:bg-white hover:text-custom-blue transition">
            Next Word
          </button>
        </div>
      </div>
    </div>
  );
};

export default GraphTab;
