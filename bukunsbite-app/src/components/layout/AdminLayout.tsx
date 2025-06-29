import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

const AdminLayout = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-color"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <div className="flex min-h-screen bg-background-dark">
      {/* Admin Sidebar */}
      <aside className="w-64 bg-background-light shadow-md">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
          <nav>
            <ul className="space-y-2">
              <li>
                <a href="/admin/dashboard" className="block p-2 hover:bg-primary-color hover:text-white rounded">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="/admin/orders" className="block p-2 hover:bg-primary-color hover:text-white rounded">
                  Orders
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;