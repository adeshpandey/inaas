import React, { Component } from "react";
import { Typography } from "antd";

const { Title } = Typography;

export class Problem extends Component {
  render() {
    return (
      <div>
        <Title level={3}>Incrementing Integers As A Service</Title>
        <Title level={4}>User Story</Title>
        <p>
          As a developer, I need a way to get integers that automatically
          increment so that I can generate identifiers from within my code. I am
          in a hurry and would like to call a REST endpoint that returns the
          next available integer so that I can get on with building my feature.
          Why I need to generate identifiers using sequential integers is not
          important ;) Suffice it to say that this challenge is based on a
          real-world scenario.
        </p>
        <Title level={4}>Your Task</Title>
        <p>Develop a REST service that: </p>
        <ul>
          <li>
            Allows me to register as a user.At a minimum, this should be a REST
            endpoint that accepts an email address and a password and returns an
            API key.
          </li>
          <li>
            Returns the next integer in my sequence when called. For example, if
            my current integer is 12, the service should return 13 when it is
            called. The endpoint should be secured by an API key. I should not
            have to provide the previous value of the integer for this to work.
            Fetching the next integer should cause my current integer to
            increment by 1 on the server so that if I call the endpoint again, I
            get the next integer in the sequence.
          </li>
          <li>
            Allows me to fetch my current integer. For example, if my current
            integer is 12, the service should return 12. The endpoint should be
            secured by API key.
          </li>
          <li>
            Allows me to reset my integer to an arbitrary, non-negative value.
            For example, my integer may be currently 1005. I would like to reset
            it to 1000. The endpoint should be secured by API key.
          </li>
        </ul>
        <Title level={4}>Stretch Goals</Title>
        <ul>
          <li>
            Build a UI for the service, especially the account creation
            functionality. a. Take it a step further and build the UI as a
            single page app that consumes your API.
          </li>
          <li>
            Allow sign up using OAuth a. Github, Facebook, Google — anything
            that supports it!
          </li>
          <li>
            Deploy your API and include the link in your README so we can try it
            out without having to run it.
          </li>
        </ul>
      </div>
    );
  }
}

export default Problem;
