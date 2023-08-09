import React from 'react';
import RepoInterface from '../interface/RepoInterface';
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';

interface PropsInterface {
  name: string;
}

const fetchRepo = async (name: string) => {
  const response: Response = await fetch(
    `https://api.github.com/repos/maxellmilay/${name}`,
    {
      next: {
        revalidate: 60,
      },
    },
  );
  const repo: RepoInterface = await response.json();
  return repo;
};

const Repo = async (props: PropsInterface) => {
  const { name } = props;

  const repo = await fetchRepo(name);

  return (
    <>
      <p className="text-xs mb-3">{repo.description}</p>
      <div className="flex text-center py-2">
        <span className="mx-3 text-gray-500">
          <FaStar /> {repo.stargazers_count}
        </span>
        <span className="mx-3 text-gray-500">
          <FaCodeBranch /> {repo.forks_count}
        </span>
        <span className="mx-3 text-gray-500">
          <FaEye /> {repo.watchers_count}
        </span>
      </div>
    </>
  );
};

export default Repo;
