import React, { useState } from "react";
import {
  Button,
  BaseHeaderLayout,
  Box,
  Breadcrumbs,
  Field,
  FieldInput,
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

  // const [data, setData] = useState({
  //   Firstname: "",
  //   Lastname: "",
  //   Email: "",
  //   Password: "",
  // });

  const checkHandler = async (e) => {
    e.preventDefault();

    if (inputData.Email) {
      let body = {
        Email: inputData.Email,
        Password: inputData.Password,
      };

      try {
        const response = await fetch("http://localhost:1337/api/admincontrol", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        console.log(response, "response fetch");
        const data = await response.json();
        // console.log(data,"response data from the backend")

        if ( data.code === 200) {
          history.push("/plugins/admin-panel/admin-control");
        } else {
          console.log("error found");
        }

        // setData({
        //   Firstname: data.data.attributes.Firstname,
        //   Lastname: data.data.attributes.Lastname,
        //   Email: data.data.attributes.Email,
        //   Password: data.data.attributes.Password,
        // });

        // if (inputData.Email === data.Email) {
        //   if (inputData.Password === data.Password) {
        //     history.push("/plugins/admin-panel/admin-control");
        //   } else {
        //     console.log("error found");
        //   }
        // } else {
        //   console.log("error found");
        // }
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("email not found");
    }
  };

  const valueHandler = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <Box background="neutral100">
        <BaseHeaderLayout
          title="Welcome to the admin panel"
          subtitle={<Breadcrumbs label="folders"></Breadcrumbs>}
          as="h2"
        />
      </Box>
      <div className="loginForm">
        <form onSubmit={checkHandler}>
          <div>
            <Field name="Email">
              <Flex direction="column" alignItems="flex-start" gap={1}>
                <FieldInput
                  type={"Email"}
                  placeholder="Enter Your Email"
                  value={inputData.Email}
                  onChange={(e) => valueHandler(e)}
                />
                <FieldHint />
              </Flex>
            </Field>
          </div>
          <div>
            <Field name="Password">
              <Flex direction="column" alignItems="flex-start" gap={1}>
                <FieldInput
                  type={"password"}
                  placeholder="Enter Your Password"
                  value={inputData.Password}
                  onChange={(e) => valueHandler(e)}
                />
                <FieldHint />
              </Flex>
            </Field>
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
