import React, { useState } from 'react';

import classes from './Login.module.css';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';

const Login = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [usernameIsValid, setUsernameIsValid] = useState();

  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();

  const [formIsValid, setFormIsValid] = useState(false);

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 0 && enteredPassword.trim().length > 0
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      enteredUsername.trim().length > 0 && event.target.value.trim().length > 0
    );
  };

  const validateUsernameHandler = () => {
    setUsernameIsValid(enteredUsername.trim().length > 0);
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 0);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin();
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            usernameIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={enteredUsername}
            onChange={usernameChangeHandler}
            onBlur={validateUsernameHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
