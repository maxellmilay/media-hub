import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
};

const AboutPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-2">About Media Hub</h1>
      <p>
        Media Hub is an all in one platform where various types of media are
        located. Ranging from git repositories to course samples, media hub
        exhibits its robust array of content. With this, you can enjoy browsing
        through different media to the fullest. Check out our media now!
      </p>
    </div>
  );
};

export default AboutPage;
