import React, { useState } from "react";
import NavBar from "../components/NavBar";
import WordListSection from "../components/WordList";

const chapterData = [
  {
    chapter: 1,
    words: ["word1", "word2", "word3", "word4", "word5", 
            "word6", "word7", "word8", "word9", "word10", 
            "word11", "word12", "word13", "word14", "word15"],
  },
  {
    chapter: 2,
    words: ["word1", "word2", "word3", "word4", "word5", 
            "word6", "word7", "word8", "word9", "word10", 
            "word11", "word12", "word13", "word14", "word15"],
  },
  {
    chapter: 3,
    words: ["word1", "word2", "word3", "word4", "word5", 
            "word6", "word7", "word8", "word9", "word10", 
            "word11", "word12", "word13", "word14", "word15"],
  },
];

const ChapterPage = () => {
  const [currentChapter, setCurrentChapter] = useState(1);

  // Get the current chapter data
  const currentChapterData = chapterData.find(
    (chapter) => chapter.chapter === currentChapter
  );

  // Navigate to previous chapter
  const handlePreviousChapter = () => {
    if (currentChapter > 1) {
      setCurrentChapter(currentChapter - 1);
    }
  };

  // Navigate to next chapter
  const handleNextChapter = () => {
    if (currentChapter < chapterData.length) {
      setCurrentChapter(currentChapter + 1);
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex flex-col overflow-hidden">
      <NavBar />

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center bg-white pt-6 px-6 overflow-hidden">
        {/* Chapter Name Section */}
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold text-custom-blue">
            Chapter {currentChapter}
          </h2>
        </div>

        {/* Word List Section */}
        <div className="w-full max-w-2xl">
            <WordListSection words={currentChapterData?.words} />
        </div>
        {/* Navigation Buttons for Previous and Next Chapter */}
        <div className="flex justify-between w-full max-w-4xl mt-6 mb-4">
          <button
            onClick={handlePreviousChapter}
            className="bg-custom-blue text-white px-6 py-3 rounded-lg border-2 border-custom-blue shadow hover:bg-white hover:text-custom-blue transition"
          >
            Previous Chapter
          </button>
          <button
            onClick={handleNextChapter}
            className="bg-custom-blue text-white px-6 py-3 rounded-lg border-2 border-custom-blue shadow hover:bg-white hover:text-custom-blue transition"
          >
            Next Chapter
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChapterPage;
