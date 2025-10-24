import { 
  LayoutDashboard, 
  Users, 
  ShoppingCart, 
  BarChart3, 
  Package, 
  Settings,
  FileText,
  CreditCard,
  HelpCircle
} from 'lucide-react';
import { cn } from './ui/utils';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const navigation = [
  { name: 'Dashboard', icon: LayoutDashboard, active: true },
  { name: 'Customers', icon: Users, active: false },
  { name: 'Orders', icon: ShoppingCart, active: false },
  { name: 'Products', icon: Package, active: false },
  { name: 'Analytics', icon: BarChart3, active: false },
  { name: 'Reports', icon: FileText, active: false },
  { name: 'Billing', icon: CreditCard, active: false },
];

const bottomNavigation = [
  { name: 'Settings', icon: Settings },
  { name: 'Help', icon: HelpCircle },
];

export function Sidebar({ isOpen }: SidebarProps) {
  return (
    <>
      <aside
        className={cn(
          "bg-white border-r border-gray-200 transition-all duration-300 flex flex-col",
          isOpen ? "w-64" : "w-0 lg:w-20"
        )}
      >
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <LayoutDashboard className="h-5 w-5 text-white" />
            </div>
            {isOpen && <span className="text-gray-900">Dashboard</span>}
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navigation.map((item) => (
            <a
              key={item.name}
              href="#"
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
                item.active
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:bg-gray-50"
              )}
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              {isOpen && <span>{item.name}</span>}
            </a>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-200 space-y-1">
          {bottomNavigation.map((item) => (
            <a
              key={item.name}
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              {isOpen && <span>{item.name}</span>}
            </a>
          ))}
        </div>
      </aside>
    </>
  );
}
