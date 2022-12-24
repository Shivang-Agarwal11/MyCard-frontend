import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom"


import './App.css';
import HeaderMegaMenu from './componenets/Header/HeaderMegaMenu';
import HomePage from './pages/HomePage';
import FooterLinks from './componenets/Footer/Footer';
import { datajson } from './componenets/Footer/data';
import { mock }  from './componenets/Header/headerdata';
import { mockd }  from './componenets/Header/headerdata2';
import { mockda }  from './componenets/Header/headerdata3';
import Login from './pages/LoginPage';

function App() {
  return (
     <div>
     <HeaderMegaMenu mockdata={mock.mockdata} mockdata2={mockd.mockdata2} mockdata3={mockda.mockdata3}/>
     <Routes>
     <Route
					path="/"
					element={
						<ProtectedRoutes>
							<HomePage />
						</ProtectedRoutes>
					}
				/>
      <Route path="/login" element={<Login/>}/>
     </Routes> 
     
     <FooterLinks data={datajson.data}/>
     </div>
  );
}

export function ProtectedRoutes(props) {
	if (localStorage.getItem("user")) return props.children
	else return <Navigate to="/login" />
}
export default App;
