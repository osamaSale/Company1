import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useHistory } from "react-router-dom";

const CreateReservation = () => {
  let { id_seller } = useParams();
  const [seller, setSeller] = useState("");
  const [name_buyer, setNameBuyer] = useState("");
  const [email_buyer, setEmailBuyer] = useState("");
  const [Reservation_date, setReservationDate] = useState("");
  let history = useHistory();
  const handleNameBuyerChange = (e) => {
    setNameBuyer(e.target.value);
  };
  const handleEmailBuyerChange = (e) => {
    setEmailBuyer(e.target.value);
  };
  const handleReservationDateChange = (e) => {
    setReservationDate(e.target.value);
  };
  const getIdSeller = () => {
    axios.get(`getIdSeller/${id_seller}`).then((res) => {
      //   console.log(res.data);
      setSeller(res.data);
      // console.log(res.data[0].id_seller)
    });
  };
  useEffect(() => {
    getIdSeller(id_seller);
    console.log(id_seller);
  }, []);

  const sava = () => {
    const data = {
      id_seller: id_seller,
      name_buyer: name_buyer,
      email_buyer: email_buyer,
      Reservation_date: Reservation_date,
    };
    axios.post(`createReservationRequest`, data).then((res) => {
      if (res.data.result) {
        history.push(`/Seller`);
      }
    });
  };
  return (
    <div>
      <div className="container" style={{ marginTop: "65px", marginLeft: "8%" }}>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {seller && (
            <div className="col" style={{ width: "22rem", marginTop: "65px", marginBottom: "30px" }}>
              <div className="card">
                <div className="card-body">
                  <p>{seller[0].name}</p>
                  <h6 className="card-subtitle mb-2 text-muted">{seller[0].email}</h6>
                  <p className="card-text">{seller[0].phone}</p>
                  <Link to={"/IdSeller/" + seller[0].id_seller} params={{ id_seller: id_seller }}>
                    <button className="btn btn-primary">Profile Seller</button>
                  </Link>
                </div>
              </div>
            </div>
          )}
          <div className="col">
            <h3 class="text-center">
              <strong>Appointment Request</strong>
            </h3>
            <div class="form-group">
              <input class="form-control" type="text" name="name_buyer" placeholder="Enter Name Buyer" onChange={handleNameBuyerChange} />
            </div>
            <div class="form-group">
              <input class="form-control" type="email" name="email_buyer" placeholder="Enter Email Buyer" onChange={handleEmailBuyerChange} />
            </div>
            <div class="form-group">
              <input class="form-control" type="date" name="Reservation_date" onChange={handleReservationDateChange} />
            </div>
            <div class="form-group">
              <input class="btn btn-success btn-block" onClick={sava} value="Submit" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateReservation;
