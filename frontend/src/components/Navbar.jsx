import { useState } from "react";
import { useNavigate } from "react-router-dom";

import dotrLogo from "../assets/Department_of_Transportation_(DOTr).png"; 

function Dashboard() {
  return (
    <div>
      <h1>Navbar</h1>
      <p>kain na.</p>
    
    
        <div className="sidebar-logo">
            <img src={dotrLogo} alt="DOTr Logo" className="sidebar-logo-img" />
            <span className="sidebar-title">DOTr HRS</span>
        </div>



    </div>
   
      
  );
}

export default Dashboard;