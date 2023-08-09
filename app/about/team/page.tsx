import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Team',
};

const TeamPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-2">Our Team</h1>
      <p>
        The Media Hub development team consists of both software developers and
        content writers. The developers are responsible for the overall
        performance and structure of the site. On the other hand, the writers
        are concerned of the content that is being displayed in the site. Both
        of them work together hand in hand to deliver the best experience to the
        users.
      </p>
    </div>
  );
};

export default TeamPage;
