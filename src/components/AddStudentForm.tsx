import { useState, FormEvent } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Student } from './AttendanceList';

export function AddStudentForm() {
  const [studentId, setStudentId] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [course, setCourse] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const student: Student = {
      id: studentId,
      lastName: lastName,
      firstName: firstName,
      course: course,
      sessionDate: new Date().toISOString().split('T')[0],
    };

    const students = JSON.parse(localStorage.getItem('students') || '[]');
    students.push(student);
    localStorage.setItem('students', JSON.stringify(students));

    setMessage('Student added successfully.');
    
    // Reset form
    setStudentId('');
    setLastName('');
    setFirstName('');
    setCourse('');

    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <section className="p-10 animate-fade-in">
      <h1 className="text-[#a8a8ff] text-center mb-6">Add a New Student</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-card p-6 rounded-lg max-w-md mx-auto shadow-lg"
      >
        <div className="space-y-4">
          <div>
            <Label htmlFor="studentId" className="text-[#bbb8dc]">
              Student ID:
            </Label>
            <Input
              type="text"
              id="studentId"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
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
            <Label htmlFor="course" className="text-[#bbb8dc]">
              Course:
            </Label>
            <Input
              type="text"
              id="course"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              required
              className="bg-input-background text-foreground"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-accent mt-4"
          >
            Add Student
          </Button>
        </div>
      </form>

      {message && (
        <div className="text-center text-[#cababd9] mt-6 p-4">{message}</div>
      )}
    </section>
  );
}
