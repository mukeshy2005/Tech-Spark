import React from 'react'
import Navbar from '../components/NavBar'
import Footer from '../Pages/Footer/Footer'

function Layout(props) {
  return (
    <div>
      <Navbar/> 
      <main>
      {props.children}
        </main> 
      <Footer ></Footer>
    </div>
  )
}

export default Layout