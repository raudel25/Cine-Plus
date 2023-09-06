import {
  UserOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import { Form, Input, Button, Typography } from "antd";

const Register = () => {
  const validatePassword = () => {
    return Promise.reject("aaa");
  };

  return (
    <div className="auth-box">
      <div className="center-content mt-5 mb-5">
        <Typography>
          <Typography.Title>Cine Plus</Typography.Title>
        </Typography>
      </div>

      <Form className="m-5">
        <Form.Item
          name="user"
          rules={[
            { required: true, message: "Please introduce your email or user" },
          ]}
        >
          <Input
            prefix={<UserOutlined />}
            placeholder="Introduce your email or user"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            { required: true, message: "Please introduce your password" },
          ]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Introduce your password"
          />
        </Form.Item>

        <Form.Item name="confirm" rules={[{ validator: validatePassword }]}>
          <Input
            prefix={<EyeInvisibleOutlined />}
            type="password"
            placeholder="Confirm your password"
          />
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit" type="primary" className="auth-btn">
            Register
          </Button>
        </Form.Item>
      </Form>

      <div className="center-content">
        <Typography.Paragraph>
          <Typography.Text>Already have an account? </Typography.Text>
          <Typography.Link href="/auth/login">Login.</Typography.Link>
        </Typography.Paragraph>
      </div>
    </div>
  );
};

export default Register;
