import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "reactstrap";
import ContactList from "../../Components/ContactList/ContactList";
import Header from "../../Components/Header/Header";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [contact, setContact] = useState<any>([]);

  const id = localStorage.getItem("id");

  const getAllContacts = async () => {
    const response = await axios.get(
      `http://localhost:8000/contact/getbyid/${id}`
    );
    if (response.status === 200) {
      const data = response;
      console.log(data.data);
      setContact(data.data);
    }
  };

  useEffect(() => {
    getAllContacts();
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <div className="pt-5">
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <h4>Welcome</h4>
              <p>Here are the list of your contacts.</p>
            </div>
            <Link to="/create-contact">+ Add new contact</Link>
          </div>
          <div>
            {contact &&
              contact.map((info: any, key: number) => (
                <ContactList
                  name={info.fullName}
                  phone={info.phone}
                  key={key}
                  id={info._id}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
