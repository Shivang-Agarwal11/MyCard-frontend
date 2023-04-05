
import axios, * as others from 'axios';
import AdminBox from './AdminBox';
import { AdminHomeCenter } from './AdminHomeCenter';
import AdminSideBar from './AdminSideBar';


export default function AdminHome() {

  // axios
  //     .post("https://mycard.up.railway.app/admin/login", params,{headers:headers})
  //     .then((response) => {


  //       localStorage.setItem("role", JSON.stringify({ "user": "administrator" }))
  //       localStorage.setItem("token", response.data.data.token)
  //       setLogin({ user: "admin" })
  //       console.log("Success")
  //       navigate("/admin/home")
  //     }, (error) => {
  //       console.log("Error")

  //     });

  return (
    <div style={{"display":"grid","gridTemplateColumns":"8% 90%"}}>
      <AdminSideBar/>
       <AdminHomeCenter/>
     </div>
  );
}