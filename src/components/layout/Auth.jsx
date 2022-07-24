import React from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function AuthLayout() {
  const navigate = useNavigate();
  React.useEffect(() => {
    localStorage["authToken"] && navigate("/predict");
  });
  return (
    !localStorage["authToken"] && (
      <div>
        <Outlet />
      </div>
    )
  );
}

export default AuthLayout;
