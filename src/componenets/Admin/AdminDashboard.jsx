import React, { useState, useEffect } from "react";
import AdminBox from "./AdminBox";

import axios, * as others from 'axios';
import AdminCard from "./AdminCard";
export default function DashBoardContent(){
    const [requestData,setrequesData]=useState(null)
    var requestCount=0
    var requestArray={}
        const header={
            headers:{
            'Content-Type': 'application/json; charset=UTF-8',
            'Authorization':`Bearer ${localStorage.getItem("token")}`
        }
    }
        useEffect(()=>{ axios
        .get("https://mycard.up.railway.app/api/admin/org/request", header)
        .then((response) => {
            // console.log(response)
            setrequesData({
                ...response.data.data
            })
        }, (error) => {
          console.log("Error")
          
        });
    },[]);
    
    console.log(requestData)
    // console.log(typeof(items))
    
    if (!requestData) {
        return <div>Loading...</div>;
    }
    const items = requestData.pendingRequests;
    return(
        <div>
        <AdminBox title="Pending Requests" height="20px" width="90%"/>
        <AdminBox title={requestData.pendingRequestsCount} height="20px" width="30%"/>
        <AdminCard items={items}/>
        </div>
    );
}