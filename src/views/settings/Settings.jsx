import React, { useState } from 'react';
import Button from '../../components/common/Button';
import InlineTextField from '../../components/common/InlineTextField';
import Table from '../../components/common/Table';
import Appbar from '../../components/layout/Appbar';
import Modal from '../../components/common/Modal';
import na from '../../images/navigate_next (1).svg';
import adCircle from '../../images/add_circle_black_24dp (1) 1.svg';
import deBlack from '../../images/delete_black_24dp (1) 3.svg';
import line10 from '../../images/Line 10.svg';

const table = {
  cols: ['Name', 'Email', 'Role'],
  rows: [
    ['John Doe', 'GeorgeFields@gmail.com', 'Owner'],
    ['John Doe', 'GeorgeFields@gmail.com', 'Owner'],
    ['John Doe', 'GeorgeFields@gmail.com', 'Owner'],
  ],
};

function Settings() {
  const [deleteUser, setDeleteUser] = useState(false);
  const toggleDeleteUser = () => setDeleteUser((v) => !v);
  const [deleteCompany, setDeleteCompany] = useState(false);
  const toggleDeleteCompany = () => setDeleteCompany((v) => !v);

  return (
    <>
      <Appbar title="Settings" />
      <div className="mb-20">
        <div className="mb-10">
          <div className="flex gap-3">
            <img className="w-6 h-6" src={na} alt="" />
            <h5 className="font-semibold text-dark text-h2 pb-1 border-b border-neutral-400 flex-grow">
              Personal
            </h5>
          </div>
          <div className="ml-9">
            <div className="flex justify-between">
              <InlineTextField label="Email" defaultValue="john.doe@email.com" />
              <InlineTextField label="First Name:" defaultValue="john" />
              <InlineTextField label="Last Name:" defaultValue="Doe" />
            </div>
          </div>
        </div>
        <div className="mb-10">
          <div className="flex gap-3">
            <img className="w-6 h-6" src={na} alt="" />
            <h5 className="font-semibold text-dark text-h2 pb-1 border-b border-neutral-400 flex-grow">
              Company
            </h5>
          </div>
          <div className="ml-9">
            <div className="flex justify-between">
              <InlineTextField label="Name" defaultValue="ACME" />
              <InlineTextField label="Contact Email:" defaultValue="acme@gmail.com" />
              <InlineTextField label="Phone Number:" defaultValue="+791101101032" />
            </div>
          </div>
        </div>
        <div className="mb-10">
          <div className="flex gap-3">
            <img className="w-6 h-6" src={na} alt="" />
            <h5 className="font-semibold text-dark text-h2 pb-1 border-b border-neutral-400 flex-grow">
              Products
            </h5>
          </div>
          <div className="ml-20">
            <ul className="list-none mt-6">
              {[
                'Avocado Shelf-life Greencell',
                'Avocado Shelf-life Mission',
                'Grapes QA Flag',
                'Grapes Waste %',
                'Pepper Shelf-life Israel',
              ].map((_, i) => (
                <li className="text-neutral-900 my-4 text-md tracking-[0.3px]" key={i}>
                  {_}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <div className="mb-4 flex gap-3 ">
          <img className="w-6 h-6" src={na} alt="" />
          <div className="pb-2 flex justify-between flex-grow border-b border-neutral-400">
            <h5 className="font-semibold text-dark text-h2 flex-grow">Personal</h5>
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
                <span className="uppercase font-semibold text-xs text-primary-blue">DELETE</span>
              </button>
            </div>
          </div>
        </div>
        <div className="ml-9">
          <Table selectable datam={table} />
        </div>
      </div>

      <div className="mb-10">
        <div className="flex gap-3">
          <img className="w-6 h-6" src={na} alt="" />
          <h5 className="font-semibold text-dark text-h2 pb-1 border-b border-neutral-400 flex-grow">
            Danger Zone
          </h5>
        </div>
        <div className="ml-9 mt-4">
          <div className="flex gap-6">
            <Button onClick={toggleDeleteUser} color="accent-red" text="Delete User" size="small" />
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
        <p>In order to delete user, please send email to support@via-cool.com</p>
      </Modal>
      <Modal title="Delete Company" close={toggleDeleteCompany} open={deleteCompany}>
        <p>In order to delete company, please send email to support@via-cool.com</p>
      </Modal>
    </>
  );
}

export default Settings;
