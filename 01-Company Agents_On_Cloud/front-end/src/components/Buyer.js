import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Buyer = () => {
  const [seller, setSeller] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    getSeller();
  }, [search]);
  const getSeller = () => {
    axios.get("getSeller").then((res) => {
      console.log(res.data);
      setSeller(res.data);
    });
  };
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  const findSearchName = () => {
    setSeller(
      seller.filter((e) => {
        return e.name.toUpperCase().indexOf(search.toUpperCase()) !== -1;
      })
    );
  };

  const data = seller.map((e, i) => {
    return (
      <div className="col" key={i}>
        <div className="card-header">{e.name}</div>
        <div className="card-body">
          <p className="card-title">Email : {e.email}</p>
          <p className="card-text">Phone : {e.phone}</p>
          <p className="card-text">Type : {e.type}</p>
          <Link to={"/createReservation/"  + e.id_seller} params={{id_seller:e.id_seller}}> 
             <button  className="btn btn-primary">
             Appointment Request 
              </button>
              </Link>
        </div>
      </div>
    );
  });
  return (
    <div><br></br>
      <div className="container">
        <div className="row justify-content-md-center">
          <input type="search" placeholder="Search Name..." className="form-control" name="search" value={search} onChange={handleSearchChange} style={{width:"80%",marginLeft:"15px"}} />
          <button onClick={findSearchName} className="btn btn-primary">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
      <br></br>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">{data}</div>
      </div>
    </div>
  );
};
export default Buyer;
