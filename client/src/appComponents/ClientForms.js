import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const ClientForms = () => {
  const [values, setValues] = useState({
      clientId: "",
      clientName:"",
      clientDesc: "",
      clientLocation:"",
      clientPhone:"",
      location:"",
      gpsAddress:"",
      billing:"",
      phoneNumber:"",
      email:"",
      serviceType:"",
      supportPerson:"",
      buttonText: "save"
  });
  
   const {clientName,clientDesc,clientLocation, location, clientPhone, gpsAddress, billing,phone_number,email,serviceType,supportPerson,clientId, buttonText} = values;

   const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
   }

   const clickSubmit = (e) => {
     e.preventDefault();
     setValues({...values, buttonText: "Saving"})
   }

  axios({
    method: "POST",
    url: `http://localhost:9000/api/v1/clients`,
    data: {clientName,clientDesc,clientLocation, location, clientPhone, gpsAddress, billing,email,serviceType,supportPerson}
  }).then((response) => {
    console.log("Data saved" , response);

    setValues({
      ...values,
      clientName:"",
      clientDesc: "",
      clientLocation:"",
      clientPhone:"",
      location:"",
      gpsAddress:"",
      billing:"",
      phoneNumber:"",
      email:"",
      serviceType:"",
      supportPerson:"",
      buttonText: "save"
    });

    toast.success(`Data saved successfully`);
  })
  .catch((error) => {
    console.log("SIGNIN ERROR");
    setValues({...values, buttonText:"save"});
    toast.error(`there was an error`);
  })

  const client = () => (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <section className="content-header">
        <h1>CREATE A CLIENT/CUSTOMER</h1>
      </section>
      {/* Main content */}
      <section className="content">
        <div className="row">
          {/* left column */}
          <div className="col-md-6">
            {/* general form elements */}
            <div className="box box-primary">
              <div className="box-header with-border">
                <h3 className="box-title">CLIENT/CUSTOMER INFORMATION</h3>
              </div>
              {/* /.box-header */}
              {/* form start */}
              <form>
                <div className="box-body">
                <div className="form-group">
                <label htmlFor="inputName">Client ID</label>
                <input
                  value={clientId}
                  onChange={handleChange("clientId")}
                  type="text"
                  className="form-control"
                  id="inputName"
                  placeholder="Enter Client ID"
                />
              </div>
                  <div className="form-group">
                    <label htmlFor="inputName">Client Name</label>
                    <input
                      value={clientName}
                      onChange={handleChange("clientName")}
                      type="text"
                      className="form-control"
                      id="inputName"
                      placeholder="Enter Client Name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">
                      Client Description
                    </label>
                    <input
                      value={clientDesc}
                      onChange={handleChange("clientDesc")}
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Enter Client Description"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">
                      Client Location
                    </label>
                    <input
                      value={clientLocation}
                      onChange={handleChange("clientLocation")}
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Enter client Location"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">
                      Location
                    </label>
                    <input
                      value={location}
                      onChange={handleChange("location")}
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Enter client Location"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">
                      Client Phone Number
                    </label>
                    <input
                      value={clientPhone}
                      onChange={handleChange("clientPhone")}
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Enter client Phone Number"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">
                      GH Post GPS Address
                    </label>
                    <input
                      value={gpsAddress}
                      onChange={handleChange("gpsAddress")}
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Enter GPS Address"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">
                      Client Email Address
                    </label>
                    <input
                      value={email}
                      onChange={handleChange("email")}
                      type="email"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Enter client Email"
                    />
                  </div>
                  <div className="form-group">
                    <label>Billing Circle</label>
                    <select
                      className="form-control select2"
                      style={{ width: "100%" }}
                      value={billing}
                      onChange={handleChange("billing")}
                    >
                      <option>WEEKLY</option>
                      <option>MONTHLY</option>
                      <option>YEARLY</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Client Support Person</label>
                    <select
                      className="form-control select2"
                      style={{ width: "100%" }}
                      value={supportPerson}
                      onChange={handleChange("supportPerson")}
                    >
                      <option>ISAAC</option>
                      <option>MIKE</option>
                      <option>AKWASI</option>
                      <option>ABAS</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Service Subscribed</label>
                    <select
                      className="form-control select2"
                      multiple="multiple"
                      data-placeholder="Select a State"
                      style={{ width: "100%" }}
                      value={serviceType}
                      onChange={handleChange("serviceType")}
                    >
                      <option>GP</option>
                      <option>POS</option>
                      <option>RMS</option>
                      <option>PASTEL</option>
                    </select>
                  </div>
                </div>
                {/* /.box-body */}
                <div className="box-footer">
                  <button type="submit" className="btn btn-primary" onClick={clickSubmit}>
                    Save Info
                  </button>
                </div>
              </form>
            </div>
            {/* /.box */}
          </div>
          <div className="col-md-6"></div>
          {/*/.col (right) */}
        </div>
        {/* /.row */}
      </section>
      {/* /.content */}
    </div>

  )

  return (
    <Fragment>
       
       {client()}
       {JSON.stringify({clientName, clientDesc,location,serviceType,billing})}
    </Fragment>
    
  );
};

export default ClientForms;
