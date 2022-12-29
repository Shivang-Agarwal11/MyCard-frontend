import React, { useEffect, useState } from 'react'
import { Link, useNavigate, Navigate } from "react-router-dom"
import UserLogin from './LoginPageUser';


import OrgLogin from './LoginPageOrg';
import AdminLogin from './LoginPageAdmin';
import HomePage from './HomePage';


export default function Login() {
  const onSubmitUser = () => {
    localStorage.setItem("role", "user")
    updatedfinalLoggedIn("user")
  }
  const onSendOtp=()=>{
    console.log("Sent")
  }
  const onSubmitOrg = () => {
    updatedfinalLoggedIn("organization")
    localStorage.setItem("role", "organization")
  }
  const onSubmitAdmin = () => {
    updatedfinalLoggedIn("administrator")
    localStorage.setItem("role", "administrator")
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
  const [finalloggedIn,updatedfinalLoggedIn]=useState("")
  if(finalloggedIn=="user" || finalloggedIn=="organization" || finalloggedIn=="administrator"){
    console.log(loggedInRole)
    return <Navigate to='/'/>
  }
  if (loggedInRole == "organization") return <OrgLogin ChangeToUser={ChangeToUser} ChangeToAdmin={ChangeToAdmin} onSubmit={onSubmitOrg} />
  else if (loggedInRole == "administrator") return <AdminLogin ChangeToOrganization={ChangeToOrganization} ChangeToUser={ChangeToUser} onSubmit={onSubmitAdmin} />
  else return <UserLogin ChangeToOrganization={ChangeToOrganization} ChangeToAdmin={ChangeToAdmin} onSubmit={onSubmitUser} onSendOtp={onSendOtp}/>

}