import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { AuthState, selectAuth, RegisterPayload, register } from '../auth/authSlice';

export function Register() {
  const dispatch = useAppDispatch();

  // Local states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    const payload: RegisterPayload = {
      name: name,
      email: email,
      password: password,
    };
    dispatch(register(payload));
  }

  const authState: AuthState = useAppSelector(selectAuth);
  if (authState.isLoggedin) {
    return <Redirect to={{ pathname: '/profile' }} />
  } else {
    return (
      <div>
        <h3>Register</h3>
        <div>
          <span>Name</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <span>Email</span>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <span>Password</span>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button onClick={handleSubmit}>Submit</button>
      </div>
    );
  }
}
