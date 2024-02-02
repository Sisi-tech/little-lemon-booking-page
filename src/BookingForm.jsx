import { useState } from 'react'
import './App.css'
import tablePic from './assets/background13.jpg';
import foodPic from './assets/food1.jpg';

function BookingForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [time, setTime] = useState('');
  const [selectedDate, setSelectedDate] = useState(getTodayDate());
  const availableTime = ["17:00pm", "17:30pm", "18:00pm", "18:30pm", "19:00pm", "19:30pm", "20:00pm", "20:30pm", "21:00pm", "21:30pm", "22:00pm"];
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFirstName("");
    setLastName("");
    console.log("Form submitted!");
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    const today = new Date().toISOString().split('T')[0];
    if (selectedDate >= today) {
      setSelectedDate(selectedDate);
    } else {
      console.log("Please select a future date.");
    }
  };
  function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Month is zero-based
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  return (
    <>
    <section className='w-full min-h-screen flex flex-col items-center bg-green-900'>
        <h3 className='text-center text-3xl text-gray-100 sm:pt-4 pt-6 pb-6'>Find a table for any occasion</h3>
        <div className='flex flex-col sm:flex-row items-center justify-center sm:gap-10 gap-6'>
          <img src={tablePic} alt='table pic' className='sm:w-1/3 w-4/5 h-auto rounded-lg '/>
          <img src={foodPic} alt='food pic' className='sm:w-1/3 w-4/5 h-auto rounded-lg ' />
        </div>
        <form onSubmit={handleSubmit} className='w-full pl-2 max-w-2xl pt-6 flex flex-col justify-center align-center text-gray-900'>
          
          {/* First name and last name row  */}
          <div className='grid grid-cols-2 gap-2 pb-3 text-xl'>
            <div className='flex items-center sm:gap-2 gap-0'>
              <label htmlFor='firstName' className='w-1/3 text-gray-100'>First name</label>
              <input 
                type='text' 
                id='firstName' 
                required
                placeholder='First name' 
                name='first name' 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className='w-3/4 border border-gray-300 rounded-md py-1 px-2 mr-2'
                />
            </div>
            <div className='flex items-center sm:gap-2 gap-0'>
              <label htmlFor='lastName' className='w-1/3 text-gray-100'>Last name</label>
              <input 
                type='text' 
                id='lastName' 
                placeholder='Last name' 
                name='last name' 
                required
                value={lastName} 
                onChange={(e) => setLastName(e.target.value)}
                className='w-3/4 border border-gray-300 rounded-md py-1 px-2 mr-2'
                />
            </div>
          </div>

          {/* Date and time row  */}
          <div className='grid grid-cols-2 gap-2 pb-3 text-xl'>
            <div className='flex items-center sm:gap-2 gap-0'>
              <label htmlFor='res-date' className='w-3/5 text-gray-100'>Choose date</label>
              <input 
                type="date" 
                id="res-date" 
                value={selectedDate}
                defaultValue={getTodayDate()}
                onChange={handleDateChange}
                min={getTodayDate()}
                className='w-5/6 border border-gray-300 rounded-md py-1 px-2 mr-2'
              />
            </div>
            <div className='flex items-center sm:gap-2 gap-0'>
              <label htmlFor='res-time' className='w-3/5 text-gray-100'>Choose time</label>
              <select id="res-time" value={time} onChange={handleTimeChange}
                className='w-4/5 border border-gray-300 rounded-md py-1.5 px-2 mr-2'>
                <option value="" disabled>Select a time</option>
                {availableTime.map((time) => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Dinners & Occasion */}
          <div className='grid grid-cols-2 gap-2 pb-3 text-xl'>
            <div className='flex items-center sm:gap-2 gap-0'>
              <label htmlFor='guests' className='sm:w-1/5 w-1/3 text-gray-100'>Guests</label>
              <input type="number" placeholder='2' min="1" max="10" id="guests" className='w-5/6 border border-gray-300 rounded-md py-1 px-2 mr-2'/>
            </div>
            <div className='flex items-center sm:gap-2 gap-0'>
              <label htmlFor='occasion' className='sm:w-1/4 2/5 text-gray-100'>Occasion</label>
              <select id="occasion" className='w-5/6 border border-gray-300 rounded-md py-1.5 px-2 mr-2'>
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
            </div>
          </div>

          {/* Submit button */}
          <button 
            type='submit' 
            className='bg-blue-500 hover:bg-blue-700 text-white text-2xl font-bold py-2.5 px-4 rounded-lg sm:w-3/4 mx-auto mt-10'
            >
              Make Your Reservation
            </button>
        </form>
    </section>
    </>
  )
}

export default BookingForm
