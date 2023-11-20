import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { authActions } from '../../pages/store/auth_slice';
import { useLoginMutation } from '../../pages/api/auth/auth_api_slice';

import {
  StyledDiv,
  StyledFormControl,
  StyledFormLabel,
  StyledRow,
  StyledFlexContainer,
  StyledCheckInput,
  StyledPrimaryButton,
} from './LoginFormStyles'; // Replace with the actual path to your styled components

const LoginForm = () => {
  //useRef to set focus
  const userRef = useRef();
  const errRef = useRef();

  const [userName, setUser] = useState('');
  const [password, setPwd] = useState('');
  const [errmsg, setErrmsg] = useState('');

  const router = useRouter();

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrmsg('');
  }, [userName, password]);

  const handleSubmit = async (e) => {
    e.preventDefault(); //prevent form reload

    try {
      const userData = await login({
        userName: userName,
        password: password,
        email: '',
      }).unwrap();
      console.log(userData);
      dispatch(authActions.setCredentials({ ...userData, user: userName }));
      setUser('');
      setPwd('');
      router.push('/');
    } catch (error) {
      setErrmsg(error.message);
      errRef.current.focus();
    }
  };

  const handleUserInput = (e) => setUser(e.target.value);
  const handlePwdInput = (e) => setPwd(e.target.value);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <StyledDiv className="container-login100">
      <StyledDiv className="wrap-login100 p-t-50 p-b-90">
        <form
          onSubmit={handleSubmit}
          className="login100-form validate-form flex-sb flex-w"
        >
          <StyledFlexContainer className="login100-form-title p-b-51">
            Login
          </StyledFlexContainer>

          <StyledDiv
            className="wrap-input100 validate-input m-b-16"
            data-validate="Username is required"
          >
            <StyledFormControl
              className="input100"
              ref={userRef}
              type="text"
              id="username"
              value={userName}
              onChange={handleUserInput}
              placeholder="Username"
            />
            <StyledFormLabel
              className="focus-input100"
              ref={errRef}
              value={errmsg}
            ></StyledFormLabel>
          </StyledDiv>

          <StyledDiv
            className="wrap-input100 validate-input m-b-16"
            data-validate="Password is required"
          >
            <StyledFormControl
              className="input100"
              type="password"
              id="pwd"
              value={password}
              onChange={handlePwdInput}
              placeholder="Password"
            />
            <StyledFormLabel className="focus-input100"></StyledFormLabel>
          </StyledDiv>

          <StyledRow className="flex-sb-m w-full p-t-3 p-b-24">
            <StyledDiv className="contact100-form-checkbox">
              <StyledCheckInput
                className="input-checkbox100"
                id="ckb1"
                type="checkbox"
                name="remember-me"
              />
              <StyledFormLabel className="label-checkbox100" htmlFor="ckb1">
                Remember me
              </StyledFormLabel>
            </StyledDiv>
            <StyledDiv>
              <a href="#" className="txt1">
                Forgot?
              </a>
            </StyledDiv>
          </StyledRow>

          <StyledDiv className="container-login100-form-btn m-t-17">
            <StyledPrimaryButton className="login100-form-btn">
              Login
            </StyledPrimaryButton>
          </StyledDiv>
        </form>
      </StyledDiv>
    </StyledDiv>
  );
};

export default LoginForm;
