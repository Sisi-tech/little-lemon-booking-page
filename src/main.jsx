import React from 'react'
import ReactDOM from 'react-dom/client'
import BookingForm from './BookingForm.jsx'
import NavBar from './Navbar.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <BookingForm />
  </React.StrictMode>,
)
