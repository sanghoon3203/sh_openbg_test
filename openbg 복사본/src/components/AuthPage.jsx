import React, { useState } from 'react';
import { signup, login } from '../services/api';
import { motion } from 'framer-motion';

const AuthPage = ({ onAuthSuccess }) => {
  const [mode, setMode] = useState('login'); // 'login' 또는 'signup'
  const [form, setForm] = useState({ email: '', password: '', display_name: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    if (mode === 'signup') {
      signup(form)
        .then(res => {
          alert(res.data.message);
          setLoading(false);
          // 회원가입 후 자동 로그인 또는 별도 처리
          onAuthSuccess(res.data.uid); // 실제 토큰으로 대체 필요
        })
        .catch(err => {
          setError(err.response?.data?.message || err.message);
          setLoading(false);
        });
    } else {
      login(form)
        .then(res => {
          alert(res.data.message);
          setLoading(false);
          onAuthSuccess(res.data.idToken);
        })
        .catch(err => {
          setError(err.response?.data?.message || err.message);
          setLoading(false);
        });
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
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow">
      <h1 className="text-2xl font-bold mb-4">{mode === 'login' ? '로그인' : '회원가입'}</h1>
      {error && <div className="mb-4 text-red-500">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1">이메일</label>
          <input 
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full border rounded-md p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">비밀번호</label>
          <input 
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full border rounded-md p-2"
            required
          />
        </div>
        {mode === 'signup' && (
          <div className="mb-4">
            <label className="block mb-1">사용자 이름</label>
            <input 
              type="text"
              value={form.display_name}
              onChange={(e) => setForm({ ...form, display_name: e.target.value })}
              className="w-full border rounded-md p-2"
              required
            />
          </div>
        )}
        <button type="submit" className="w-full bg-purple-500 text-white px-4 py-2 rounded-md">
          {loading ? '로딩중...' : (mode === 'login' ? '로그인' : '회원가입')}
        </button>
      </form>
      <div className="mt-4 text-center">
        {mode === 'login' ? (
          <p>
            계정이 없으신가요?{' '}
            <button onClick={() => setMode('signup')} className="text-purple-500">회원가입</button>
          </p>
        ) : (
          <p>
            이미 계정이 있으신가요?{' '}
            <button onClick={() => setMode('login')} className="text-purple-500">로그인</button>
          </p>
        )}
      </div>
    </div>
    </motion.div>
  );
};

export default AuthPage;
