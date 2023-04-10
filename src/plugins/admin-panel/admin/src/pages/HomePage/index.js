import React, { useState } from "react";
import {
  Button,
  BaseHeaderLayout,
  HeaderLayout,
  Box,
  Breadcrumbs,
  Field,
  FieldInput,
  FieldLabel,
  Flex,
  FieldHint,
} from "@strapi/design-system";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory([]);
  const [inputData, setInputData] = useState({
    Email: "",
    Password: "",
  });

  const [data, setData] = useState({
    Firstname: "",
    Lastname: "",
    Email: "",
    Password: "",
  });

  // console.log("inputData initial value :: ", inputData, "\ndata :", data);

  const valueHandler = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
    console.log(inputData.Email, "emailemialemail");
  };

  const checkHandler = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:1337/api/admin-details/1")
      .then((response) => response.json())
      .then((data) => {
        setData({
          ...data,
          Firstname: data.data.attributes.Firstname,
          Lastname: data.data.attributes.Lastname,
          Email: data.data.attributes.Email,
          Password: data.data.attributes.Password,
        });
        // console.log("data updated value :: ", data);
      })
      .catch((error) => console.error(error));

    if (data.Email === inputData.Email && data.Email !== "") {
      history.push("/plugins/admin-panel/admin-control");
      // alert("helo");
    } else {
      console.log(error);
      // console.log(data.Email, inputData.Email, "shittttttttt");

      // console.log("ankushshshshshsh");
    }
  };
  // console.log(data?.Email, "inputDatainputData");
  //   console.log(data.Email, inputData.Email, "dataaaaaa");

  return (
    <div>
      <Box class="heading" background="neutral100">
        <BaseHeaderLayout
          title="Welcome to the admin panel"
          subtitle={<Breadcrumbs label="folders"></Breadcrumbs>}
          as="h2"
        />
      </Box>
      {/* <h1>Welcome to the admin panel</h1> */}
      <div className="loginForm">
        <form onSubmit={checkHandler}>
          <div>
            <Field name="email">
              <Flex direction="column" alignItems="flex-start" gap={1}>
                {/* <FieldLabel>Email</FieldLabel> */}
                <FieldInput
                  type={"email"}
                  placeholder="Enter Your Email"
                  defaultValue={inputData.Email}
                  onChange={(e) => valueHandler(e)}
                />
                <FieldHint />
              </Flex>
            </Field>
            {/* <label>
              Email
              <input
                name="Email"
                type={"email"}
                defaultValue={inputData.Email}
                onChange={(e) => valueHandler(e)}
              ></input>
            </label> */}
          </div>
          <div>
            <Field name="password">
              <Flex direction="column" alignItems="flex-start" gap={1}>
                {/* <FieldLabel>Password</FieldLabel> */}
                <FieldInput
                  type={"password"}
                  placeholder="Enter Your Email"
                  value={inputData}
                  onChange={(e) => valueHandler(e)}
                />
                <FieldHint />
              </Flex>
            </Field>
            {/* <label>
              Password
              <input
                name="Password"
                value={inputData}
                onChange={(e) => valueHandler(e)}
              ></input>
            </label> */}
          </div>
          <div>
            <Button variant="secondary" type="submit  ">
              AdminLogin
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
