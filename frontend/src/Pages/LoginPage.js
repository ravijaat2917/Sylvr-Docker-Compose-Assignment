import React from "react";
import { Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { add } from "../Store/userSlice";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    // console.log("Success:", values);
    try {
      
      const res = await axios.post("/user/login", {
        ...values,
      });
      if (res.data.success) {
        message.success(res?.data.message);
        dispatch(add(res.data.user));
        localStorage.setItem('token', res.data.token);
        navigate("/update");
      } else {
        message.error('Invalid Email Or Password');
      }
    } catch (error) {
      message.error('Something Went Wrong');
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  if (localStorage.getItem('token')) {
    setTimeout(() => {
      navigate("/update");
    }, 0);
  }

  return (
    <div
      className="my-40"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <div className="border-2 shadow-lg p-6">
        <p className="text-xl font-semibold text-center mb-4">LOGIN</p>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <button
              className="btn btn-primary text-center ml-5"
              type="btn"
              htmlType="submit"
            >
              Login
            </button>
          </Form.Item>
        </Form>
        <p className="my-2 text-center">
          Not a User ?{" "}
          <span
            className="cursor-pointer text-blue-500"
            onClick={() => navigate("/register")}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
