import React, { Fragment, useContext } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { FormatContext } from "../../context/FormatContext";
import deBlack from "../../images/delete_black_24dp (1) 3.svg";
import gr from "../../images/Group 1191.svg";
import { API_URL } from "../../apiServices/api_routes";
import axiosInstance from "../../apiServices/axiosInstance";
import { toast } from "react-toastify";
import { OrganizationContext } from "../../context/OrganizationContext";
const TableAction = ({ id, url, organizationId }) => {
  const { delReport } = useContext(OrganizationContext);
  const handleDownload = () => {
    fetch(`${API_URL}/organizations/${organizationId}/reports/${id}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage["authToken"],
      },
    })
      .then((response) => response.blob())
      .then((blob) => {
        const url_ = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url_;
        link.setAttribute(
          "download",
          url?.split("/")[url?.split("/")?.length - 1]
        );

        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      });
  };

  const handleDelete = () => {
    axiosInstance
      .delete(`organizations/${organizationId}/reports/${id}`)
      .then(() => {
        delReport(id);
        toast.success(`Succeflully Deleted`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        toast.error(`Error : ${err?.response?.data?.message}, Please Retry`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <div className="flex gap-3 items-center">
      <button
        type="button"
        onClick={handleDelete}
        className="contrast-0 hover:contrast-100 opacity-50 hover:opacity-100 duration-150"
      >
        <img className="w-6 h-6" src={deBlack} alt="" />
      </button>
      <button
        type="button"
        className="contrast-0 hover:contrast-100 opacity-50 hover:opacity-100 duration-150"
        onClick={handleDownload}
      >
        <img className="w-6 h-6" src={gr} alt="" />
      </button>
    </div>
  );
};
function Table({ cols, rows, selectable }) {
  const { selectedProduceType } = useContext(FormatContext);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <div>
      <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={600}>
        <table className="w-full">
          <thead className="bg-neutral-700 w-full sticky top-0 z-10">
            <tr>
              {cols?.map((value, index) => (
                <th className="text-left py-6 px-10" key={index}>
                  {value}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows
              ?.filter((row) => row?.is_deleted === false)
              ?.map((rowData, index) => {
                const rowArray = [
                  rowData?.name,
                  rowData?.created_at,
                  selectedProduceType,
                ];
                return (
                  <tr
                    className="hover:bg-opacity-5 duration-150 bg-white hover:bg-primary-blue"
                    key={index}
                  >
                    {rowArray?.map((val, index) => {
                      return (
                        <Fragment>
                          <td className="py-6 px-10">
                            <div className="flex gap-5 items-center">
                              {index === 0 && selectable && (
                                <input
                                  type="checkbox"
                                  className="w-[18px] h-[18px]"
                                />
                              )}
                              {val === selectedProduceType ? (
                                <div>{selectedProduceType}</div>
                              ) : val === rowData?.created_at ? (
                                <div>{`${new Date(val)?.getDate()} ${
                                  monthNames[new Date(val).getMonth() - 1]
                                } ${new Date(val)?.getFullYear()}  `}</div>
                              ) : (
                                <div>{val}</div>
                              )}
                            </div>
                          </td>
                          {rowArray?.length === index + 1 && (
                            <td className="py-6 px-10">
                              <div className="flex gap-5 items-center">
                                <div>
                                  <TableAction
                                    id={rowData?.id}
                                    url={rowData?.url}
                                    organizationId={rowData?.organization_id}
                                  />
                                </div>
                              </div>
                            </td>
                          )}
                        </Fragment>
                      );
                    })}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </Scrollbars>
    </div>
  );
}

export default Table;
