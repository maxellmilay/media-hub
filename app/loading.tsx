import React from 'react';
import '@/app/styles/loader.css';

const loading = () => {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="loader" />
    </div>
  );
};

export default loading;
