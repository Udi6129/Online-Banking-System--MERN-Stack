import React from "react";
import { Link } from "react-router-dom";
function Navbar()
{
    return(
 <div>
   <nav class="navbar navbar-expand-lg navbar-dark bg-success">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">React</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
         
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/About">About</Link>
         
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Contact">Contact</Link>
         
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/CreateAccount">CreateAccount</Link>
         
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Withdraw">Withdraw</Link>
         
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Deposit">Deposit</Link>
         
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/FundTransfer">FundTransfer</Link>
         
        </li>
        </ul>
    </div>
  </div>
</nav>

        </div>
    )
}
export default Navbar;