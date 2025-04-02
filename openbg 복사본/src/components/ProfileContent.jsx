import React, { useState, useEffect } from 'react';
import BadgeCard from './BadgeCard';
import { getBadges } from '../services/api';

/*const PortfolioContent = ({ idToken }) => {
  const [badges, setBadges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
          />
        ))}
        <BadgeCard isEmptyCard={true} />
      </div>
    </div>
  );
};

export default PortfolioContent;*/

const ProfileContent = () => {
  // 테스트용 하드코딩 데이터
  const userInfo = {
    display_name: "테스트 사용자",
    email: "test@example.com",
    badge_count: 5,
    skills: ["React", "JavaScript", "HTML/CSS"]
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">프로필</h1>
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex items-center">
          <div className="bg-indigo-600 w-24 h-24 rounded-full flex items-center justify-center text-white text-3xl">
            {userInfo.display_name.charAt(0)}
          </div>
          <div className="ml-6">
            <h2 className="text-2xl font-bold">{userInfo.display_name}</h2>
            <p className="text-gray-500">{userInfo.email}</p>
            <div className="mt-2 flex">
              <div className="bg-gray-200 rounded-md px-3 py-1 text-sm mr-2">
                배지 {userInfo.badge_count}개
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-bold mb-4">나의 스킬</h3>
          <div className="flex flex-wrap gap-2">
            {userInfo.skills.map((skill, idx) => (
              <div key={idx} className="bg-purple-100 text-purple-800 rounded-full px-3 py-1 text-sm">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContent;

