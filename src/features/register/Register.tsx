import React, { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { RegisterPayload, register } from '../auth/authSlice';

export function Register() {
  const dispatch = useAppDispatch();

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
