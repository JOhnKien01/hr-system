import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function MainLayout() {
  return (
    <div>
        <Navbar />
        <Sidebar />
        <main className="page-content">

    
      <div className="main-content">

          <Outlet />
       </div> 
       </main>
    
      
    </div>
  );
}