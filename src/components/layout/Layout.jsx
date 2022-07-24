import React, { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Aside from "./Aside";
import { UserContext } from "../../context/UserContext";
import { userApi } from "../../apiServices/authApi";
import { OrganizationContext } from "../../context/OrganizationContext";
import { FormatContext } from "../../context/FormatContext";
import { formatsApi } from "../../apiServices/formatsApi";
import { getReports } from "../../apiServices/organizationApi";

function Layout() {
  const { user, setUser } = useContext(UserContext);
  const { setOrganizationData } = useContext(OrganizationContext);
  function sortFunction(a, b) {
    var dateA = new Date(a.created_at).getTime();
    var dateB = new Date(b.created_at).getTime();
    return dateA > dateB ? -1 : 1;
  }
  const { setFormatData, SetSelectedProduceType, format, setProduceTypes } =
    useContext(FormatContext);
  const {
    organization,

    setReport,
    reports,
  } = useContext(OrganizationContext);

  useEffect(() => {
    const InitUserData = async () => {
      const res = await userApi();
      if (!res?.error) {
        setUser(res?.data);
        setOrganizationData(res?.data?.organization_roles[0]?.organization);
        return;
      }
    };
    InitUserData();
  }, [!user]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const InitData = async () => {
      const res = await formatsApi();
      if (!res?.error) {
        setFormatData(res?.data);
        const uniqueIds = [
          ...new Set(organization?.ml_models?.map((d) => d?.produce_type_id)),
        ];
        const dataArray = [];
        res?.data &&
          Object?.keys(res?.data?.produce_types)?.map((d) =>
            uniqueIds?.map(
              (id) =>
                id === res?.data?.produce_types[d] &&
                dataArray?.push({
                  value: res?.data?.produce_types[d],
                  name: d,
                })
            )
          );
        setProduceTypes(dataArray);
        SetSelectedProduceType(dataArray[0]?.value);
      }
      if (organization?.id) {
        const reportz = await getReports(organization?.id);

        if (!reports?.error) {
          setReport(reportz?.sort(sortFunction));
        }
      }
    };

    InitData();
  }, [!format, organization]); // eslint-disable-line react-hooks/exhaustive-deps
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
