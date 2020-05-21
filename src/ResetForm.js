import React, { Component } from "react";
import { notification, message, Input, Form, Button } from "antd";
import { API } from "aws-amplify";

export class ResetForm extends Component {
  formRef = React.createRef();

  resetCtr = (value) => {
    const { current } = value;
    const key = "updatable";
    message.loading({ content: "Loading...", key });
    API.post(
      "ApiGatewayRestApi", // function defined in our serverless.yml
      "/reset", // the function's path
      {
        responseType: "text",
        body: { current: parseInt(current) },
      }
    )
      .then((data) => {
        notification.success({
          message: "Notification",
          description: "Current value set to: " + data.current,
          onClick: () => {
            console.log("Notification Clicked!");
          },
        });
        message.destroy();
      })
      .catch((err) => {
        message.error({
          content: "Failed to update the value",
          key,
          duration: 2,
        });
      });
  };

  render() {
    return (
      <Form ref={this.formRef} name="control-ref" onFinish={this.resetCtr}>
        <Form.Item
          name="current"
          label="Enter new value"
          rules={[{ required: true }]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default ResetForm;
