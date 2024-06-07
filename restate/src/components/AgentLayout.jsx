import { Outlet } from 'react-router-dom';

import FooterSection from '../sections/FooterSection';
import AgentNavbar from '../agent/components/AgentNavbar'
const AgentLayout = () => {
  return (
    <div>
      <AgentNavbar />
      <Outlet />
      <FooterSection />
    </div>
  );
}

export default AgentLayout;
