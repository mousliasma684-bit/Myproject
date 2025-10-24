import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { LoginSection } from './components/LoginSection';
import { AttendanceList } from './components/AttendanceList';
import { AddStudentForm } from './components/AddStudentForm';
import { ReportsSection } from './components/ReportsSection';
import { LogoutMessage } from './components/LogoutMessage';

type Section = 'home' | 'attendance' | 'addStudent' | 'reports' | 'logout';

export interface Teacher {
  id: string;
  fname: string;
  lname: string;
  module: string;
}

export default function App() {
  const [currentSection, setCurrentSection] = useState<Section>('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [teacher, setTeacher] = useState<Teacher | null>(null);

  useEffect(() => {
    const savedTeacher = localStorage.getItem('teacher');
    if (savedTeacher) {
      setTeacher(JSON.parse(savedTeacher));
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (teacherData: Teacher) => {
    setTeacher(teacherData);
    setIsLoggedIn(true);
    localStorage.setItem('teacher', JSON.stringify(teacherData));
    setTimeout(() => setCurrentSection('attendance'), 1500);
  };

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setTeacher(null);
    setCurrentSection('logout');
    setTimeout(() => {
      setCurrentSection('home');
    }, 2000);
  };

  const handleNavigate = (section: Section) => {
    if (!isLoggedIn && section !== 'home') {
      return;
    }
    setCurrentSection(section);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation
        isLoggedIn={isLoggedIn}
        onNavigate={handleNavigate}
        onLogout={handleLogout}
      />

      <main>
        {currentSection === 'home' && (
          <LoginSection onLogin={handleLogin} isLoggedIn={isLoggedIn} />
        )}
        {currentSection === 'attendance' && isLoggedIn && <AttendanceList />}
        {currentSection === 'addStudent' && isLoggedIn && <AddStudentForm />}
        {currentSection === 'reports' && isLoggedIn && <ReportsSection />}
        {currentSection === 'logout' && <LogoutMessage />}
      </main>
    </div>
  );
}
