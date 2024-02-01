import { useState } from 'react'
import './App.css'
import tablePic from './assets/background13.jpg';
import foodPic from './assets/food1.jpg';

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setFirstName("");
    setLastName("");
    console.log("Form submitted!");
  };

  return (
    <>
    <section className='w-full min-h-screen flex flex-col items-center'>
        <h2 className='title text-center'>Little Lemon</h2>
        <h3 className='text-center'>Find a table for any occasion</h3>
        <div className='flex items-center justify-center'>
          <img src={tablePic} alt='table pic' className='w-1/3 h-auto'/>
          <img src={foodPic} alt='food pic' className='w-1/3 h-auto' />
        </div>
        <form onSubmit={handleSubmit} className='w-full max-w-md'>
          <div>
            <label htmlFor='firstName'>First Name</label>
            <input 
              type='text' 
              id='firstName' 
              placeholder='First name' 
              name='first name' 
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              />
          </div>
          <div>
            <label htmlFor='lastName'>Last Name</label>
            <input 
              type='text' 
              id='lastName' 
              placeholder='Last name' 
              name='last name' 
              value={lastName} 
              onChange={(e) => setLastName(e.target.value)}
              />
          </div>
          <div>
            <label htmlFor='res-date'>Choose date</label>
            <input type="date" id="res-date" />
          </div>
          <div>
            <label htmlFor='res-time'>Choose time</label>
            <select id="res-time">
              <option>17:00pm</option>
              <option>18:00pm</option>
              <option>19:00pm</option>
              <option>20:00pm</option>
              <option>21:00pm</option>
              <option>22:00pm</option>
            </select>
          </div>
          <div>
            <label htmlFor='guests'>Number of guests</label>
            <input type="number" placeholder='2' min="1" max="10" id="guests" />
          </div>
          <div>
            <label htmlFor='occasion'>Occasion</label>
            <select id="occasion">
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
          </div>
          <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-auto'>Make Your Reservation</button>
        </form>
    </section>
    </>
  )
}

export default App
