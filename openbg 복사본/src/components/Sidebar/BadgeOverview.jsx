import React from 'react';
import { Medal } from 'lucide-react';

const BadgeOverview = () => {
  return (
    <div className="flex items-center mb-6">
      <Medal className="text-yellow-300 mr-2" size={20} />
      <span className="text-lg">나의 배지</span>
      <span className="ml-auto bg-orange-500 text-white px-2 py-1 rounded-md text-sm">10</span>
    </div>
  );
};

export default BadgeOverview;
