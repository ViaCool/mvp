import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";
import TextField from "../../components/common/TextField";
import logo from "../../images/logo.svg";
import { loginApi } from "../../apiServices/authApi";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const [authCredentials, setAuthCredentials] = React.useState({
    username: null,
    password: null,
  });

  const handleAuthSubmit = async () => {
    if (
      !(
        authCredentials?.username?.trim()?.length &&
        authCredentials?.password?.trim()?.length
      )
    ) {
      toast.error("Please fill Username or Password Correctly", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    const response = await loginApi(authCredentials);
    if (response?.error) {
      toast.error("Incorrect email or password", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      return;
    }
    navigate("/predict");
  };

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
            <TextField
              label="EMAIL"
              type="email"
              placeholder="EMAIL"
              onChange={(e) =>
                setAuthCredentials({
                  ...authCredentials,
                  username: e.target.value,
                })
              }
            />
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
              onChange={(e) =>
                setAuthCredentials({
                  ...authCredentials,
                  password: e.target.value,
                })
              }
            />
          </div>
          <div>
            <Button
              color="primary-blue"
              text="Log In"
              className="w-full"
              onClick={handleAuthSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
