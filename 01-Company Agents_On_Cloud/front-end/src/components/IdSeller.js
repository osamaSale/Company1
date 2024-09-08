import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const IdSeller = () => {
  let { id_seller } = useParams();
  const [IdSeller, setIdSeller] = useState([]);
  useEffect(() => {
    getIdReservationRequest();
  }, []);

  const getIdReservationRequest = () => {
    axios.get(`getIdReservationRequest/${id_seller}`).then((res) => {
      console.log(res.data);
      setIdSeller(res.data);
    });
  };

  const accept = (id) => {
    let data = {
      accept_reject: "Accept",
    };
    axios.put(`getAcceptReject/${id}`, data).then((res) => {
      // setIdSeller();
    });
  };
  const reject = (id) => {
    let data = {
      accept_reject: "Reject",
    };
    axios.put(`getAcceptReject/${id}`, data).then((res) => {
      // setIdSeller();
    });
  };
  let data = IdSeller.map((e, i) => {
    return (
      <div className="col" key={i}>
        <div className="card-header">{e.name_buyer}</div>
        <div className="card-body">
          <p className="card-title">Email : {e.email_buyer}</p>
          <p className="card-text">Date : {e.Reservation_date}</p>
          <span>
            <button
              className="btn btn-primary"
              style={{ marginLeft: "30px" }}
              onClick={(id) => {
                accept(id.id_buyer);
              }}
            >
              Accept
            </button>
            <button
              className="btn btn-danger"
              style={{ marginLeft: "30px" }}
              onClick={(id) => {
                reject(id.id_buyer);
              }}
            >
              Reject
            </button>
          </span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <br></br>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">{data}</div>
      </div>
    </div>
  );
};
export default IdSeller;
