import { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import { Button } from './ui/button';

export interface Student {
  id: string;
  lastName: string;
  firstName: string;
  course: string;
  sessionDate: string;
}

interface AttendanceRecord extends Student {
  present: boolean;
  participated: boolean;
}

const defaultStudents: Student[] = [
  {
    id: '001',
    lastName: 'Mousli',
    firstName: 'Asma',
    course: 'PAW',
    sessionDate: '2025-10-24',
  },
  {
    id: '002',
    lastName: 'Riham',
    firstName: 'Mohamed',
    course: 'IHM',
    sessionDate: '2025-10-24',
  },
  {
    id: '003',
    lastName: 'Nawal',
    firstName: 'Messouaf',
    course: 'GL',
    sessionDate: '2025-10-24',
  },
];

export function AttendanceList() {
  const [students, setStudents] = useState<AttendanceRecord[]>([]);
  const [presentCount, setPresentCount] = useState(0);
  const [participatedCount, setParticipatedCount] = useState(0);

  useEffect(() => {
    loadAttendance();
  }, []);

  const loadAttendance = () => {
    const savedStudents = JSON.parse(localStorage.getItem('students') || '[]');
    const allStudents = [...defaultStudents, ...savedStudents];
    const records: AttendanceRecord[] = allStudents.map((s) => ({
      ...s,
      present: false,
      participated: false,
    }));
    setStudents(records);
  };

  const togglePresent = (index: number) => {
    const updated = [...students];
    updated[index].present = !updated[index].present;
    setStudents(updated);
    setPresentCount(updated.filter((s) => s.present).length);
  };

  const toggleParticipated = (index: number) => {
    const updated = [...students];
    updated[index].participated = !updated[index].participated;
    setStudents(updated);
    setParticipatedCount(updated.filter((s) => s.participated).length);
  };

  return (
    <section className="p-10 animate-fade-in">
      <h1 className="text-[#a8a8ff] text-center mb-6">Attendance List</h1>

      <div className="bg-card rounded-lg overflow-hidden shadow-lg">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#2b2b55] border-b border-border">
              <TableHead className="text-white text-center">Student ID</TableHead>
              <TableHead className="text-white text-center">Last Name</TableHead>
              <TableHead className="text-white text-center">First Name</TableHead>
              <TableHead className="text-white text-center">Course</TableHead>
              <TableHead className="text-white text-center">Session Date</TableHead>
              <TableHead className="text-white text-center">Present</TableHead>
              <TableHead className="text-white text-center">Participated</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((student, index) => (
              <TableRow key={student.id} className="border-b border-border">
                <TableCell className="text-center">{student.id}</TableCell>
                <TableCell className="text-center">{student.lastName}</TableCell>
                <TableCell className="text-center">{student.firstName}</TableCell>
                <TableCell className="text-center">{student.course}</TableCell>
                <TableCell className="text-center">{student.sessionDate}</TableCell>
                <TableCell className="text-center">
                  <div className="flex flex-col items-center gap-1">
                    <Button
                      onClick={() => togglePresent(index)}
                      className={`${
                        student.present
                          ? 'bg-green-600 hover:bg-green-700'
                          : 'bg-[#3a3a6a] hover:bg-[#4d4d80]'
                      }`}
                      size="sm"
                    >
                      Mark
                    </Button>
                    <span className="text-sm">
                      {student.present ? 'Present' : 'Absent'}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex flex-col items-center gap-1">
                    <Button
                      onClick={() => toggleParticipated(index)}
                      className={`${
                        student.participated
                          ? 'bg-blue-600 hover:bg-blue-700'
                          : 'bg-[#3a3a6a] hover:bg-[#4d4d80]'
                      }`}
                      size="sm"
                    >
                      Mark
                    </Button>
                    <span className="text-sm">
                      {student.participated ? 'Yes' : 'No'}
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="text-center mt-6 text-white">
        <strong>Present:</strong> <span>{presentCount}</span> |{' '}
        <strong>Participated:</strong> <span>{participatedCount}</span>
      </div>
    </section>
  );
}
