import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const recentOrders = [
  {
    id: '#ORD-001',
    customer: {
      name: 'Sarah Johnson',
      email: 'sarah.j@example.com',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    },
    product: 'Wireless Headphones',
    amount: '$129.99',
    status: 'Completed',
    date: 'Oct 24, 2025',
  },
  {
    id: '#ORD-002',
    customer: {
      name: 'Michael Chen',
      email: 'michael.c@example.com',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    },
    product: 'Smart Watch',
    amount: '$299.00',
    status: 'Processing',
    date: 'Oct 24, 2025',
  },
  {
    id: '#ORD-003',
    customer: {
      name: 'Emily Davis',
      email: 'emily.d@example.com',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    },
    product: 'Laptop Stand',
    amount: '$49.99',
    status: 'Completed',
    date: 'Oct 23, 2025',
  },
  {
    id: '#ORD-004',
    customer: {
      name: 'James Wilson',
      email: 'james.w@example.com',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    },
    product: 'Mechanical Keyboard',
    amount: '$159.99',
    status: 'Pending',
    date: 'Oct 23, 2025',
  },
  {
    id: '#ORD-005',
    customer: {
      name: 'Lisa Anderson',
      email: 'lisa.a@example.com',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop',
    },
    product: 'USB-C Hub',
    amount: '$79.99',
    status: 'Completed',
    date: 'Oct 22, 2025',
  },
];

const getStatusVariant = (status: string) => {
  switch (status) {
    case 'Completed':
      return 'default';
    case 'Processing':
      return 'secondary';
    case 'Pending':
      return 'outline';
    default:
      return 'default';
  }
};

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="text-gray-900">{order.id}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={order.customer.avatar} />
                      <AvatarFallback>{order.customer.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-gray-900">{order.customer.name}</div>
                      <div className="text-gray-500">{order.customer.email}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-gray-700">{order.product}</TableCell>
                <TableCell className="text-gray-900">{order.amount}</TableCell>
                <TableCell>
                  <Badge variant={getStatusVariant(order.status)}>
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-gray-600">{order.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
