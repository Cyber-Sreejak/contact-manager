import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Input, Label } from "reactstrap";
import Header from "../../Components/Header/Header";
import "./CreateContact.css";

const CreateContact = () => {
  const navigate = useNavigate();
  const id = localStorage.getItem("id");

  const [name, setName] = useState<any>("");
  const [email, setEmail] = useState<any>("");
  const [phone, setPhone] = useState<any>(0);
  // const [uploadPhoto, setUploadPhoto] = useState<any>("");

  // const handleUploadPhoto = (e: any) => {
  //   setUploadPhoto(e.target.files[0]);
  // };

  const nameChangeHandler = (e: any) => {
    setName(e.target.value);
  };
  const emailChangeHandler = (e: any) => {
    setEmail(e.target.value);
  };
  const phoneChangeHandler = (e: any) => {
    setPhone(e.target.value);
  };

  const payload = {
    fullName: name,
    email: email,
    phone: phone,
    contactId: id,
    // imageUrl: uploadPhoto,
  };

  const handleContactCreate = async (e: any) => {
    const response = await axios.post(
      "http://localhost:8000/contact/create",
      payload
    );
    if (response.status === 200) {
      console.log("Successfully Created");
      navigate("/");
      window.location.reload();
    }
    // console.log(uploadPhoto);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="contact-create-form">
          <div className="mb-2">
            <Label>Full Name</Label>
            <Input type="text" onChange={nameChangeHandler} value={name} />
          </div>
          <div className="mb-2">
            <Label>Number</Label>
            <Input type="number" onChange={phoneChangeHandler} value={phone} />
          </div>
          <div className="mb-2">
            <Label>Email</Label>
            <Input type="email" onChange={emailChangeHandler} value={email} />
          </div>
          {/* <div className="mb-2">
            <Label>Upload Photo</Label>
            <Input type="file" onChange={handleUploadPhoto} />
          </div> */}
          <div className="my-4">
            <Button block color="primary" onClick={handleContactCreate}>
              Create Contact
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateContact;
