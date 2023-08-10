'use client';
import React, { useEffect, useState } from 'react';
import Courses from './components/Courses';
import LoadingPage from './loading';
import CourseInterface from './interface/CourseInterface';
import CourseSearch from './components/CourseSearch';

const HomePage = () => {
  const [courses, setCourses] = useState([] as CourseInterface[]);
  const [loading, setLoading] = useState(true);

  const fetchCourse = async () => {
    const res = await fetch('/api/courses');
    const data: CourseInterface[] = await res.json();
    setCourses(data);
    setLoading(false);
  };

  const getSearchResults = (courses: CourseInterface[]) => {
    setCourses(courses);
  };

  useEffect(() => {
    fetchCourse();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <h1 className="text-3xl font-semibold mb-5">Welcome to Media Hub</h1>
      <CourseSearch handleSearchResults={getSearchResults} />
      <Courses courses={courses} />
    </>
  );
};

export default HomePage;
