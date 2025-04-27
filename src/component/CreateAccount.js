import React from "react";
const CreateAccount=()=>{
    return(
        <div><center><h1>Account</h1></center><hr/>
        
        <div className="row">
<div className="col-md-4"></div>
<div className="col-md-4">



Enter Name
<input type="text" className="form-control" id="n"></input>
Father Name
<input type="text" className="form-control" id="f"></input>

<div className="row">
    <div className="col">
        Email
        <input type="text" className="form-control" id="e"></input>
    </div>
    <div className="col">
        Phone
        <input type="text" className="form-control" id="p"></input>
    </div>
</div>

Gender
<input type="text" className="form-control" id="g"></input>

<div className="row">
    <div className="col">
        Country
        <input type="text" className="form-control" id="c"></input>
    </div>
    <div className="col">
        State
        <input type="text" className="form-control" id="s"></input>
    </div>
    <div className="col">
        City
        <input type="text" className="form-control" id="ci"></input>
    </div>
</div>
<br/>   
<input type="submit" value="Create" className="btn btn-danger"></input>


</div>
<div className="col-md-4"></div>


        </div>
        
        
        
        
        </div>
    )
}
export default CreateAccount;