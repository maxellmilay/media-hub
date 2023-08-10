'use client';
import React, { useState } from 'react';

const CourseSearch = () => {
  const [query, setQuery] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch(`/api/courses/search?query=${query}`);
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className="flex flex-col items-center mb-5">
      <h1 className="text-2xl font-semibold mb-5">Course Search</h1>
      <form onSubmit={(e) => handleSubmit(e)} className="flex w-full px-10">
        <input
          type="text"
          placeholder="Search Courses"
          value={query}
          onChange={(e) => handleSearchInputChange(e)}
          className="grow px-5 py-3 border border-gray-400 rounded"
        />
        <button
          type="submit"
          className="bg-[#645CAA] text-white px-4 py-2 rounded ml-5"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default CourseSearch;
