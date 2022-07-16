import React, { useState, useContext } from "react";
import Button from "../../components/common/Button";
import InlineTextField from "../../components/common/InlineTextField";
import Table from "../../components/common/Table";
import Appbar from "../../components/layout/Appbar";
import Modal from "../../components/common/Modal";
import na from "../../images/navigate_next (1).svg";
import adCircle from "../../images/add_circle_black_24dp (1) 1.svg";
import deBlack from "../../images/delete_black_24dp (1) 3.svg";
import line10 from "../../images/Line 10.svg";
import { UserContext } from "../../context/UserContext";
import { FormatContext } from "../../context/FormatContext";
import { OrganizationContext } from "../../context/OrganizationContext";

const table = {
  cols: ["Name", "Email", "Role"],
  rows: [
    ["John Doe", "GeorgeFields@gmail.com", "Owner"],
    ["John Doe", "GeorgeFields@gmail.com", "Owner"],
    ["John Doe", "GeorgeFields@gmail.com", "Owner"],
  ],
};

function Settings() {
  const { user } = useContext(UserContext);
  const { produceTypes } = useContext(FormatContext);
  const { organization } = useContext(OrganizationContext);
  const [isOpen, setIsOpen] = useState({
    tab1: true,
    tab2: true,
    tab3: true,
    tab4: true,
    tab5: true,
  });
  const [deleteUser, setDeleteUser] = useState(false);
  const toggleDeleteUser = () => setDeleteUser((v) => !v);
  const [deleteCompany, setDeleteCompany] = useState(false);
  const toggleDeleteCompany = () => setDeleteCompany((v) => !v);

  return (
    <>
      <Appbar title="Settings" />
      <div className="mb-20">
        <div className="mb-10">
          <div
            className="flex gap-3 hover:cursor-pointer"
            onClick={() => setIsOpen({ ...isOpen, tab1: !isOpen?.tab1 })}
          >
            <img
              className={`w-6 h-6  transition-250ms-all  ${
                isOpen?.tab1 ? "rotate-180" : ""
              }`}
              src={na}
              alt=""
            />
            <h5 className="font-semibold text-dark text-h2 pb-1 border-b border-neutral-400 flex-grow hover:cursor-pointer transition-250ms-all">
              Personal
            </h5>
          </div>
          <div
            className={`ml-9 transition-250ms-all  ${
              isOpen?.tab1 ? "block" : "hidden"
            }`}
          >
            <div className="flex justify-between">
              <InlineTextField label="Email" defaultValue={user?.email} />
              <InlineTextField
                label="First Name:"
                defaultValue={user?.firstname}
              />
              <InlineTextField
                label="Last Name:"
                defaultValue={user?.lastname}
              />
            </div>
          </div>
        </div>
        <div className="mb-10">
          <div
            className="flex gap-3 hover:cursor-pointer"
            onClick={() => setIsOpen({ ...isOpen, tab2: !isOpen?.tab2 })}
          >
            <img
              className={`w-6 h-6   transition-250ms-all ${
                isOpen?.tab2 ? "rotate-180" : ""
              }`}
              src={na}
              alt=""
            />
            <h5 className="font-semibold text-dark text-h2 pb-1  border-b border-neutral-400 flex-grow">
              Company
            </h5>
          </div>
          <div className={`ml-9 ${isOpen?.tab2 ? "block" : "hidden"}`}>
            <div className="flex justify-between">
              <InlineTextField label="Name" defaultValue={organization?.name} />
              <InlineTextField
                label="Contact Email:"
                defaultValue={organization?.contact_email}
              />
              <InlineTextField
                label="Phone Number:"
                defaultValue={organization?.contact_phone}
              />
            </div>
          </div>
        </div>
        <div className="mb-10">
          <div
            className="flex gap-3 hover:cursor-pointer"
            onClick={() => setIsOpen({ ...isOpen, tab3: !isOpen?.tab3 })}
          >
            <img
              className={`w-6 h-6  transition-250ms-all  ${
                isOpen?.tab3 ? "rotate-180" : ""
              }`}
              src={na}
              alt=""
            />
            <h5 className="font-semibold text-dark text-h2 pb-1 border-b border-neutral-400 flex-grow">
              Products
            </h5>
          </div>
          <div className={`ml-20 ${isOpen?.tab3 ? "block" : "hidden"}`}>
            <ul className="list-none mt-6">
              {produceTypes?.map((pTypes) =>
                organization?.ml_models?.map((mlModel, index) =>
                  pTypes?.value === mlModel?.produce_type_id ? (
                    <li
                      className="text-neutral-900 my-4 text-md tracking-[0.3px]"
                      key={index}
                    >
                      {`${
                        pTypes?.name.toLowerCase().charAt(0).toUpperCase()+
                        (pTypes?.name.slice(1).toLowerCase())
                      } ${
                        mlModel?.file_name?.substring(
                          mlModel?.file_name?.indexOf("-") + 1 || 0,
                          mlModel?.file_name?.lastIndexOf(".")
                        ) || mlModel?.file_name
                      }`}
                    </li>
                  ) : null
                )
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <div className="mb-4 flex gap-3">
          <img
            className={`w-6 h-6 hover:cursor-pointer  transition-250ms-all ${
              isOpen?.tab4 ? "rotate-180" : ""
            }`}
            src={na}
            onClick={() => setIsOpen({ ...isOpen, tab4: !isOpen?.tab4 })}
            alt=""
          />
          <div className="pb-2 flex justify-between flex-grow border-b border-neutral-400 ">
            <h5
              className="font-semibold text-dark text-h2 flex-grow hover:cursor-pointer"
              onClick={() => setIsOpen({ ...isOpen, tab4: !isOpen?.tab4 })}
            >
              Team
            </h5>
            <div className="flex gap-4 items-center">
              <button type="button" className="flex gap-1.5 items-center">
                <img className="w-6 h-6" src={adCircle} alt="" />
                <span className="uppercase font-semibold text-xs text-primary-blue">
                  ADD TEAM MEMBER
                </span>
              </button>
              <img className="h-6" src={line10} alt="" />
              <button
                type="button"
                className="flex gap-1.5 items-center duration-150 hover:opacity-100 opacity-60 hover:contrast-100 contrast-0"
              >
                <img className="w-6 h-6" src={deBlack} alt="" />
                <span className="uppercase font-semibold text-xs text-primary-blue">
                  DELETE
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className={`ml-9 ${isOpen?.tab4 ? "block" : "hidden"}`}>
          <Table selectable datam={table} />
        </div>
      </div>

      <div className="mb-10">
        <div
          className="flex gap-3 hover:cursor-pointer"
          onClick={() => setIsOpen({ ...isOpen, tab5: !isOpen?.tab5 })}
        >
          <img
            className={`w-6 h-6 transition-250ms-all   ${
              isOpen?.tab5 ? "rotate-180" : ""
            }`}
            src={na}
            alt=""
            onClick={() => setIsOpen({ ...isOpen, tab5: !isOpen?.tab5 })}
          />{" "}
          <h5 className="font-semibold text-dark text-h2 pb-1 border-b border-neutral-400 flex-grow">
            Danger Zone
          </h5>
        </div>
        <div
          className={`ml-9 mt-4 transition-250ms-all ${
            isOpen?.tab5 ? "block" : "hidden"
          }`}
        >
          <div className="flex gap-6">
            <Button
              onClick={toggleDeleteUser}
              color="accent-red"
              text="Delete User"
              size="small"
            />
            <Button
              onClick={toggleDeleteCompany}
              color="accent-red"
              text="Delete Company"
              size="small"
            />
          </div>
        </div>
      </div>

      <Modal title="Delete User" close={toggleDeleteUser} open={deleteUser}>
        <p>
          In order to delete user, please send email to support@via-cool.com
        </p>
      </Modal>
      <Modal
        title="Delete Company"
        close={toggleDeleteCompany}
        open={deleteCompany}
      >
        <p>
          In order to delete company, please send email to support@via-cool.com
        </p>
      </Modal>
    </>
  );
}

export default Settings;
