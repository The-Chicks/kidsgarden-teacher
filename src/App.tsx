import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MainLayout from './pages/MainLayout';
import InfoPage from './pages/InfoPage';
import ClassPage from './pages/ClassPage';
import AnnouncementPage from './pages/AnnouncementPage';
import AnnouncementAddPage from './pages/AnnouncementAddPage';
import NotificationPage from './pages/NotificationPage';
import NotificationAddPage from './pages/NotificationAddPage';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/teacher" element={<MainLayout />}>
            <Route path="info" element={<InfoPage />} />
            <Route path="class" element={<ClassPage />} />
            <Route path="announcement" element={<AnnouncementPage />} />
            <Route path="announcement/add" element={<AnnouncementAddPage />} />
            <Route path="notification" element={<NotificationPage />} />
            <Route path="notification/add" element={<NotificationAddPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
