import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Aside from "./Aside";
import { UserContext } from "../../context/UserContext";
import { userApi } from "../../apiServices/authApi";
import { OrganizationContext } from "../../context/OrganizationContext";

function Layout() {
  const { user, setUser } = useContext(UserContext);
  const { setOrganizationData } = useContext(OrganizationContext);

  const InitUserData = async () => {
    const res = await userApi();
    if (!res?.error) {
      setUser(res?.data);
      setOrganizationData(res?.data?.organization_roles[0]?.organization);
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
