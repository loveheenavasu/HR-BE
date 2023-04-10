import React from "react";
const axios = require("axios");
import {
  Button,
  Typography,
  DatePicker,
  Box,
  TextInput,
  ToggleInput,
} from "@strapi/design-system";
import {
  ModalLayout,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from "@strapi/design-system";
import { useState } from "react";
import "../../style.css";
// const jwt = require("jsonwebtoken");
// import { Information } from "@strapi/icons";

const adminControl = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [date, setDate] = useState();
  const [checked, setChecked] = useState(true);

  const [content, setContent] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone_number: "",
    role: "manager",
  });

  const valueHander = (e) => {
    setContent({
      ...content,
      [e.target.name]: e.target.value,
    });
  };

  const frontendData = () => {
    fetch("http://localhost:1337/login",)
    .then((response) => response.json())
    .then((data)=>{
      console.log(data,"data from frontend")
    })
  }
  frontendData()

  const submitHandler = (e) => {
    e.preventDefault();
    
    // const token = jwt.sign({ data: content }, "vicky-harpreet");
  
    fetch("http://localhost:1337/api/users-data", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        // "Authorization": `Bearer ${token}` // add the JWT token to the headers
      },
      body: JSON.stringify({ data: content }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response:", data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <>
      {isVisible && (
        <ModalLayout
          onClose={() => setIsVisible((prev) => !prev)}
          labelledBy="title"
        >
          <ModalHeader>
            <Typography
              fontWeight="bold"
              textColor="neutral800"
              as="h2"
              id="title"
            >
              Enter new Manager Here
            </Typography>
          </ModalHeader>
          <ModalBody>
            <DatePicker
              onChange={setDate}
              selectedDate={date}
              label="Date of joining"
              name="datepicker"
              clearLabel="Clear the datepicker"
              onClear={() => setDate(undefined)}
              selectedDateLabel={(formattedDate) =>
                `Date picker, current is ${formattedDate}`
              }
            />
            <ToggleInput
              class="toggle-button"
              size="S"
              onLabel="Manager"
              offLabel="User"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
            <form>
              <Box padding={10}>
                <TextInput
                  placeholder="Enter Your First Name"
                  label="First Name"
                  name="firstname"
                  type="text"
                  value={content.firstname}
                  onChange={(e) => valueHander(e)}
                  required
                />
                <TextInput
                  placeholder="Enter Your Last Name"
                  label="Last Name"
                  name="lastname"
                  type="text"
                  value={content.lastname}
                  onChange={(e) => valueHander(e)}
                />
                <TextInput
                  placeholder="Enter Your Email"
                  label="Email"
                  name="email"
                  type="email"
                  value={content.email}
                  onChange={(e) => valueHander(e)}
                  required
                />
                <TextInput
                  placeholder="Enter Your Password"
                  label="Password"
                  name="password"
                  type="password"
                  value={content.password}
                  onChange={(e) => valueHander(e)}
                  required
                />
                <TextInput
                  placeholder="Enter Your Phone Number"
                  label="Phone Number"
                  type="text"
                  name="phone_number"
                  value={content.phone_number}
                  onChange={(e) => valueHander(e)}
                  required
                />
              </Box>
              <Button variant="secondary" onClick={submitHandler}>
                Add New Manager
              </Button>
            </form>
          </ModalBody>
          <ModalFooter
            startActions={
              <Button
                onClick={() => setIsVisible((prev) => !prev)}
                variant="tertiary"
              >
                Cancel
              </Button>
            }
            endActions={
              <>
                <Button onClick={() => setIsVisible((prev) => !prev)}>
                  Finish
                </Button>
              </>
            }
          />
        </ModalLayout>
      )}
      <div>
        <h1>{/* welcome to the admin control panel */}</h1>
        <div>
          <div>
            <label>
              {" "}
              Add New Manager
              <button onClick={() => setIsVisible((prev) => !prev)}>add</button>
            </label>
          </div>
          <div>
            <label>
              {" "}
              Add New Employee
              <Button variant="secondary">Add</Button>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
export default adminControl;
