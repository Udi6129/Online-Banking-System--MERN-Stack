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
            <label htmlFor="pinInput">Enter Receiver's account number</label>
          </div>
          <div class="form-floating mb-3">
            
                            <input type="password" class="form-control" name="p" placeholder="Enter your PIN" required/>
                            <label>Enter amount to transfer</label>
                       </div>
          <input type="submit" value="Transfer" className="btn btn-primary" />
        </div>
      </div>
    </div>
  );
};

export default Deposit;
