import { Link } from "react-router-dom";
import {
    Button,
    Card,
    Form,
    Input,
    Checkbox,
  } from "antd";

export default function RegisterForm(){
    
    const onFinish = (values) => {
      console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
      };

    return(
        
        <Card
        className="card-signup header-solid h-full ant-card pt-0"
        title={<h5>Register </h5>}
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
            name="Name"
            rules={[
              { required: true, message: "Please input your username!" },
            ]}
          >
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
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
            <Input placeholder="Password" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>
              I agree the{" "}
              <a href="#pablo" className="font-bold text-dark">
                Terms and Conditions
              </a>
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              style={{ width: "100%" }}
              type="primary"
              htmlType="submit"
            >
              SIGN UP
            </Button>
          </Form.Item>
        </Form>
        <p className="font-semibold text-muted text-center">
          Already have an account?{" "}
          <Link to="/admin/signIn" className="font-bold text-dark">
            Sign In
          </Link>
        </p>
      </Card>
    )
}