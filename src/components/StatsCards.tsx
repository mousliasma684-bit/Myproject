import { Card, CardContent } from './ui/card';
import { ArrowUpRight, ArrowDownRight, DollarSign, Users, ShoppingCart, TrendingUp } from 'lucide-react';

const stats = [
  {
    title: 'Total Revenue',
    value: '$45,231',
    change: '+20.1%',
    trend: 'up',
    icon: DollarSign,
    color: 'bg-blue-500',
  },
  {
    title: 'Total Customers',
    value: '2,345',
    change: '+12.5%',
    trend: 'up',
    icon: Users,
    color: 'bg-green-500',
  },
  {
    title: 'Total Orders',
    value: '1,234',
    change: '-3.2%',
    trend: 'down',
    icon: ShoppingCart,
    color: 'bg-purple-500',
  },
  {
    title: 'Conversion Rate',
    value: '3.24%',
    change: '+8.1%',
    trend: 'up',
    icon: TrendingUp,
    color: 'bg-orange-500',
  },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-gray-600">{stat.title}</p>
                <p className="text-gray-900 mt-2">{stat.value}</p>
                <div className="flex items-center gap-1 mt-2">
                  {stat.trend === 'up' ? (
                    <ArrowUpRight className="h-4 w-4 text-green-600" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 text-red-600" />
                  )}
                  <span
                    className={
                      stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }
                  >
                    {stat.change}
                  </span>
                  <span className="text-gray-500">from last month</span>
                </div>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
