import React from 'react'
import {Link} from 'react-router-dom'

const Main = () => {
    return(
        <nav className='nav-wrapper darken-3' style={{background:"teal"}} >
            <div className="container">
            <a className='brand-logo'>Employee </a>
                <ul className="right">
          <li>  <Link to='/'>Home</Link> </li>
           <li> <Link to = '/Registration'>Registration</Link></li>
           <li> <Link to = '/Login'>Login</Link></li>
        </ul>
        </div>
        </nav>
    )
}

export default  Main;