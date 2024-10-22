import React from 'react';

const ContestPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-blue-1500 text-white">
      <div className="text-center p-8 rounded-lg bg-gray-800 shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Contests Coming Soon!</h1>
        <p className="text-lg mb-6">
          We are preparing exciting contests for you. Stay tuned for updates!
        </p>
        <div className="flex justify-center">
          <img
            src="/comingsoon.png"  // Placeholder image URL for contest
            alt="Contest Placeholder"
            className="w-24 h-24 object-cover rounded-full"
          />
        </div>
        <p className="text-sm">
          In the meantime, explore other sections of the website or follow us on social media for the latest updates.
        </p>
      </div>
    </div>
  );
};

export default ContestPage;
