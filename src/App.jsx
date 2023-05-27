import React from 'react';
import { Routes, Route } from "react-router-dom"
import './App.css';
import HeaderMegaMenu from './componenets/Header/HeaderMegaMenu';
import HomePage from './pages/HomePage';
import { mock } from './componenets/Header/headerdata';
import { mockd } from './componenets/Header/headerdata2';
import { mockda } from './componenets/Header/headerdata3';
import UserLogin from './pages/LoginPageUser';
import SignUpOrg from './pages/SignUpOrg';
import OrgLogin from './pages/LoginPageOrg';
import AdminLogin from './pages/LoginPageAdmin';
import { useStateContext } from './contexts/ContextProvider';
import RequestPage from './pages/Request';
import ErrorPage from './pages/Error';
import Admin from './componenets/Admin/Admin';
import OrganizationHome from './componenets/Organization/OrganisationHome';
import HomeUser from './componenets/User/UserMain';
import DisplayData from './componenets/Organization/DisplayData';


function App() {
  const { loginUser, setLoginUser } = useStateContext()
  if (loginUser)
    console.log(loginUser['user'])
  return (
    <div>
      <HeaderMegaMenu mockdata={mock.mockdata} mockdata2={mockd.mockdata2} mockdata3={mockda.mockdata3} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<SignUpOrg />} />
        <Route path="/request" element={<RequestPage />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/org" element={<OrgLogin />} />
        <Route path="/user/home" element={<HomeUser />} />
        <Route path="/org/home" element={<OrganizationHome />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/home" element={<Admin/>} />
        {/* <Route path="/admin/home/orgDetails" element={<Admin/>} /> */}
        
        {/* <Route path="/admin/dashboard" element={<DashBoard/>} /> */}
        {/* {loginUser && loginUser['user']==='organizaton'?<OrgLogin/>:<></>} */}
      </Routes>


    </div>
  );
}

// export function ProtectedRoutes(props) {
// 	if (!localStorage.getItem("role")) return props.children
// 	else if(localStorage.getItem("role")==="") />
// }
export default App;
