import React from "react";
import axios from "axios";
import { Button } from "reactstrap";
import "./ContactList.css";
import { Link, useNavigate } from "react-router-dom";

const ContactList = (props: any) => {
  const navigate = useNavigate();
  const { name, phone, id } = props;

  const deleteContactHandler = async (id: any) => {
    const response = await axios.delete(
      `http://localhost:8000/contact/delete/${id}`
    );
    if (response.status === 200) {
      console.log("Deleted Successfully");
      window.location.reload();
    } else {
      console.log("Couldn't delete");
    }
  };
  return (
    <div className="contact-list">
      <div>
        <h5 className="mb-1">{name}</h5>
        <p className="mb-0">{phone}</p>
      </div>
      <div>
        <Link to={`/contact/detail/${id}`} className="btn btn-primary me-2">
          View
        </Link>
        <Link to={`/contact/detail/${id}`} className="btn btn-warning me-2">
          Edit
        </Link>
        <Button
          color="danger"
          primary
          onClick={deleteContactHandler.bind(null, id)}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ContactList;
