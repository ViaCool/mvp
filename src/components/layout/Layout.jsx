import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Aside from "./Aside";
import { UserContext } from "../../context/UserContext";
import { userApi } from "../../apiServices/authApi";

function Layout() {
  const { user, setUser } = useContext(UserContext);

  const InitUserData = async () => {
    const res = await userApi();
    if (!res?.error) {
      setUser(res?.data);
      return;
    }
  };

  React.useEffect(() => {
    InitUserData();
  }, [!user]);

  return (
    <div>
      <Aside />
      <main className="ml-[220px] p-10">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
