import React, { useState, useEffect } from "react";
import axios from "axios";

const Seller = () => {
  const [buyer, setBuyer] = useState([]);
  useEffect(() => {
    getReservationRequest();
  });
  const getReservationRequest = () => {
    axios.get("getReservationRequest").then((res) => {
      setBuyer(res.data);
    });
  };
 
  const accept = (e)=>{
    let data = {
      accept_reject : "Accept"
    }
    axios.put(`getAcceptReject/${e}`,data).then((res) => {
     // setIdSeller();
    });
  }
  const reject = (e)=>{
    let data = {
      accept_reject : "Reject"
    }
    axios.put(`getAcceptReject/${e}`,data).then((res) => {
     // setIdSeller();
    });
  }
  const data = buyer.map((e, i) => {
    return (
      <div className="col" key={i}>
        <div className="card-header">{e.name_buyer}</div>
        <div className="card-body">
          <p className="card-title">Email : {e.email_buyer}</p>
          <p className="card-text">Date : {e.Reservation_date}</p>
          <p className="card-text">State : {e.accept_reject}</p>
          <span>
            <button className="btn btn-primary" style={{ marginLeft: "30px" }}   onClick={() => {
                    accept(e.id_buyer);
                  }}>Accept
            </button>
            <button className="btn btn-danger" style={{ marginLeft: "30px" }} onClick={() => {
                    reject(e.id_buyer);
                  }}>
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
export default Seller;
