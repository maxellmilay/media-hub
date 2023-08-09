import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-center py-7 bg-[#645CAA] text-white">
      <div className="flex flex-col items-center">
        <Link href="/" className="text-4xl mb-2">
          Media Hub
        </Link>
        <div className="flex">
          <Link href="/about" className="mx-2">
            About
          </Link>
          <Link href="/about/team" className="mx-2">
            Our Team
          </Link>
          <Link href="/code/repos" className="mx-2">
            Code
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
