import React, { useState, useEffect } from 'react';
import BadgeCard from './BadgeCard';
import { getBadges, deleteBadge, addBadge } from '../services/api';

/* const PortfolioContent = ({ idToken }) => {
  const [badges, setBadges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAddBadgeForm, setShowAddBadgeForm] = useState(false);
  const [newBadge, setNewBadge] = useState({ name: '', description: '', earned_date: '' });

  useEffect(() => {
    if (idToken) {
      getBadges(idToken)
        .then(res => {
          setBadges(res.data.badges);
          setLoading(false);
        })
        .catch(err => {
          setError(err);
          setLoading(false);
        });
    }
  }, [idToken]);

  const handleDeleteBadge = (badgeId) => {
    if(window.confirm('정말 삭제하시겠습니까?')){
      deleteBadge(idToken, badgeId)
        .then(res => {
          alert(res.data.message);
          setBadges(badges.filter(b => b.badgeId !== badgeId));
        })
        .catch(err => alert(err.message));
    }
  };

  const handleAddBadge = () => {
    setShowAddBadgeForm(true);
  };

  const handleAddBadgeSubmit = (e) => {
    e.preventDefault();
    addBadge(idToken, newBadge)
      .then(res => {
        alert(res.data.message);
        setBadges([...badges, { ...newBadge, badgeId: res.data.badgeId }]);
        setShowAddBadgeForm(false);
        setNewBadge({ name: '', description: '', earned_date: '' });
      })
      .catch(err => alert(err.message));
  };

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생: {error.message}</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">내 배지 포트폴리오</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {badges.map(badge => (
          <BadgeCard 
            key={badge.badgeId}
            title={badge.name}
            organization={badge.description}
            date={badge.earned_date}
            onDelete={() => handleDeleteBadge(badge.badgeId)}
          />
        ))}
        <BadgeCard isEmptyCard={true} onAdd={handleAddBadge} />
      </div>
      {showAddBadgeForm && (
        <div className="mt-6 p-4 bg-white rounded-md shadow">
          <h2 className="text-xl font-bold mb-4">새 뱃지 추가</h2>
          <form onSubmit={handleAddBadgeSubmit}>
            <div className="mb-4">
              <label className="block mb-1">뱃지 이름</label>
              <input 
                type="text"
                value={newBadge.name}
                onChange={(e) => setNewBadge({ ...newBadge, name: e.target.value })}
                className="w-full border rounded-md p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">뱃지 설명</label>
              <input 
                type="text"
                value={newBadge.description}
                onChange={(e) => setNewBadge({ ...newBadge, description: e.target.value })}
                className="w-full border rounded-md p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">취득 날짜</label>
              <input 
                type="date"
                value={newBadge.earned_date}
                onChange={(e) => setNewBadge({ ...newBadge, earned_date: e.target.value })}
                className="w-full border rounded-md p-2"
                required
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">추가하기</button>
            <button 
              type="button" 
              onClick={() => setShowAddBadgeForm(false)} 
              className="ml-4 bg-gray-300 text-black px-4 py-2 rounded-md"
            >
              취소
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default PortfolioContent; */

const PortfolioContent = () => {
  // 테스트용 하드코딩 데이터: 배지 목록
  const badges = [
    {
      badgeId: 1,
      name: "웹 개발 기초",
      description: "테크 아카데미",
      earned_date: "2025-01-10"
    },
    {
      badgeId: 2,
      name: "UI/UX 디자인",
      description: "디자인 스쿨",
      earned_date: "2025-02-15"
    },
    {
      badgeId: 3,
      name: "비즈니스 영어",
      description: "글로벌 에듀",
      earned_date: "2025-03-20"
    }
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">내 배지 포트폴리오</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {badges.map(badge => (
          <BadgeCard 
            key={badge.badgeId}
            title={badge.name}
            organization={badge.description}
            date={badge.earned_date}
          />
        ))}
        <BadgeCard isEmptyCard={true} onAdd={() => alert('배지 추가 폼 열기')} />
      </div>
    </div>
  );
};

export default PortfolioContent;
