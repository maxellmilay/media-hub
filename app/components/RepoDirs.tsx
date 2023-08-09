import React from 'react';
import Link from 'next/link';

interface PropsInterface {
  name: string;
}

const fetchRepoContents = async (name: string) => {
  const response = await fetch(
    `https://api.github.com/repos/maxellmilay/${name}/contents`,
    {
      next: {
        revalidate: 60,
      },
    },
  );
  const contents: ContentInterface[] = await response.json();
  return contents;
};

const RepoDirs = async (props: PropsInterface) => {
  const { name } = props;

  const contents = await fetchRepoContents(name);
  const dirs = contents.filter(
    (content: ContentInterface) => content.type === 'dir',
  );

  return (
    <div className="flex flex-col">
      <h3 className="text-2xl font-semibold mb-2">Directories</h3>
      <ul>
        {dirs.map((dir) => (
          <li key={dir.path} className="mb-1">
            <Link href={`/code/repos/${name}/${dir.path}`}>{dir.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepoDirs;
