import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setAlert } from '../actions/alert';
import { signup } from '../actions/auth';
import PropTypes from 'prop-types';


const Register = ({ setAlert, signup, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const {name, email, password, password2} = formData;
  const Navigate = useNavigate();

  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

  const onSubmit = e => {
    e.preventDefault();

    if (password !== password2)
      setAlert("Passwords Must Match", "error");
    else
      signup({ name, email, password, password2 });
  };

  if(isAuthenticated)
    return Navigate('/')

  return (
    <div className='auth'>
      <Helmet>
        <title>Login</title>
        <meta 
          name='description'
          content='registration page'/>
      </Helmet>
      <h1 className='auth__title'>Register</h1>
      <p className='auth__kead'>Register New Account</p>
      <form onSubmit={e => onSubmit(e)} className='auth__form'>
      <div className='auth__form__group'>
          <input 
          type="text" 
          className='auth__form__input' 
          placeholder='Name'
          name='Name'
          value={name}
          onChange={e => onChange(e)} 
          required/>
        </div>
        <div className='auth__form__group'>
          <input 
          type="email" 
          className='auth__form__input' 
          placeholder='Email'
          name='Email'
          value={email}
          onChange={e => onChange(e)} 
          required/>
        </div>
        <div className='auth__form__group'>
          <input 
          type="password"
          placeholder='Password' 
          name='Password'
          className='auth__form__input'
          value={password}
          onChange={e => onChange(e)}
          minLength='6'
          />
        </div>
        <div className='auth__form__group'>
          <input 
          type="password"
          placeholder='Confirm Password' 
          name='Password2'
          className='auth__form__input'
          value={password2}
          onChange={e => onChange(e)}
          minLength='6'
          />
        </div>
        <button className='auth__form__button'>Register</button>
      </form>
      <p className='auth__authtext'>
        Already have an account? <Link className='auth__authtext__link' to='/login'>Login</Link>
      </p>
    </div>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, signup })(Register);