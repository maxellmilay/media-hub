import React from 'react';
import '@/app/styles/shadow.css';
import Repo from '@/app/components/Repo';
import Link from 'next/link';
import RepoDirs from '@/app/components/RepoDirs';
import { Suspense } from 'react';

interface PropsInterface {
  params: {
    name: string;
  };
}

const SingleRepoPage = (props: PropsInterface) => {
  const {
    params: { name },
  } = props;

  return (
    <div className="flex flex-col items-center w-[70%] mx-auto">
      <h1 className="text-4xl font-semibold mb-5">{name}</h1>
      <div className="flex justify-center w-full mb-7">
        <div className="flex flex-col items-center justify-center w-1/2 p-5 shadow-2 rounded mr-5">
          <Suspense fallback={<h1>Loading Repository Data...</h1>}>
            <Repo name={name} />
          </Suspense>
        </div>
        <div className="flex flex-col w-[30%] p-10 shadow-2 rounded">
          <Suspense fallback={<h1>Loading Repository Directories ...</h1>}>
            <RepoDirs name={name} />
          </Suspense>
        </div>
      </div>
      <Link
        href="/code/repos"
        className="text-white bg-[#645CAA] px-4 py-2 rounded w-fit mb-5"
      >
        Back to Repositories
      </Link>
    </div>
  );
};

export default SingleRepoPage;
