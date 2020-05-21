import React, { Component } from "react";
import Title from "antd/lib/typography/Title";
import { Row, Col, List, Avatar, Card } from "antd";
import flow from "./flow.png";

import { CheckOutlined } from "@ant-design/icons";
export class About extends Component {
  render() {
    const data = [
      { title: "AWS S3 for Frontend hosting." },
      { title: "AWS Cognito for user authentication and authorization" },
      { title: "AWS API Gateway for the high performance API" },
      { title: "AWS DynamodB for storing data" },
      { title: "AWS Lambda to write serverless code" },
      { title: "Flask to write API" },
      {
        title: "Serverless framework used to orchstrate all the above services",
      },
    ];

    const dataProgramming = [
      { title: "React for Front-End" },
      { title: "Python for the Back-End" },
      { title: "Yaml for the orchestration config" },
    ];

    const dataResources = [
        {
            title:'Github Repo',
            url:'https://github.com/adeshpandey/inaas'
        },
        {
            title:'Current API Link',
            url:'https://46p3m1rohj.execute-api.us-west-2.amazonaws.com/v1/current'
        },
        {
            title:'Next API Link',
            url:'https://46p3m1rohj.execute-api.us-west-2.amazonaws.com/v1/next'
        },
        {
            title:'Reset API Link',
            url:'https://46p3m1rohj.execute-api.us-west-2.amazonaws.com/v1/reset'
        },
        {
            title:'FrontEnd URL',
            url:'https://vasitum.s3-us-west-2.amazonaws.com'
        },
    ]

    return (
      <div>
        <Card style={{ marginBottom: 15 }}>
          <Title level={3}>Architecture Flow</Title>
          <Row>
            <Col>
              <img alt="example" style={{ width: "100%" }} src={flow} />
            </Col>
          </Row>
        </Card>
        <Card style={{ marginBottom: 15 }}>
          <Title level={3}>Services Used</Title>
          <List
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar icon={<CheckOutlined />} />}
                  title={item.title}
                />
              </List.Item>
            )}
          ></List>
        </Card>
        <Card style={{ marginBottom: 15 }}>
          <Title level={3}>Programming Used</Title>
          <List
            dataSource={dataProgramming}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar icon={<CheckOutlined />} />}
                  title={item.title}
                />
              </List.Item>
            )}
          ></List>
        </Card>
        <Card style={{ marginBottom: 15 }}>
          <Title level={3}>Useful Resources</Title>
          <List
            dataSource={dataResources}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar icon={<CheckOutlined />} />}
                  title={<a href={item.url}>{item.title} [ <strong>{item.url}</strong> ]</a>}
                />
              </List.Item>
            )}
          ></List>
        </Card>
        <Card style={{ marginBottom: 15 }}>
          <Title level={3}>Why this architecture?</Title>
          <p>
              I could easily do this assignment using Flask or Django in Python or Laravel in PHP which might take hardly 2-3 hours but I wanted to strech my abilities with this assignment too so I chose above architecture.I hope you find my implementation interesting.
          </p>
        </Card>
      </div>
    );
  }
}

export default About;
