import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions/auth';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const {email, password} = formData;
  const Navigate = useNavigate();

  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

  const onSubmit = e => {
    e.preventDefault();

    login(email, password);
  };

  if(isAuthenticated)
    return Navigate('/')

  return (
    <div className='auth'>
      <Helmet>
        <title>Login</title>
        <meta 
          name='description'
          content='login'/>
      </Helmet>
      <h1 className='auth__title'>Sign In</h1>
      <p className='auth__kead'>Sign Into Your Account</p>
      <form onSubmit={e => onSubmit(e)} className='auth__form'>
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
        <button className='auth__form__button'>Login</button>
      </form>
      <p className='auth__authtext'>
        Haven't registered yet? <Link className='auth__authtext__link' to='/register'>Sign Up</Link>
      </p>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login }) (Login);