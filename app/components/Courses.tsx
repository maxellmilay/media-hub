import React from 'react';
import Link from 'next/link';
import CourseInterface from '../interface/CourseInterface';
import '@/app/styles/shadow.css';

const fetchCourses = async () => {
  const response = await fetch('http://localhost:3000/api/courses');
  const courses: CourseInterface[] = await response.json();
  return courses;
};

const Courses = async () => {
  const courses = await fetchCourses();

  return (
    <div className="flex flex-col">
      <h1 className="text-xl font-semibold mb-5 ">Courses</h1>
      {courses.map((course) => (
        <div
          key={course.id}
          className="flex flex-col mb-4 rounded p-4 shadow-1"
        >
          <h2 className="text-lg">{course.title}</h2>
          <p className="text-xs">Level: {course.level}</p>
          <p>{course.description}</p>
          <Link
            className="bg-[#645CAA] text-white px-4 py-2 rounded w-fit mt-2"
            href={course.link}
            target="_blank"
          >
            Go To Course
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Courses;
