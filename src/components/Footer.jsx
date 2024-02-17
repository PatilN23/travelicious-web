import React from "react";
import { FaInstagramSquare, FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <p className="font-bold text-2xl m-5">Join the Adventure newsletter to receive our best vacation deals</p>
                <div className="search mt-5">
                    <div>
                        <input
                            className="input w-60 h-8 rounded-md text-sm text-black"
                            type="text"
                            placeholder="Enter your email"
                        />
                        <button
                            className="submit h-8 m-3 w-20 rounded-md hover:bg-sky-700 hover:text-white font-bold text-sm bg-white bg-auto text-black"
                        >
                            Submit
                        </button>
                    </div>
                </div>
                <div className="footer text-lg list-none">
                    <ul className="list list-none leading-8">
                        <li className="li text-lg font-bold leading-loose">About Us</li>
                        <li>How it Works</li>
                        <li>Careers</li>
                        <li>Terms of Service</li>
                    </ul>
                </div>
                <div className="footer text-lg list-none">
                    <ul className="list list-none leading-8">
                        <li className="li text-lg font-bold leading-loose">Contact Us</li>
                        <li>Contact</li>
                        <li>Support</li>
                        <li>Sponsorship</li>
                    </ul>
                </div>
                <div className="footer text-lg list-none">
                    <ul className="list list-none leading-8">
                        <li className="li text-lg font-bold leading-loose">Social Media</li>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>Twitter</li>
                    </ul>
                </div>
            </div>
            <div className="footer-logo">
                <div className="copyright w-25 m-2 font-semibold"> Copyright &copy; 2024 Let's Explore</div>
                <div className="footer-icon">
                    <FaInstagramSquare className="h-6 w-6" />
                    <FaFacebookSquare className="h-6 w-6" />
                    <FaTwitterSquare className="h-6 w-6" />
                </div>
            </div>
        </>
    );
};

export default Footer;
