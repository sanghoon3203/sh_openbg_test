import React from 'react';
import { logout } from '../../services/api';

const SidebarProfile = ({ idToken, onLogout }) => {
  const handleLogout = () => {
    logout({ idToken })
      .then(res => {
        alert(res.data.message);
        onLogout();
      })
      .catch(err => alert(err.message));
  };

  return (
    <div className="flex items-center mb-6 justify-between">
      <div className="flex items-center">
        <div className="bg-indigo-600 w-16 h-16 rounded-full flex items-center justify-center">
          <span className="text-2xl">S</span>
        </div>
        <div className="ml-4">
          <h2 className="text-xl font-bold">Sanghoon</h2>
          <p className="text-gray-400 text-sm">Sanghoon@syu.in.kr</p>
        </div>
      </div>
    </div>
  );
};

export default SidebarProfile;
