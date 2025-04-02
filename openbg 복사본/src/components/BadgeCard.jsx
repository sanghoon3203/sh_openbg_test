import React from 'react';

const BadgeCard = ({ title, organization, date, isEmptyCard = false, onDelete, onAdd }) => {
  if (isEmptyCard) {
    return (
      <div 
         className="bg-white rounded-xl p-4 shadow-sm h-56 w-full flex items-center justify-center cursor-pointer"
         onClick={onAdd}
      >
        <div className="text-gray-300 text-center">
          <span className="block text-3xl">+</span>
          <span>컨텐츠 추가하기</span>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm h-56 relative">
      <div className="flex justify-between">
        <div>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-gray-500 text-sm">{organization}</p>
        </div>
        <div className="w-16 h-16 bg-gray-200"></div>
      </div>
      <div className="mt-16">
        <p className="text-xs text-gray-400">취득 날짜: {date}</p>
      </div>
      {onDelete && (
        <button 
          onClick={onDelete} 
          className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs"
        >
          삭제
        </button>
      )}
    </div>
  );
};

export default BadgeCard;
