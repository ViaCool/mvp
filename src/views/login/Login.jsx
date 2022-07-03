import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';
import TextField from '../../components/common/TextField';
import logo from '../../images/logo.svg';

function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="mx-4">
        <div className="flex justify-center mb-10">
          <Link to="/">
            <img className="w-[166px]" src={logo} alt="" />
          </Link>
        </div>
        <div className="bg-white p-5 shadow-100 w-full max-w-[490px] mx-auto rounded-[20px] pt-20 px-20 pb-16 border-neutral-400">
          <div className="text-center mb-10">
            <h2 className="text-h0 font-light mb-5">
              Log in to <span className="font-semibold">Via Cool</span>
            </h2>
            <p className="text-neutral-750 text-2xl font-light">
              Enter your email and password below
            </p>
          </div>
          <div className="flex flex-col gap-6 mb-10">
            <TextField label="EMAIL" type="text" placeholder="EMAIL" />
            <TextField
              label="PASSWORD"
              jsxLabel={
                <a href="/#" className="text-neutral-750 text-xxs">
                  Forgot password?
                </a>
              }
              type="password"
              placeholder="12345678"
              variant="password"
            />
          </div>
          <div>
            <Button color="primary-blue" text="Log In" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
