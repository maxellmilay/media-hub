import { NextResponse } from 'next/server';
import courses from './data.json';
import CourseInterface from '@/app/interface/CourseInterface';
import { v4 as uuidv4 } from 'uuid';

export async function GET(request: Request) {
  return NextResponse.json(courses);
}

export async function POST(request: Request) {
  const { title, description, level, link }: CourseInterface =
    await request.json();

  const id = uuidv4();

  const newCourse = {
    id: uuidv4(),
    title,
    description,
    level,
    link,
  };

  courses.push(newCourse);

  return NextResponse.json(courses);
}
