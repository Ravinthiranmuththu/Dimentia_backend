import React from 'react';
import { Link } from 'react-router-dom';

const chapters = [
  { id: 'chapter-01', name: 'Chapter 01' },
  { id: 'chapter-02', name: 'Chapter 02' },
  { id: 'chapter-03', name: 'Chapter 03' },
  { id: 'chapter-04', name: 'Chapter 04' },
  { id: 'chapter-05', name: 'Chapter 05' },
  { id: 'chapter-06', name: 'Chapter 06' },
  { id: 'chapter-07', name: 'Chapter 07' },
  { id: 'chapter-08', name: 'Chapter 08' },
  { id: 'chapter-09', name: 'Chapter 09' },
  { id: 'chapter-10', name: 'Chapter 10' },
];

const ChaptersSection = () => {
  return (
    <div className="flex justify-center items-center bg-white h-full">
      <div className="bg-white text-black shadow-lg rounded-lg w-full max-w-[44rem] border-2 border-custom-blue p-2 flex-grow">
        <div className="flex flex-col items-center gap-4 overflow-y-auto h-[29.5rem] pr-2 custom-scrollbar">
          {chapters.map((chapter) => (
            <Link
              key={chapter.id}
              to={`/home/patient/${chapter.id}`} // Dynamic route
              state={{ chapterName: chapter.name }} // Optional state data
              className="flex justify-center items-center bg-custom-blue border-2 border-custom-blue text-white py-4 w-3/4 rounded-lg hover:bg-white hover:text-custom-blue transition"
            >
              {chapter.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChaptersSection;
