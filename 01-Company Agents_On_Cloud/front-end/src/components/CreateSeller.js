import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
const CreateSeller = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  let history = useHistory();
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const sava = () => {
    const data = {
      name: name,
      email: email,
      phone: phone,
      type : "seller"
    };
    axios.post(`createSeller`, data).then((res) => {
      if (res.data.result) {
        history.push(`/`);
      }
    });
  };

  return (
    <div>
         <div className="container" style={{ marginTop: "65px", marginLeft: "8%" }}>
      <div className="col" style={{width:"50%",marginLeft:"20%"}}>
        <h3 class="text-center">
          <strong>Create Seller</strong>
        </h3><br></br>
        <div class="form-group">
          <input class="form-control" type="text" name="name" placeholder="Enter Name " onChange={handleNameChange} />
        </div>
        <div class="form-group">
          <input class="form-control" type="email" name="email" placeholder="Enter Email " onChange={handleEmailChange} />
        </div>
        <div class="form-group">
          <input class="form-control" type="text" placeholder="Enter Phone" name="phone" onChange={handlePhoneChange} />
        </div>
        <div class="form-group">
          <input class="btn btn-success btn-block" onClick={sava} value="Submit" />
        </div>
      </div>
      </div>
    </div>
  );
};
export default CreateSeller;
