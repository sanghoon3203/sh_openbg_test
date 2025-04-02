// src/components/CombinedDashboard.jsx
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import DashboardContent from './DashboardContent';
import ProfileContent from './ProfileContent';
import RecommendedCoursesContent from './RecommendedCoursesContent';
import CommunityContent from './CommunityContent';
import PortfolioContent from './PortfolioContent';
import Sidebar from './Sidebar/Sidebar';  // components/Sidebar 폴더의 Sidebar
import { motion } from 'framer-motion';

const CombinedDashboard = ({ idToken }) => {
  const location = useLocation();
  // URL 쿼리에서 초기 탭 값을 읽을 수 있음 (예: /dashboard?tab=profile)
  const query = new URLSearchParams(location.search);
  const initialTab = query.get('tab') || '대시보드';
  const [activeMenu, setActiveMenu] = useState(initialTab);

  const renderContent = () => {
    switch (activeMenu) {
      case '대시보드':
        return <DashboardContent idToken={idToken} />;
      case '프로필':
        return <ProfileContent idToken={idToken} />;
      case '추천 강좌':
        return <RecommendedCoursesContent idToken={idToken} />;
      case '커뮤니티 활동':
        return <CommunityContent idToken={idToken} />;
      case '내 배지 포트폴리오':
        return <PortfolioContent idToken={idToken} />;
      default:
        return <DashboardContent idToken={idToken} />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen font-sans bg-gradient-to-br from-purple-50 to-white"
    >
    <div className="flex h-screen">
      {/* 좌측 사이드바: components/Sidebar 폴더의 Sidebar */}
      <Sidebar
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        idToken={idToken}
        onLogout={() => {
          // 로그아웃 시 처리 (예: App.jsx의 setIdToken(null) 호출)
          window.location.href = '/login';
        }}
      />
      {/* 우측 메인 콘텐츠 영역 */}
      <div className="flex-1 p-6 bg-gray-100 overflow-y-auto">
        {renderContent()}
      </div>
    </div>
    </motion.div>
  );
};

export default CombinedDashboard;
