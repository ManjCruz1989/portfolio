import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {

const [toggle, setToggle] = useState(false);

const handleCLick = () => {
setToggle(!toggle);
return toggle
}

  return (
    <div className='nav'>
      <Link to="/" className='logo'><div>CWD</div></Link>
      <div className='nav-list'>
        <ul>
            <Link to="/about" className='link'><li>About</li></Link>
            <Link to="/projects" className='link'><li>Projects</li></Link>
            <Link to="/contact" className='link'><li>Contact</li></Link>
        </ul>
      </div>
      <div className='nav-dropdown' tabIndex={0} onClick={handleCLick}>
          <span><hr/></span>
          <span><hr/></span>
          <span><hr/></span>
          {toggle ? <div className='dropdown' tabIndex={0}>
                         <ul>
                            <Link to="/about" className='link'><li>About</li></Link>
                            <Link to="/projects" className='link'><li>Projects</li></Link>
                            <Link to="/contact" className='link'><li>Contact</li></Link>
                         </ul>
          </div>:null}
        </div>
    </div>
    
  )
}

export default Nav