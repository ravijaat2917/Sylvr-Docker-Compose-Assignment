import React, { useEffect, useState } from "react";
import { Form, message } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { fetchStudentDetails } from "../Store/userSlice";
import { reset } from "./../Store/userSlice.js";

const UpdatePage = () => {
  const dispatch = useDispatch();
  const fetchUserDetails = async () => {
    dispatch(fetchStudentDetails());
  };

  const navigate = useNavigate();

  const user = useSelector((state) => state.user);
  const [name, setName] = useState(user[0]?.firstName);
  const [lastName, setLastName] = useState(user[0]?.lastName);
  const [email, setEmail] = useState(user[0]?.email);
  const [password, setPassword] = useState();

  const handleUpdate = async (e) => {
    // e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("firstName", name);
      productData.append("lastName", lastName);
      productData.append("email", email);
      productData.append("password", password);
      productData.append("id", user[0]?._id);

      const res = axios.post(`/user/update/${user[0]._id}`, productData);
      message.success("Updated Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <>
      {user[0]?.firstName ? (<>
      <div>
        <button
          onClick={() => {
            localStorage.clear();
            navigate("/login");
          }}
          className="btn btn-danger mx-20 mt-10 text-right"
        >
          Logout
        </button>
      </div>
      <div
        className="my-20"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div className="border-2 shadow-lg p-6">
          <p className="text-xl font-semibold text-center mb-4 mx-36">
            UPDATE PROFILE
          </p>

          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            autoComplete="off"
          >
            <label className="">First Name</label>
            <input
              type="text"
              value={name}
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
            <label className="mt-3">Last Name</label>
            <input
              type="text"
              value={lastName}
              className="form-control"
              onChange={(e) => setLastName(e.target.value)}
            />
            <label className="mt-3">Email</label>
            <input
              type="text"
              value={email}
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="mt-3">Password</label>
            <input
              type="text"
              value={password}
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <button
                onClick={() => handleUpdate()}
                className="btn btn-primary mt-4"
                type="btn"
                htmlType="submit"
              >
                Update
              </button>
            </Form.Item>
          </Form>
        </div>
      </div>
      </>) : (<>
        <p className="text-3xl font-semibold text-center mt-40">Please Login </p>
        <p onClick={()=> navigate('/login')} className="btn btn-primary mt-6 w-full">Login</p>
      </>) }
    
    </>
  );
};

export default UpdatePage;
