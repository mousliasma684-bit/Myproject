import { useState } from 'react';
import { Button } from './ui/button';

interface NavigationProps {
  isLoggedIn: boolean;
  onNavigate: (section: 'home' | 'attendance' | 'addStudent' | 'reports') => void;
  onLogout: () => void;
}

export function Navigation({ isLoggedIn, onNavigate, onLogout }: NavigationProps) {
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = () => {
    setIsLoggingOut(true);
    setTimeout(() => {
      onLogout();
      setIsLoggingOut(false);
    }, 300);
  };

  return (
    <nav className="bg-gradient-to-r from-[#1e1e36] to-[#2a2a4d] px-8 py-4 shadow-lg">
      <div className="flex justify-between items-center">
        <div className="flex gap-6">
          <a
            onClick={() => onNavigate('home')}
            className="text-[#bcbcff] hover:text-white hover:shadow-[0_0_10px_#8f8fff] transition-all cursor-pointer"
          >
            Home
          </a>
          {isLoggedIn && (
            <>
              <a
                onClick={() => onNavigate('attendance')}
                className="text-[#bcbcff] hover:text-white hover:shadow-[0_0_10px_#8f8fff] transition-all cursor-pointer"
              >
                Attendance List
              </a>
              <a
                onClick={() => onNavigate('addStudent')}
                className="text-[#bcbcff] hover:text-white hover:shadow-[0_0_10px_#8f8fff] transition-all cursor-pointer"
              >
                Add Student
              </a>
              <a
                onClick={() => onNavigate('reports')}
                className="text-[#bcbcff] hover:text-white hover:shadow-[0_0_10px_#8f8fff] transition-all cursor-pointer"
              >
                Reports
              </a>
            </>
          )}
        </div>

        {isLoggedIn && (
          <Button
            onClick={handleLogout}
            className={`bg-[#3a3a6a] text-[#e0e0ff] hover:bg-[#4d4d80] transition-all ${
              isLoggingOut ? 'bg-[#c37fdc] scale-105' : ''
            }`}
          >
            Logout
          </Button>
        )}
      </div>
    </nav>
  );
}
