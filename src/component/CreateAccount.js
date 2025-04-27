import React from "react";

const CreateAccount = () => {
  const msg = ""; // Added this to avoid error for {msg}

  return (
    <div>
      <h1><center>Create Account Page</center></h1>
      <hr />
      <center>
        <div className="row">
          <hr />
          <center><h3>{msg}</h3></center>
          <hr />
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="form-floating mb-3">
              <input type="number" className="form-control" id="pinInput" placeholder="PIN" />
              <label htmlFor="pinInput">PIN</label>
            </div>

            <div className="row">
              <div className="col">
                <input type="text" className="form-control" placeholder="Name"  />
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="Father's Name"   />
              </div>
            </div><br />

            <div className="row">
              <div className="col">
                <input type="email" className="form-control" placeholder="E-mail"   />
              </div>
              <div className="col">
                <input type="number" className="form-control" placeholder="Phone Number"   />
              </div>
            </div><br />

            <div className="row">
              <div className="col">
                <input type="text" className="form-control" placeholder="Country"  />
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="State"   />
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="City"   />
              </div>
            </div><br />

            <div className="form-floating mb-3">
              <input type="number" className="form-control"   placeholder="Amount" />
              <label htmlFor="amountInput">Amount</label>
            </div><br />

            <input type="submit" value="Create Account" className="btn btn-primary" />
          </div>
        </div>
      </center>
    </div>
  );
};

export default CreateAccount;
