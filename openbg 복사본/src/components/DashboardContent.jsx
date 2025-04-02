import React, { useState, useEffect } from 'react';
import { getDashboard, updateProfile, updateSettings } from '../services/api';

/*const DashboardContent = ({ idToken }) => {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // 폼 상태
  const [profileForm, setProfileForm] = useState({ display_name: '', photo_url: '' });
  const [settingsForm, setSettingsForm] = useState({ dark_mode: false, language: 'ko' });
  
  useEffect(() => {
    if (idToken) {
      getDashboard(idToken)
        .then(res => {
          setDashboard(res.data);
          setProfileForm({
            display_name: res.data.profile.name,
            photo_url: res.data.profile.photo_url,
          });
          setSettingsForm({
            dark_mode: res.data.settings.dark_mode,
            language: res.data.settings.language,
          });
          setLoading(false);
        })
        .catch(err => {
          setError(err);
          setLoading(false);
        });
    }
  }, [idToken]);
  
  const handleProfileSubmit = (e) => {
    e.preventDefault();
    updateProfile(idToken, profileForm)
      .then(res => alert(res.data.message))
      .catch(err => alert(err.message));
  };
  
  const handleSettingsSubmit = (e) => {
    e.preventDefault();
    updateSettings(idToken, settingsForm)
      .then(res => alert(res.data.message))
      .catch(err => alert(err.message));
  };
  
  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생: {error.message}</div>;
  
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">대시보드</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">프로필</h2>
        <div className="bg-white rounded-xl p-6 shadow-sm mb-4">
          <p><strong>이름:</strong> {dashboard.profile.name}</p>
          <p><strong>이메일:</strong> {dashboard.profile.email}</p>
          <p><strong>프로필 이미지:</strong> {dashboard.profile.photo_url}</p>
        </div>
        <form onSubmit={handleProfileSubmit} className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-bold mb-4">프로필 편집</h3>
          <div className="mb-4">
            <label className="block mb-1">이름</label>
            <input 
              type="text"
              value={profileForm.display_name}
              onChange={(e) => setProfileForm({...profileForm, display_name: e.target.value})}
              className="w-full border rounded-md p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">프로필 이미지 URL</label>
            <input 
              type="text"
              value={profileForm.photo_url}
              onChange={(e) => setProfileForm({...profileForm, photo_url: e.target.value})}
              className="w-full border rounded-md p-2"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">프로필 업데이트</button>
        </form>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">요약</h2>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <p><strong>뱃지 개수:</strong> {dashboard.summary.badge_count}</p>
          <div>
            <strong>최근 활동:</strong>
            <ul className="list-disc ml-6">
              {dashboard.summary.recent_activity.map((activity, idx) => (
                <li key={idx}>{activity}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="text-xl font-bold mb-2">설정</h2>
        <div className="bg-white rounded-xl p-6 shadow-sm mb-4">
          <p><strong>언어:</strong> {dashboard.settings.language}</p>
          <p><strong>다크 모드:</strong> {dashboard.settings.dark_mode ? '활성화' : '비활성화'}</p>
        </div>
        <form onSubmit={handleSettingsSubmit} className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-bold mb-4">설정 옵션 업데이트</h3>
          <div className="mb-4">
            <label className="block mb-1">다크 모드</label>
            <input 
              type="checkbox"
              checked={settingsForm.dark_mode}
              onChange={(e) => setSettingsForm({...settingsForm, dark_mode: e.target.checked})}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">언어</label>
            <select 
              value={settingsForm.language}
              onChange={(e) => setSettingsForm({...settingsForm, language: e.target.value})}
              className="w-full border rounded-md p-2"
            >
              <option value="ko">한국어</option>
              <option value="en">English</option>
            </select>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">설정 업데이트</button>
        </form>
      </section>
    </div>
  );
};

export default DashboardContent;*/

const DashboardContent = () => {
  // 하드코딩 테스트 데이터
  const dashboard = {
    profile: {
      name: "테스트 사용자",
      email: "test@example.com",
      photo_url: "https://via.placeholder.com/150"
    },
    summary: {
      badge_count: 5,
      recent_activity: [
        "웹 개발 기초 배지 획득",
        "UI/UX 디자인 배지 획득"
      ]
    },
    settings: {
      dark_mode: true,
      language: "ko"
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">대시보드</h1>
      
      {/* 프로필 요약 */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">프로필</h2>
        <div className="bg-white rounded-xl p-6 shadow-sm mb-4">
          <p><strong>이름:</strong> {dashboard.profile.name}</p>
          <p><strong>이메일:</strong> {dashboard.profile.email}</p>
          <p><strong>프로필 이미지:</strong> {dashboard.profile.photo_url}</p>
        </div>
      </section>
      
      {/* 요약 */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">요약</h2>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <p><strong>뱃지 개수:</strong> {dashboard.summary.badge_count}</p>
          <div>
            <strong>최근 활동:</strong>
            <ul className="list-disc ml-6">
              {dashboard.summary.recent_activity.map((activity, idx) => (
                <li key={idx}>{activity}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      
      {/* 설정 */}
      <section>
        <h2 className="text-xl font-bold mb-2">설정</h2>
        <div className="bg-white rounded-xl p-6 shadow-sm mb-4">
          <p><strong>언어:</strong> {dashboard.settings.language}</p>
          <p><strong>다크 모드:</strong> {dashboard.settings.dark_mode ? '활성화' : '비활성화'}</p>
        </div>
      </section>
    </div>
  );
};

export default DashboardContent;
