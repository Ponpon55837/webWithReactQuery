import React from 'react'
import { navStyle } from '../style.js'
import { Button } from 'react-bootstrap'

const Navbar = ({ setPage }) => {

  return (
    <nav style={navStyle} className='py-3 mb-3'>
      <Button variant="outline-primary" onClick={() => setPage('planets')}>Planets</Button>
      <Button variant="outline-primary" onClick={() => setPage('people')}>People</Button>
    </nav>
  )
}

export default Navbar
