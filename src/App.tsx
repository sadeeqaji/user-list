import UserDetails from 'pages/UserDetails';
import Users from 'pages/Users';
import { Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/user/:userId" element={<UserDetails />} />
      </Routes>
    </div>
  );
};

export default App;
