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
import InformationPage from './pages/InformationPage';
import AttendancePage from './pages/AttendancePage';
import ConversationPage from './pages/ConversationPage';
import DietPage from './pages/DietPage';
import AlbumPage from './pages/AlbumPage';
import SchedulePage from './pages/SchedulePage';

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
            <Route path="information" element={<InformationPage />} />
            <Route path="attendance" element={<AttendancePage />} />
            <Route path="conversation" element={<ConversationPage />} />
            <Route path="diet" element={<DietPage />} />
            <Route path="album" element={<AlbumPage />} />
            <Route path="schedule" element={<SchedulePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
