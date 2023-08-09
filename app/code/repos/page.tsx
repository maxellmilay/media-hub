import React from 'react';
import Link from 'next/link';
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';
import RepoInterface from '@/app/interface/RepoInterface';
import '@/app/styles/shadow.css';

const fetchRepos = async () => {
  const response: Response = await fetch(
    'https://api.github.com/users/maxellmilay/repos',
    {
      next: {
        revalidate: 60,
      },
    },
  );
  const repos: RepoInterface[] = await response.json();
  return repos;
};

const ReposPage = async () => {
  const repos = await fetchRepos();

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-semibold mb-10">Repositories</h1>
      <ul className="flex flex-wrap justify-center">
        {repos.map((repo) => (
          <li
            key={repo.id}
            className="mb-5 w-[19rem] mx-3 rounded p-5 shadow-1"
          >
            <Link href={`/code/repos/${repo.name}`}>
              <h3 className="text-lg">{repo.name}</h3>
              <p className="text-xs">{repo.description}</p>
              <div className="flex text-center py-2">
                <span className="mr-3 text-gray-500">
                  <FaStar /> {repo.stargazers_count}
                </span>
                <span className="mr-3 text-gray-500">
                  <FaCodeBranch /> {repo.forks_count}
                </span>
                <span className="mr-3 text-gray-500">
                  <FaEye /> {repo.watchers_count}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReposPage;
