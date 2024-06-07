import { Outlet } from 'react-router-dom';
import Header from '../components/Header'
import FooterSection from '../sections/FooterSection';

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <FooterSection/>
    </div>
  );
}

export default MainLayout;
