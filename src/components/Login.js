import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  function validateForm() {
    const errors = {};
    if (username.trim() === "") {
      errors.username = "Username is required";
    }
    if (password.trim() === "") {
      errors.password = "Password is required";
    }
    return errors;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Proceed with form submission logic
      // For simplicity, just store the username in local storage
      localStorage.setItem('username', username);
      alert("Login successful");
    } else {
      setErrors(errors);
    }
  }

  function handleRegistration(event) {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Proceed with registration logic
      // For simplicity, just store the username in local storage
      localStorage.setItem('username', username);
      alert("Registration successful");
    } else {
      setErrors(errors);
    }
  }

  return (
    <>
      <div className='login-div flex min-h-full flex-col justify-center px-6 py-12 lg:px-8' style={{ backgroundImage: 'url("https://w0.peakpx.com/wallpaper/82/1005/HD-wallpaper-simple-iphone-beach-animated-coconut-tree.jpg")', backgroundSize: 'center' }}>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <img src={logo} alt='logo ' />
          <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>Sign in to your account</h2>


          <div className='mt-10  sm:mx-auto sm:w-full sm:max-w-sm'>
            <Form className='space-y-6 ' onSubmit={handleSubmit}>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label htmlFor='email' className='block text-sm font-medium leading-6 text-white'>Email address</Form.Label>
                <div className='mt-2'>
                  <Form.Control
                    id='email'
                    name='email'
                    type='email'
                    autoComplete='email'
                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${errors.username && 'border-red-500'}`}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  {errors.username && <p className="text-red-500 mt-1">{errors.username}</p>}
                </div>
              </Form.Group>

              <Form.Group controlId='formBasicPassword'>
                <div className='flex items-center justify-between'>
                  <Form.Label htmlFor='password' className='block text-sm font-medium leading-6 text-white'>Password</Form.Label>
                  <div className='text-sm'>
                    <a href='#' className='font-semibold text-indigo-600 hover:text-indigo-500'>Forgot password?</a>
                  </div>
                </div>
                <div className='mt-2'>
                  <Form.Control
                    id='password'
                    name='password'
                    type='password'
                    autoComplete='current-password'
                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${errors.password && 'border-red-500'}`}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {errors.password && <p className="text-red-500 mt-1">{errors.password}</p>}
                </div>
              </Form.Group>

              <div>
              <Link className="nav-link home-link" to={`/`}>
                <Button
                  variant='success'
                  type='submit'
                  className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  disabled={!validateForm()}>
                  Sign in
                </Button></Link>
              </div>
              <div>
                {/* <Button
                  variant='primary'
                  type='button'
                  className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  onClick={handleRegistration}>
                  Register
                </Button> */}
              </div>
              {/* <div>
                <Link className="nav-link home-link" to="/signin">
                  <p className='my-3'> Already have an account ?</p>
                </Link>
              </div> */}
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;
