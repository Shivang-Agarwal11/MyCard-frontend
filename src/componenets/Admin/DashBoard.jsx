import React from "react";
import AdminSideBar from "./AdminSideBar";
import DashBoardContent from "./AdminDashboard";
export default function Dashboard(){
    return(
        <div style={{"display":"grid","gridTemplateColumns":"8% 90%"}}>
        <AdminSideBar/>
        <DashBoardContent/>
       </div>
    );
}