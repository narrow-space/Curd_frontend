import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import vector from '../images/download.jpg'
import "./Edituser.css";

const Edituser = () => {
  const { userid } = useParams();
  const [selectUser, setselectUser] = useState({});

  useEffect(() => {
    axios
      .get(`https://frozen-dusk-30114.herokuapp.com/users/${userid}`)
      .then((res) => {
       
        setselectUser(res.data);
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleonChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newUserData = { ...selectUser };
    newUserData[field] = value;
    setselectUser(newUserData);
   
  };

  const handleUpdate = async(e) => {
    e.preventDefault();
  await axios
      .put(`https://frozen-dusk-30114.herokuapp.com/addusers/${userid}`, selectUser)
      .then((response) => {
      
        if(response.data.modifiedCount>0){
            return  toast("user update successfully", {
                position: "top-center",
               
              });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-6">
            <div className="logo">
              <img className="img-fluid" src={vector} alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <form onSubmit={handleUpdate}>
              <input
                name="name"
                onChange={handleonChange}
                value={selectUser.name}
                className="form-control mt-3"
                type="text"
                id=""
              />
              <input
                onChange={handleonChange}
                value={selectUser.phone}
                className="form-control mt-3"
                type="text"
                name="phone"
                id=""
              />
              <input
                onChange={handleonChange}
                name="address"
                value={selectUser.address}
                className="form-control mt-3"
                type="text"
              />
              <input
                onChange={handleonChange}
                name="website"
                value={selectUser.website}
                className="form-control mt-3"
                type="text"
              />
              <input
                onChange={handleonChange}
                name="email"
                value={selectUser.email}
                className="form-control mt-3"
                type="text"
              />
              <input
                onChange={handleonChange}
                name='company'
                value={selectUser.company}
                className="form-control mt-3"
                type="text"
              />
              <input type="submit" value="Update User" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edituser;
