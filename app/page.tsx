import React from 'react';
import Link from 'next/link';
import Courses from './components/Courses';

const HomePage = () => {
  return (
    <>
      <h1 className="text-3xl font-semibold mb-5">Welcome to Media Hub</h1>
      <Courses />
    </>
  );
};

export default HomePage;
