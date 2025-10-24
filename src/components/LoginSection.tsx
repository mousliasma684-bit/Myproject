import { useState, FormEvent } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Teacher } from '../App';

interface LoginSectionProps {
  onLogin: (teacher: Teacher) => void;
  isLoggedIn: boolean;
}

export function LoginSection({ onLogin, isLoggedIn }: LoginSectionProps) {
  const [teacherId, setTeacherId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [module, setModule] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (teacherId && firstName && lastName && password && module) {
      setMessage('Login successful. Redirecting...');
      onLogin({
        id: teacherId,
        fname: firstName,
        lname: lastName,
        module: module,
      });
    } else {
      setMessage('Please fill in all fields.');
    }
  };

  if (isLoggedIn) {
    return null;
  }

  return (
    <section className="p-10 animate-fade-in">
      <h1 className="text-[#a8a8ff] text-center mb-6 tracking-wide">
        Welcome to the Student Attendance System
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-card p-6 rounded-lg max-w-md mx-auto shadow-lg"
      >
        <div className="space-y-4">
          <div>
            <Label htmlFor="teacherId" className="text-[#bbb8dc]">
              Teacher ID:
            </Label>
            <Input
              type="text"
              id="teacherId"
              value={teacherId}
              onChange={(e) => setTeacherId(e.target.value)}
              required
              className="bg-input-background text-foreground"
            />
          </div>

          <div>
            <Label htmlFor="firstName" className="text-[#bbb8dc]">
              First Name:
            </Label>
            <Input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="bg-input-background text-foreground"
            />
          </div>

          <div>
            <Label htmlFor="lastName" className="text-[#bbb8dc]">
              Last Name:
            </Label>
            <Input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="bg-input-background text-foreground"
            />
          </div>

          <div>
            <Label htmlFor="password" className="text-[#bbb8dc]">
              Password:
            </Label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-input-background text-foreground"
            />
          </div>

          <div>
            <Label htmlFor="module" className="text-[#bbb8dc]">
              Module:
            </Label>
            <Input
              type="text"
              id="module"
              value={module}
              onChange={(e) => setModule(e.target.value)}
              required
              className="bg-input-background text-foreground"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-accent mt-4"
          >
            Login
          </Button>
        </div>
      </form>

      {message && (
        <div className="text-center text-white mt-6 p-4">{message}</div>
      )}
    </section>
  );
}
