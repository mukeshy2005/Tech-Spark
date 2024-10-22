import React from 'react';

const ResourcesPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-blue-1500 text-white">
      <div className="text-center p-8 rounded-lg bg-gray-800 shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Resources Coming Soon!</h1>
        <p className="text-lg mb-6">
          We are working hard to bring you valuable resources. Stay tuned!
        </p>
        <div className="flex justify-center">
          <img
            src="/comingsoon.png" // Placeholder image URL
            alt="Placeholder"
            className="w-24 h-24 object-cover rounded-full"
            
          />
        </div>
        <p className="text-sm">
          In the meantime, check out our community on social media or explore other sections of the website.
        </p>
      </div>
    </div>
  );
};

export default ResourcesPage;
