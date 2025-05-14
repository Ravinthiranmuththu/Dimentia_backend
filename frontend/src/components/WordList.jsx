import React from 'react';
import { Link } from 'react-router-dom';

const WordListSection = ({ words }) => {
  return (
    <div className="flex justify-center items-center bg-white h-full">
      <div className="bg-white text-black shadow-lg rounded-lg w-full max-w-[64rem] border-2 border-custom-blue p-2 flex-grow"> {/* Increased width */}
        <div className="flex flex-col items-center gap-4 overflow-y-auto h-[29.5rem] pr-2 custom-scrollbar">
          {words?.map((word, index) => (
            <Link
              key={index}
              to={`/home/word/${word}`} // Dynamic route for word details
              state={{ wordName: word }} // Optional state data to pass
              className="flex justify-center items-center bg-custom-blue border-2 border-custom-blue text-white py-4 w-3/4 rounded-lg hover:bg-white hover:text-custom-blue transition"
            >
              {word}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WordListSection;
