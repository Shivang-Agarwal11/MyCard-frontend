import React from 'react';
import { Routes, Route } from "react-router-dom"


import './App.css';
import HeaderMegaMenu from './componenets/Header/HeaderMegaMenu';
import HomePage from './pages/HomePage';


import { mock }  from './componenets/Header/headerdata';
import { mockd }  from './componenets/Header/headerdata2';
import { mockda }  from './componenets/Header/headerdata3';
import UserLogin from './pages/LoginPageUser';
import SignUpOrg from './pages/SignUpOrg';
import OrgLogin from './pages/LoginPageOrg';
import AdminLogin from './pages/LoginPageAdmin';

function App() {
  return (
     <div>
     <HeaderMegaMenu mockdata={mock.mockdata} mockdata2={mockd.mockdata2} mockdata3={mockda.mockdata3}/>
     <Routes>
     <Route
					path="/"
					element={
						// <ProtectedRoutes>
							<HomePage />
						// </ProtectedRoutes>
					}
				/>
      <Route path="/login" element={<UserLogin/>}/>
      <Route path="/signup" element={<SignUpOrg/>}/>
      <Route path="/org" element={<OrgLogin/>}/>
      <Route path="/admin" element={<AdminLogin/>}/>
     </Routes> 
     
     
     </div>
  );
}

// export function ProtectedRoutes(props) {
// 	if (localStorage.getItem("role")) return props.children
// 	else return <Navigate to="/login" />
// }
export default App;
