import React, { useState } from 'react';
import destData from './destData';
import destination from '../assets/destination.jpg';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { FaMapMarkerAlt, FaStar, FaStarHalf } from 'react-icons/fa';


const Destination = () => {
    const [search, setSearch] = useState('')
    const onChange = (e) => {
        setSearch(e.target.value)
    }
    return (
        <>
            <div className="relative dest-container">
                <img src={destination} className='mainImg w-full h-full object-cover' alt="Destination Image" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                    <h1 className='font-bold italic text-xl whitespace-nowrap sm:text-5xl drop-shadow-lg mb-4 sm:mb-6'>
                        Search Location For Your Next Tour
                    </h1>

                    <div className="flex items-center justify-center">

                        <Form.Select aria-label="Default select example"
                            className='h-10 w-80 hover:shadow-lg text-black hover:border-black'
                            value={search} onChange={onChange}>
                            <option>Location</option>
                            <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                            <option value="Himalaya Mountain">Himalaya Mountain</option>
                            <option value="Jaisalmer">Jaisalmer</option>
                            <option value="Gangtok">Gangtok</option>
                            <option value="goa">Goa</option>
                            <option value="Kolkata">Kolkata</option>
                            <option value="varanasi">varanasi</option>
                            <option value="Ooty">Ooty</option>
                            <option value="Pondicherry">Pondicherry</option>
                            <option value="Coorg">Coorg</option>
                            <option value="Hampi">Hampi</option>
                            <option value="Jaipur">Jaipur</option>
                        </Form.Select>
                    </div>
                </div>
            </div>



            {/* cards container */}
            <div id="destination-section" className="dest-container1 flex flex-wrap m-9">
                {destData.filter((value) => {
                    if (search == "Location") {
                        return value;
                    } else if (value.name.toLowerCase().includes(search.toLowerCase())) {
                        return value;
                    }
                })
                    .map((cval, index) => (
                        <div key={index} className="dest-cards w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2">
                            <div className=" border border-gray-300 rounded-lg overflow-hidden shadow-md transition duration-300 transform hover:scale-105 hover:shadow-lg h-full">
                                <img src={cval.cover} alt="..." className="w-full h-56 object-cover" />
                                <Card className="info-card h-28 p-2 flex flex-col">
                                    <div className="flex justify-between">
                                        <div>
                                            <Card.Title>{cval.name}</Card.Title>
                                            <Card.Text style={{ display: 'flex', alignItems: 'center' }}>
                                                <FaMapMarkerAlt style={{ marginRight: '5px' }} />
                                                <span>{cval.location}</span>
                                            </Card.Text>

                                        </div>

                                        <div className="flex flex-col items-center mt-2">
                                            <div className="flex items-center">
                                                <FaStar style={{ marginRight: '5px', color: 'gold' }} />
                                                <FaStar style={{ marginRight: '5px', color: 'gold' }} />
                                                <FaStar style={{ marginRight: '5px', color: 'gold' }} />
                                                <FaStar style={{ marginRight: '5px', color: 'gold' }} />
                                                <FaStarHalf style={{ marginRight: '5px', color: 'gold' }} />
                                            </div>
                                            <div className="flex items-center">
                                                <span>{cval.ratings}</span>
                                            </div>
                                        </div>



                                    </div>
                                    <Link className="nav-link home-link" to={`/BookingPage/${cval.id}`}>
                                        <Button className="btn bg-blue-500 hover:bg-blue-700 text-white text-sm h-8 w-20 rounded-lg mt-2" onClick={() => console.log('Button clicked')}>
                                            Book Now
                                        </Button>
                                    </Link>
                                </Card>
                            </div>
                        </div>
                    ))}
            </div >




        </>
    );
}

export default Destination;