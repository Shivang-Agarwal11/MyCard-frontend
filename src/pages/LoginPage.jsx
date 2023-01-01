import React, { useEffect, useState } from 'react'
import { Link, useNavigate, Navigate } from "react-router-dom"
import UserLogin from './LoginPageUser';


import OrgLogin from './LoginPageOrg';
import AdminLogin from './LoginPageAdmin';

import { useStateContext } from '../contexts/ContextProvider';


export default function Login() {
  const navigate = useNavigate()

	useEffect(() => {
		if (localStorage.getItem("role")) navigate("/")
	}, [navigate])
  const { setLoginUser } =useStateContext()
  const onSubmitUser = () => {
    localStorage.setItem("role", JSON.stringify({"user":"user"}))
    setLoginUser({ loggedInRole, password: "" })
    navigate("/")
    
    
  }
  const onSubmitOrg = () => {
    localStorage.setItem("role", JSON.stringify({"user":"organization"}))
    setLoginUser({ loggedInRole, password: "" })
    navigate("/")
    
  }
  const onSubmitAdmin = () => {
    localStorage.setItem("role", JSON.stringify({"user":"administrator"}))
    setLoginUser({ loggedInRole, password: "" })
    navigate("/")
    
  }
  const onSendOtp=()=>{
    console.log("Sent")
  }
  const ChangeToUser = () => {
    updatedLoggedInRole("user")
  }
  const ChangeToOrganization = () => {
    updatedLoggedInRole("organization")
    
  }
  const ChangeToAdmin = () => {
    updatedLoggedInRole("administrator")
    
  }
  const [loggedInRole, updatedLoggedInRole] = useState("")
  
 
  if (loggedInRole == "organization") return <OrgLogin ChangeToUser={ChangeToUser} ChangeToAdmin={ChangeToAdmin} onSubmit={onSubmitOrg} />
  else if (loggedInRole == "administrator") return <AdminLogin ChangeToOrganization={ChangeToOrganization} ChangeToUser={ChangeToUser} onSubmit={onSubmitAdmin} />
  else return <UserLogin ChangeToOrganization={ChangeToOrganization} ChangeToAdmin={ChangeToAdmin} onSubmit={onSubmitUser} onSendOtp={onSendOtp}/>

}