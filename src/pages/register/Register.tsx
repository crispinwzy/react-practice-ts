import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { selectAuth, RegisterPayload, register } from 'app/store/slices/authSlice';
import { AuthState } from 'app/models/Auth';
import './Register.scss';
import { isValidEmail } from 'app/utils/validators';

export function Register() {
  const dispatch = useAppDispatch();

  // Local states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [speciality, setSpeciality] = useState('');

  const [nameValid, setNameValid] = useState({valid: true, msg: ''});
  const [emailValid, setEmailValid] = useState({valid: true, msg: ''});
  const [passwordValid, setPasswordValid] = useState({valid: true, msg: ''});
  const [specialityValid, setSpecialityValid] = useState({valid: true, msg: ''});

  const handleSubmit = () => {
    // Trim inputs
    setName(name.trim());
    setEmail(email.trim());
    setPassword(password.trim());

    // Validate form
    if (!validateForm()) {
      return;
    }

    // Compose paylaod
    const payload: RegisterPayload = {
      name: name,
      email: email,
      password: password,
      speciality: speciality,
    };

    // Dispatch 'register' action
    dispatch(register(payload));
    alert("Register sucessfully!");
  }

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSpeciality(e.target.value);
  }

  const validateForm = () => {
    let result = true;

    if (!name) {
      result = false;
      setNameValid({ valid: false, msg: 'Name is required' });
    } else {
      setNameValid({ valid: true, msg: '' })
    }

    if (!email) {
      result = false;
      setEmailValid({ valid: false, msg: 'Email is required' });
    } else if (!isValidEmail(email)) {
      result = false;
      setEmailValid({ valid: false, msg: 'Incorrect Email format' });
    } else {
      setEmailValid({ valid: true, msg: '' })
    }

    if (!password) {
      result = false;
      setPasswordValid({ valid: false, msg: 'Password is required' });
    } else {
      setPasswordValid({ valid: true, msg: '' });
    }

    if (!speciality) {
      result = false;
      setSpecialityValid({ valid: false, msg: 'Speciality is required' });
    } else {
      setSpecialityValid({ valid: true, msg: '' });
    }

    return result;
  }

  const authState: AuthState = useAppSelector(selectAuth);
  if (authState.isLoggedin) {
    return <Redirect to={{ pathname: '/profile' }} />
  } else {
    return (
      <div className="register-page">
        <div className="register-form">
          <h3>Register as a dev</h3>
          <div className="form-field">
            <span className="form-label">Name</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {!nameValid.valid && <span className="error-msg">{nameValid.msg}</span>}
          </div>

          <div className="form-field">
            <span className="form-label">Email</span>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {!emailValid.valid && <span className="error-msg">{emailValid.msg}</span>}
          </div>

          <div className="form-field">
            <span className="form-label">Password</span>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {!passwordValid.valid && <span className="error-msg">{passwordValid.msg}</span>}
          </div>

          <div className="form-field">
            <span className="form-label">Speciality</span>
            <label>
              <input type="radio" name="speciality" value="front-end" onChange={handleOptionChange} /> Front-end
            </label>
            <label>
              <input type="radio" name="speciality" value="back-end" onChange={handleOptionChange} /> Back-end
            </label>
            {!specialityValid.valid && <span className="error-msg">{specialityValid.msg}</span>}
          </div>

          <div className="form-action">
            <button onClick={handleSubmit}>Register</button>
          </div>
        </div>
      </div>
    );
  }
}
