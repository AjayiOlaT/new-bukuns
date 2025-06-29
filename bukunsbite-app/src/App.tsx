import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomerLayout from '@/components/layout/CustomerLayout';
import AdminLayout from '@/components/layout/AdminLayout';
import HomePage from './pages/customer/home/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CustomerLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          {/* Admin routes will be added here */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;