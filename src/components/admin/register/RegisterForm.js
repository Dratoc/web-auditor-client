import { Link } from "react-router-dom";
import { Button, Card, Form, Input, Checkbox, notification } from "antd";
import { Component } from "react/cjs/react.production.min";
import {signUpApi} from "../../../api/user"

export default class RegisterForm extends Component{
    
  constructor(props) {
    super(props);
  }

  render(){
    const {handleSignUp} = this.props;
    
    const onFinish = async (values) => {  
      console.log(values);    
      const result = await signUpApi(values);  
      if(!result.ok){
        notification["error"]({
          message: result.message
        });        
      }else{
        notification["success"]({
          message: result.message
        })
        handleSignUp();
      }  
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
          name="signUp"
          initialValues={{ remember: false }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="row-col"
        >
          <Form.Item
            name="name"
            hasFeedback
            rules={[
              { required: true, message: "Please input your username!" },
              //{ min: 1, message: "least 3 characters!" }
            ]}
          >
            <Input placeholder="Name" minLength={2} maxLength={50} />
          </Form.Item>
          <Form.Item
            name="email"
            hasFeedback
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              { 
                required: true, 
                message: "Please input your email!" 
              },              
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"

            rules={[
              { required: true, message: "Please input your password!" },
            ]}
          >
            <Input type="Password" placeholder="Password" />
          </Form.Item>
          <Form.Item
            name="passwordRepeat"
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({ 
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
    
                  return Promise.reject(new Error('The two passwords that you entered do not match!'));
                },
              }),
            ]}
          >
            <Input type="Password" placeholder="Repeat Password" />
          </Form.Item>

          <Form.Item 
            name="remember"  
            valuePropName="checked" 
            hasFeedback
            rules={[
              {
                validator: (_, value) =>
                  value ? Promise.resolve() : Promise.reject(new Error('Should accept Terms and Conditions')),
              },
            ]}
          >
            <Checkbox >
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
          <Link to="/admin/signIn" onClick={() => handleSignUp()} className="font-bold text-dark">
            Sign In
          </Link>
        </p>
      </Card>
    )
  }

}