import React from "react";
import background from '../assets/background.mp4';
import destData from './destData';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const Home = () => {
  return (<>
    <div className="main">
      <video src={background} autoPlay loop muted />
      <div className="content">
        <h1>Let's Begin Adventure</h1>
        <Link to="/destination#destination-section" className="focus:outline-none focus:ring focus:ring-violet-300">
          <button>
            Explore
          </button>
        </Link>
      </div>
    </div>

    {/* card container  */}

    <div className="m-7 animate-pulse font-serif text-3xl font-bold text-center"><h2>Check out this epic destinations !</h2></div>
    <div className="dest-container1 flex flex-wrap m-9">
      {destData.slice(0, 2).map((cval, index) => (
        <div key={index} className="dest-cards w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-4">
          <div className="border border-gray-300 rounded-lg overflow-hidden shadow-2xl transition duration-300 transform hover:scale-105 hover:shadow-lg h-full">
            <img src={cval.cover} alt="..." className="w-full h-80 object-cover hover:-translate-y-1 hover:scale-110" />
            <Card className="info-card h-32 p-4 flex flex-col">
              <div className="flex justify-between">
                <div>
                  <Card.Title>{cval.name}</Card.Title>
                  <Card.Text>{cval.location}</Card.Text>
                </div>
                <div>
                  <Card.Text>{cval.ratings}</Card.Text>
                </div>
              </div>
              <Link className="nav-link home-link" to={`/BookingPage/${cval.id}`}>
                <Button className="btn bg-blue-500 hover:bg-blue-700 text-white text-sm h-8 w-20 rounded-sm mt-2" onClick={() => console.log('Button clicked')}>
                  Book Now
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      ))}
    </div>



    {/* second card container */}


    <div className="dest-container1 flex flex-wrap m-9">
      {destData
        .filter(cval => [3, 6, 9].includes(cval.id))
        .map((cval, index) => (
          <div key={index} className="dest-cards w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2">
            <div className="border border-gray-300 rounded-lg overflow-hidden shadow-md transition duration-300 transform hover:scale-105 hover:shadow-lg h-full">
              <img src={cval.cover} alt="..." className="w-full h-56 object-cover" />
              <Card className="info-card h-24 p-2 flex flex-col">
                <div className="flex justify-between">
                  <div>
                    <Card.Title>{cval.name}</Card.Title>
                    <Card.Text>{cval.location}</Card.Text>
                  </div>
                  <div>
                    <Card.Text>{cval.ratings}</Card.Text>
                  </div>
                </div>
                <Link className="nav-link home-link" to={`/BookingPage/${cval.id}`}>
                  <Button className="btn bg-blue-500 hover:bg-blue-700 text-white text-sm h-8 w-20 rounded-sm mt-2" onClick={() => console.log('Button clicked')}>
                    Book Now
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        ))}
    </div>


  </>

  )
}
export default Home;