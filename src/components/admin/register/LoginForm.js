import {ACCESS_TOKEN, REFRESH_TOKEN} from "../../../utils/constans";
import { Link, useHistory } from "react-router-dom";
import { Button, Card, Form, Input, notification } from "antd";
import {signInApi} from "../../../api/user";


export default function RegisterForm(props){
    
  let history = useHistory();

  const {handleSignUp} = props;
  
    const onFinish = async (values) => {

      const result = await signInApi(values);

      if(result.message){
        notification["error"]({
          message: result.message
        });
      }else{
        const {accessToken, refreshToken} = result;
        localStorage.setItem(ACCESS_TOKEN, accessToken);
        localStorage.setItem(REFRESH_TOKEN, refreshToken);

        notification["success"]({
          message: "Login Successfully"
        })
        
        window.location.href = '/admin';
        
        //history.push("/");
      }


    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
      };

    return(
        
        <Card
        className="card-signup header-solid h-full ant-card pt-0"
        title={<h5>Login </h5>}
        bordered="false"
      >
        {/*
        <div className="sign-up-gateways">
          <Button type="false">
            <img src={logo1} alt="logo 1" />
          </Button>
          <Button type="false">
            <img src={logo2} alt="logo 2" />
          </Button>
          <Button type="false">
            <img src={logo3} alt="logo 3" />
          </Button>
        </div>
         <p className="text-center my-25 font-semibold text-muted">Or</p>
         */}
        
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="row-col"
        >
          <Form.Item
            name="email"
            hasFeedback
            rules={[
              { type: "email", message: "Please input valid email!" },
              { required: true, message: "Please input your email!" },
            ]}
          >
            <Input placeholder="email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Please input your password!" },
            ]}
          >
            <Input type="password" placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button
              style={{ width: "100%" }}
              type="primary"
              htmlType="submit"
            >
              SIGN IN
            </Button>
          </Form.Item>
        </Form>
        <p className="font-semibold text-muted text-center">
            Don't have an account?{" "}
          <Link to="/admin/signIn" onClick={() => handleSignUp()} className="font-bold text-dark">
            Sign Up
          </Link>
        </p>
      </Card>
    )
}