import React, { useState } from 'react';
import destData from './destData';
import { useParams } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';

const BookingForm = () => {
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [Person, setPerson] = useState('');
  const { id } = useParams();

  const filteredData = destData.filter((dest) => dest.id == id);

  const defaultDestination = filteredData[0]?.name || '';

  function submitForm() {
    // user-entered data
    const userData = {
      destination: destination || filteredData[0]?.name,
      departureDate: departureDate,
      returnDate: returnDate,
      Person: Person
    };

    // Display user data in the alert box...
    alert(`Thank you for booking!\n\nDestination: ${userData.destination}\nDeparture Date: ${userData.departureDate}\nReturn Date: ${userData.returnDate}\nNo Of Person: ${userData.Person}\n\nHappy Journey!`);
  } 

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {filteredData.map((value) => (
        <div key={value.id} className='dest-info text-center mb-8'>
          <div className='relative'>
            <img
              src={value.cover}
              alt=""
              className='cover-image rounded-md mx-auto mb-4 w-500 h-80'
            />
            <div className='absolute top-0 left-0 w-full h-5/6 flex items-center justify-center opacity-0 transition-opacity duration-300 bg-opacity-50 hover:opacity-100 rounded-lg'>
              <h2 className="text-4xl font-bold text-white">{value.name}</h2>
            </div>
            <h2 className="text-6xl font-bold text-black italic">{value.name}</h2>
          </div>
        </div>
      ))}




      <div className="container mx-auto flex flex-col justify-center items-center sm:flex-row gap-8 mt-8">
        <div className='dest-info text-left mb-8'>
          {filteredData.map((value) => (
            <div key={value.id}>
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <FaMapMarkerAlt style={{ marginRight: '5px' }} />
                <span className='font-bold text-2xl m-3'>{value.location}</span>
              </span>
              <p className='m-3 animate-pulse'><span className='font-bold text-4xl mt-3'>Activities you can Enjoy here :</span></p>

              <div className="activities-container max-h-96 overflow-y-auto">
                <ul>
                  {value.experiences.map((experience, index) => (
                    <li key={index}>
                      <p><span className='font-bold text-lg'>{index + 1}.{experience.activity}</span></p>
                      <img src={experience.image} alt={experience.activity} height={200} width={200} className='my-2' />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>


        <form className="w-full sm:w-1/3 p-4 ml-10 h-1/2 rounded shadow-md">
          <h2 className="text-center m-5 text-2xl font-bold">Travelicious Booking Form</h2>

          <div className="m-6">
            <label htmlFor="destination" className="block text-sm font-medium text-gray-600">Destination:</label>
            <input
              type="text"
              id="destination"
              className="form-input w-full mt-1"
              value={destination || defaultDestination}
              onChange={(e) => setDestination(e.target.value)}
              required
            />
          </div>

          <div className="m-6">
            <label htmlFor="departureDate" className="block text-sm font-medium text-gray-600">Departure Date:</label>
            <input
              type="date"
              id="departureDate"
              className="form-input w-full mt-1"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              required
            />
          </div>

          <div className="m-6">
            <label htmlFor="returnDate" className="block text-sm font-medium text-gray-600">Return Date:</label>
            <input
              type="date"
              id="returnDate"
              className="form-input w-full mt-1"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              required
            />
          </div>

          <div className="m-6">
            <label htmlFor="person" className="block text-sm font-medium text-gray-600">No Of Person</label>
            <input
              type="text"
              id="Person"
              className="form-input w-full mt-1"
              value={Person}
              onChange={(e) => setPerson(e.target.value)}
              required
            />
          </div>

          <button type="submit" onClick={submitForm} className="bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-4 mt-4 w-full rounded">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
