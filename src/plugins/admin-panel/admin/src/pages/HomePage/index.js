import React, { useState } from "react";
import { Button } from "@strapi/design-system";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();
  const [inputData, setInputData] = useState({
    Email: "",
    Password: "",
  });

  const [data, setData] = useState({
    // Firstname: "",
    // Lastname: "",
    Email: "",
    Password: "",
  });

  // console.log("inputData initial value :: ", inputData, "\ndata :", data);

  const valueHandler = (e) => {
    setInputData({
      ...inputData,
      Email:e.target.value
    })
  // console.log("inputData initial value :: ", inputData);

    // {e.target.Email}:e.target.value
    // console.log("input value for name ", e.target.name, ", is :::::: ", e.target.value);
    // // setInputData(e.target.value);
    // console.log("stateData:: ", inputData);
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

    if (data.Email === inputData.Email && data.Email !== '') {
      
      // history.push('/plugins/admin-panel/admin-control')
      console.log("hihihihihihihihihihihi");

    } else {
      console.log("shitshitshitshitshitshit");
    }
  };

  return (
    <div>
      <h1>Welcome to the admin panel</h1>
      <div>
        <form onSubmit={checkHandler}>
          <div>
            <label>
              Email
              <input
                name="Email"
                type={"email"}
                defaultValue={inputData.Email}
                onChange={(e) => valueHandler(e)}
              ></input>
            </label>
          </div>
          <div>
            <label>
              Password
              <input
                name="Password"
                value={inputData.Password}
                onChange={(e) => valueHandler(e)}
              ></input>
            </label>
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
