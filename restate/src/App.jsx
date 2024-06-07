import './App.css';
import AgentsPage from './pages/AgentsPage';
import 'react-multi-carousel/lib/styles.css';
import LoginPage from './agent/auth/LoginPage';
import RegisterPage from './agent/auth/RegisterPage';
import PostProperty from './agent/pages/PostProperty';
import MyProerties from './agent/pages/MyProerties';
import AgentLayout from './components/AgentLayout';
import MainLayout from './components/MainLayout';
import {
  Route,
  Routes
} from 'react-router-dom';
import ProfilePage from './pages/agent/ProfilePage';
import AdminDashBoard from './pages/Admin/AdminDashBoard';
import Axios from "axios";
import SingleProperty from './agent/pages/SingleProperty';
import Property from './pages/user/Property';
import AgentSinglePage from './pages/agent/AgentSinglePage';
import ProtectedRoute, {
  RoleBasedRedirect
} from './utils/ProptectedRoute';
import HomePage from './pages/user/HomePage';
import ContactPage from './pages/user/ContactPage';
import {
  NotFoundPage
} from './utils/Spinner';
import AboutPage from './pages/user/AboutPage';
import PropertyPage from './pages/user/PropertyPage'; 

Axios.defaults.baseURL =import.meta.env.VITE_API_URL;

function App() {
  return (
    <>
      <Routes>
        {/* Main Layout Routes */}
        <Route path='/*' element={<NotFoundPage />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/agents" element={<AgentsPage />} />
          <Route path="/agents/:id" element={<AgentSinglePage />} />
          <Route path="/property" element={<PropertyPage />} />
          <Route path="/property/:id" element={<Property />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>

        {/* Agent Layout Routes */}
        <Route path="/agent" element={<AgentLayout />}>
          <Route path="login" element={<RoleBasedRedirect><LoginPage /></RoleBasedRedirect>} />
          <Route path="register" element={<RoleBasedRedirect><RegisterPage /></RoleBasedRedirect>} />
          <Route path="post-a-property" element={<ProtectedRoute><PostProperty /></ProtectedRoute>} />
          <Route path="property/:id" element={<ProtectedRoute><SingleProperty /></ProtectedRoute>} />
          <Route path="my-properties" element={<ProtectedRoute><MyProerties /></ProtectedRoute>} />
          <Route path="profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
          <Route path="admin/dashboard" element={<ProtectedRoute><AdminDashBoard /></ProtectedRoute>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
