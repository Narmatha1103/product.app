import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getDatabase, ref, child, get } from "firebase/database";
import { auth } from "../config/Firebase";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const navigate = useNavigate();
  const dbRef = ref(getDatabase());
  const [data, setData] = useState({
    email: "",
    id: "",
    username: "",
  });
  const location = useLocation();
  console.log(location.state.uids);

  const Getdata = () => {
    get(child(dbRef, `users/${location.state.uids}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          setData(snapshot.val());
          console.log("whole data", data);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    Getdata();
  }, []);
  const Handlelogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        alert("signout Successfull");
      })
      .catch((error) => {
        // An error happened.
      });
    navigate("/");
  };
  return (
    <>
      <div>
        <h1>
          <center>
            <u>Profile</u>
          </center>
        </h1>
        <br></br>
        <ul>
          <h1>
            Welcome <i>"{data.username}</i>
          </h1>
          <br></br>
          <li>Email : {data.email}</li>
          <br></br>
          <li>Id : {data.id}</li>
          <br></br>
        </ul>
        <button className="btn btn-danger" onClick={Handlelogout}>
          Logout
        </button>
      </div>
    </>
  );
};

export default Logout;
