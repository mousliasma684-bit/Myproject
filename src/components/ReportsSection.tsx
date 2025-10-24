import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  LineChart,
  Line,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const levelData = [
  { name: '1st Year', students: 450 },
  { name: '2nd Year', students: 300 },
  { name: 'ISIL', students: 160 },
  { name: 'SI', students: 80 },
];

const gradesData = [
  { name: 'A', value: 25, color: '#7d6bff' },
  { name: 'B', value: 40, color: '#5a4fcf' },
  { name: 'C', value: 20, color: '#9a8cff' },
  { name: 'D', value: 10, color: '#c3b9ff' },
  { name: 'F', value: 5, color: '#3a3a60' },
];

const attendanceData = [
  { month: 'Jan', attendance: 75 },
  { month: 'Feb', attendance: 80 },
  { month: 'Mar', attendance: 70 },
  { month: 'Apr', attendance: 60 },
  { month: 'May', attendance: 70 },
  { month: 'Jun', attendance: 90 },
];

export function ReportsSection() {
  return (
    <section className="p-10 animate-fade-in">
      <h1 className="text-[#a8a8ff] text-center mb-6">Reports & Analytics</h1>

      <div className="max-w-7xl mx-auto">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-6">
          <Card className="bg-[#2a2a4a] border-none shadow-lg">
            <CardContent className="p-6 text-center">
              <h3 className="text-white mb-2">Total Students</h3>
              <p className="text-white">160</p>
            </CardContent>
          </Card>
          <Card className="bg-[#2a2a4a] border-none shadow-lg">
            <CardContent className="p-6 text-center">
              <h3 className="text-white mb-2">Male Students</h3>
              <p className="text-white">65</p>
            </CardContent>
          </Card>
          <Card className="bg-[#2a2a4a] border-none shadow-lg">
            <CardContent className="p-6 text-center">
              <h3 className="text-white mb-2">Female Students</h3>
              <p className="text-white">95</p>
            </CardContent>
          </Card>
          <Card className="bg-[#2a2a4a] border-none shadow-lg">
            <CardContent className="p-6 text-center">
              <h3 className="text-white mb-2">Average Attendance</h3>
              <p className="text-white">85%</p>
            </CardContent>
          </Card>
          <Card className="bg-[#2a2a4a] border-none shadow-lg">
            <CardContent className="p-6 text-center">
              <h3 className="text-white mb-2">Modules</h3>
              <p className="text-white">6</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="bg-[#2a2a4a] border-none shadow-lg mb-6">
          <CardContent className="p-5">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <label className="text-white">Date range:</label>
                <Input type="month" className="w-auto bg-[#1f1f3f] border-none" />
              </div>
              <div className="flex items-center gap-2">
                <label className="text-white">Module:</label>
                <Select>
                  <SelectTrigger className="w-32 bg-[#1f1f3f] border-none">
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="paw">PAW</SelectItem>
                    <SelectItem value="ihm">IHM</SelectItem>
                    <SelectItem value="gl">GL</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="ml-auto bg-primary hover:bg-accent">
                Apply Filter
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="bg-card border-none shadow-lg">
            <CardHeader>
              <CardTitle className="text-white text-center">
                Students per Level
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={levelData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#39395c" />
                  <XAxis dataKey="name" stroke="#fff" />
                  <YAxis stroke="#fff" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#2a2a4a',
                      border: 'none',
                      borderRadius: '8px',
                      color: '#fff',
                    }}
                  />
                  <Bar dataKey="students" fill="#7d6bff" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="bg-card border-none shadow-lg">
            <CardHeader>
              <CardTitle className="text-white text-center">
                Grades Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={gradesData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="value"
                    label={(entry) => entry.name}
                  >
                    {gradesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#2a2a4a',
                      border: 'none',
                      borderRadius: '8px',
                      color: '#fff',
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="bg-card border-none shadow-lg">
            <CardHeader>
              <CardTitle className="text-white text-center">
                Attendance Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={attendanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#39395c" />
                  <XAxis dataKey="month" stroke="#fff" />
                  <YAxis stroke="#fff" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#2a2a4a',
                      border: 'none',
                      borderRadius: '8px',
                      color: '#fff',
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="attendance"
                    stroke="#7d6bff"
                    strokeWidth={2}
                    fill="#5a4fcf55"
                    dot={{ fill: '#7d6bff', r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
