import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Planets from './components/Planets'
import People from './components/People'
import { ReactQueryDevtools } from 'react-query-devtools'
import { Container } from 'react-bootstrap'

const App = () => {
  const [page, setPage] = useState('planets')

  return (
    <>
      <div>
        <h1>Star Wars Info</h1>
        <Navbar setPage={setPage} />
        <Container className='content'>
          { page === 'planets' ? <Planets /> : <People /> }
        </Container>
      </div>
      <Footer />
    </>
  )
}

export default App

// {<ReactQueryDevtools initialIsOpen={false} />}
