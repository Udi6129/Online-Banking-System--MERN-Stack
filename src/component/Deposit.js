import React from 'react';

const Deposit = () => {
  return (
    <div>
      <h1>Deposit Page</h1>
      <hr />
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div className="form-floating mb-3">
            <input type="number" className="form-control"id="pinInput" placeholder="Enter the amount" />
            <label htmlFor="pinInput">Amount</label>
          </div>
          <input type="submit" value="Deposit Money" className="btn btn-primary" />
        </div>
      </div>
    </div>
  );
};

export default Deposit;
