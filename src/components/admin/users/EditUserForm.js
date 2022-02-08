import { Form, Input, Button, Checkbox, Select, Row, Col } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { useCallback, useEffect, useState } from 'react';
import {useDropzone} from "react-dropzone"; 
import noAvatar from "../../../assets/images/no-avatar.png";
import { getAvatarApi } from '../../../api/user';
import "./EditUserForm.scss";


export default function EditUserForm(props){
        
    const {user} = props;
    const [avatar, setAvatar] = useState(null);
    const [userData, setUserData] = useState(null);
    
    const updateUser = () =>{
        console.log(userData);
    }

    useEffect(() => {
        setUserData({
            name: user.name,
            email: user.email,
            role: user.role,
            avatar: user.avatar
        })
    },[user]);

    useEffect(() => {
        if(user.avatar){
            getAvatarApi(user.avatar).then(response =>{
                setAvatar(response);
            });
        }else{
            setAvatar(null);
        }
    }, [user]);

    return (
        <>
        <div className='edit-user-form'>
            <UploadAvatar avatar={avatar} setAvatar={setAvatar}></UploadAvatar>
       </div>
       <div style={{padding: "10px"}}>
            { (userData) ?
                <EditForm 
                    userData={userData}
                    setUserData={setUserData}
                    updateUser={updateUser}
                ></EditForm>
            :
            null
            }
       </div>
        
        
        </>
    )
}

function UploadAvatar(props){
    const {avatar, setAvatar} = props;
    const [avatarUrl, setAvatarUrl] = useState(null);

    useEffect(() => {
        if(avatar){
            if(avatar.preview){
                setAvatarUrl(avatar.preview);
            }else{
                setAvatarUrl(avatar);
            }
        }else{
            setAvatarUrl(null);
        }
    });

    const onDrop = useCallback(
        acceptedFiles => {
            const file = acceptedFiles[0];
            setAvatar({file, preview: URL.createObjectURL(file) });
        },[setAvatar]
    );

    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        accept: "image/jpeg, image/png",
        noKeyboard: true,
        onDrop
    })

    return(
        <div className='upload-avatar' {...getRootProps()} >
            <input {...getInputProps()} ></input>
            {isDragActive ? (
                <Avatar size={150} src={noAvatar}></Avatar>
            ):(
                <Avatar size={150} src={avatarUrl ? avatarUrl : noAvatar}></Avatar>
            )}
        </div>
    )
}

function EditForm(props){
    const { userData, setUserData, updateUser} = props;

    const { email, name, role} = userData;

    const {Option} = Select;

    const onFinish = (values) => {
        setUserData(values);
        updateUser();
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleChangeSelect = () => {
        console.log("selected")
    }
    return(
        <Form
            name="basic"
            layout="vertical"            
            initialValues={{
                remember: true,
                username: name,
                email: email,
                rol: role

            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            requiredMark={false}
        >
        <Row gutter={24}>
            <Col span={12}>
            <Form.Item
                label="Username"
                name="username"  
                rules={[
                {
                    required: true,
                    message: 'Please input your username!',
                },
                ]}
            >
                <Input/>
            </Form.Item>
            
            </Col>
            <Col span={12}>                
            <Form.Item
                label="Rol"
                name="rol"            
                rules={[
                {
                    required: true,
                },
                ]}
            >
                <Select onChange={handleChangeSelect} size="large">
                    <Option value="Admin">Administrador</Option>
                    <Option value="User">User</Option>
                </Select>
            </Form.Item>
            </Col>
            
        </Row>

        <Form.Item
            label="Email"
            name="email"            
            rules={[
            {
                required: true,
                message: 'Please input your email!',
            },
            ]}
        >
            <Input />
        </Form.Item>
        <Row gutter={24}>
            <Col span={12}>
            <Form.Item
                label="Password"
                name="password"
                rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
                ]}
            >
                <Input.Password style={{borderRadius: "6px", padding: "0px 11px" }}/>
            </Form.Item>
            </Col>
            <Col span={12}>
            <Form.Item
                label="Repeat"
                name="passwordRepeat"
                rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
                ]}
            >
                <Input.Password style={{borderRadius: "6px", padding: "0px 11px" }}/>
            </Form.Item>
            </Col>
        </Row>
        <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
            offset: 1,
            span: 16,
            }}
        >
            <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
        >
            <Button type="primary" htmlType="submit" style={{width:"100%"}}>
            Submit
            </Button>
        </Form.Item>
        </Form>
    )
}