import React from 'react'
import { Link } from 'react-router-dom'
function App() {
  return (
  <>
   <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container'>
        <Link className='navbar-brand d-flex align-item-center' to={"/"}>
      <img src='h.jpg' width={"40"} height={"40"} className='me-2 rounded-circle'>my app</img> 
        </Link>
        <button className='navbar-toggler' type="button" data-bs-toggle="collapse" 
        data-bs-target="#navbar menu">
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbar menu'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <Link className='nav-link' to={"/"}>home</Link>
               <Link className='nav-link' to={"/"}>contact</Link>
                <Link className='nav-link' to={"/"}>about</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

</>
    
  )
}
export default App
