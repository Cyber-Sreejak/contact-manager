import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import "./ContactDetailPage.css";
import { Button, Input, Label } from "reactstrap";

const ContactDetailPage = () => {
  const { id } = useParams();

  const [data, setData] = useState<any>({});

  const getViewContacyById = async () => {
    const response = await axios.get(`http://localhost:8000/contact/get/${id}`);
    console.log(response.data);
    setData(response.data);
  };

  const [name, setName] = useState<any>("");
  const [email, setEmail] = useState<any>("");
  const [phone, setPhone] = useState<any>();

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
  };

  const handleContactUpdate = async (e: any) => {
    const response = await axios.post(
      `http://localhost:8000/contact/update/${id}`,
      payload
    );
    if (response.status === 200) {
      console.log("Successfully updated");
      window.location.reload();
    }
  };

  useEffect(() => {
    getViewContacyById();
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <div className="detail-wrap">
          <div>
            <h2>Details</h2>
            <h3>Name: {data.fullName}</h3>
            <p>Number: {data.phone}</p>
            <p>Email: {data.email}</p>
          </div>
          <div className="contact-update-form">
            <h2>Edit details</h2>
            <div className="mb-2">
              <Label>Full Name</Label>
              <Input type="text" onChange={nameChangeHandler} value={name} />
            </div>
            <div className="mb-2">
              <Label>Number</Label>
              <Input
                type="number"
                onChange={phoneChangeHandler}
                value={phone}
              />
            </div>
            <div className="mb-2">
              <Label>Email</Label>
              <Input type="email" onChange={emailChangeHandler} value={email} />
            </div>
            <div className="my-4">
              <Button block color="primary" onClick={handleContactUpdate}>
                Update Contact
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetailPage;
