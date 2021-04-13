import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserContext from '../hooks/UseContext';
import { validateUser } from '../services/users';
import logo from '../images/tb-logo.png';
import '../styles/login.css';

function LoginForm() {
  const {
    email,
    setEmail,
    password,
    setPassword,
  } = useContext(UserContext);

  const [isDisabled, setIsDisabled] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const regex = /\S+@\S+\.\S+/;
    const six = 6;

    setIsDisabled(regex.test(email) && password.length >= six);
  }, [email, password]);

  const handleSubmit = async (userEmail, userPassword) => {
    const result = await validateUser(userEmail, userPassword);

    localStorage.setItem('user', JSON.stringify(result));

    if (result.role === 'administrator') return history.push('/admin/orders');
    if (result.role === 'client') return history.push('/products');
  };

  return (
    <div className="maincontainer">
      <div className="transparence">
        <div className="logincontainer">
          <img width="350px" src={ logo } alt="logo" className="logoimage" />
          <label
            htmlFor="emailInput"
            className="label"
          >
            Email
            <input
              id="emailInput"
              data-testid="email-input"
              onChange={ (e) => setEmail(e.target.value) }
              className="input"
            />
          </label>
          <label
            htmlFor="passwordInput"
            className="label"
          >
            Senha
            <input
              id="passwordInput"
              type="password"
              data-testid="password-input"
              onChange={ (e) => setPassword(e.target.value) }
              className="input"
            />
          </label>
          <button
            type="button"
            disabled={ !isDisabled }
            id="signinBtn"
            data-testid="signin-btn"
            onClick={ () => handleSubmit(email, password) }
            className="button"
          >
            Entrar
          </button>
          <button
            type="button"
            data-testid="no-account-btn"
            onClick={ () => history.push('/register') }
            className="button"
          >
            Ainda não tenho conta
          </button>
        </div>
      </div>
    </div>
  );
}

LoginForm.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  history: PropTypes.func,
  disabled: PropTypes.bool,
  setEmail: PropTypes.func,
  setPassword: PropTypes.func,
}.isRequired;

export default LoginForm;
