import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "./Adduser.css";
const Adduser = () => {
  const { register, handleSubmit, reset } = useForm()
  const onSubmit = async (data) => {
    console.log(data);
    await axios
      .post("https://frozen-dusk-30114.herokuapp.com/adduser", data)
      
      .then(function (response) {
         
         toast.success("user added successfully to the Dashboard", {
            position: "top-center",
           
          });
          reset()
        
        
       
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="container">
      <h1 className="text-center">ADD A USER</h1>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div className="useradd">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="">Name</label>
              <input
                type="text"
                className="form-control"
                {...register("name",{ required: true })}
              />

              <label htmlFor="">Phone No</label>
              <input
                type="number"
                className="form-control"
                {...register("phone", { required: true })}
              />
              <label htmlFor="">Adress</label>
              <input
                type="text"
                className="form-control"
                {...register("address", { required: true })}
              />
              <label htmlFor="">Website Link</label>
              <input
                type="text"
                className="form-control"
                {...register("website", { required: true })}
              />
              <label htmlFor="">Email</label>
              <input
                type="email"
                className="form-control"
                {...register("email", { required: true })}
              />
              <label htmlFor="">Company Name</label>
              <input
                type="text"
                className="form-control"
                {...register("company", { required: true })}
              />

              <input className="btn btn-outline-primary w-100" type="submit" />
            </form>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default Adduser;
