import React from 'react'
import { Link,NavLink } from 'react-router-dom'
const Navbar=()=>{
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" to ="#">React User</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" exact to="/">Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link active" aria-current="page"exact to="/about">About</NavLink>
         </li>
        <li className="nav-item">
        <NavLink className="nav-link active" aria-current="page"exact to="/contact">Contact</NavLink>
               
        </li>

      </ul>
     
    </div>
  </div>
  <Link className="btn btn-outline-light"  to="/users/add">Add User</Link>


</nav>
        </div>
    )
}
export default Navbar