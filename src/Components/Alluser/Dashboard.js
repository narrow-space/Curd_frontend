import axios from "axios";
import React, { useEffect,useState } from "react";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBinFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import { Ring } from "react-awesome-spinners";
import { toast } from "react-toastify";

const Dashboard = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://frozen-dusk-30114.herokuapp.com/users")
      .then((res) => {
        setUser(res.data.reverse());
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  ///delete an user//

  const handledelete = (id) => {
    axios({
      method: "DELETE",
      url: `https://frozen-dusk-30114.herokuapp.com/users/${id}`,
    }).then((res) => {
      const remainingUsers = user.filter((ur) => ur._id !== id);
      setUser(remainingUsers);
      toast.error("delete user successfully", {
        position: "top-center",
      });
    });
  };

  return (
    <div className="container">
      <h1 className="text-center">All employee</h1>
      <body>
        <div className="table-container">
          <table class="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Employee Name</th>
                <th>Phone No.</th>
                <th>Adress</th>
                <th>Website</th>
                <th>email</th>
                <th>Company Name</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {user.map((pp, index) => (
                <tr>
                  <td data-lable="Id">{index + 1}</td>

                  <td data-lable="Customer Name">{pp.name}</td>
                  <td data-lable="Phone No.">{pp.phone}</td>
                  <td data-lable="Phone No.">{pp.address}</td>
                  <td data-lable="Adress">{pp.website}</td>
                  <td style={{ textAlign: "right" }} data-lable="email">
                    <small>{pp.email}</small>
                  </td>
                  <td data-lable="Status">{pp.company}</td>
                  <td className="" data-lable="Action">
                    <Link to={`edituser/${pp._id}`}>
                      <span id="btn">
                        <GrEdit className="pencil" />
                      </span>
                    </Link>
                  </td>

                  <td className="" data-lable="Action">
                    <span id="btn1" onClick={() => handledelete(pp._id)}>
                      <RiDeleteBinFill />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </body>
      {loading && (
        <div className="text-center">
          <Ring />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
