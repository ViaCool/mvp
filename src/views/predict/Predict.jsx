import React from 'react';
import Button from '../../components/common/Button';
import FileUplaod from '../../components/common/FileUplaod';
import SelectField from '../../components/common/SelectField';
import Table from '../../components/common/Table';
import Appbar from '../../components/layout/Appbar';
import deBlack from '../../images/delete_black_24dp (1) 3.svg';
import gr from '../../images/Group 1191.svg';

const TableAction = () => (
  <div className="flex gap-3 items-center">
    <button
      type="button"
      className="contrast-0 hover:contrast-100 opacity-50 hover:opacity-100 duration-150"
    >
      <img className="w-6 h-6" src={deBlack} alt="" />
    </button>
    <button
      type="button"
      className="contrast-0 hover:contrast-100 opacity-50 hover:opacity-100 duration-150"
    >
      <img className="w-6 h-6" src={gr} alt="" />
    </button>
  </div>
);

const table = {
  cols: ['Name', 'Uploaded', 'Produce', ''],
  rows: [
    ['grapes-1213-prediction.xlsx', '30 Dec 2021, 11:12', 'Grapes', <TableAction />],
    ['grapes-1213-prediction.xlsx', '30 Dec 2021, 11:12', 'Grapes', <TableAction />],
    ['grapes-1213-prediction.xlsx', '30 Dec 2021, 11:12', 'Grapes', <TableAction />],
    ['grapes-1213-prediction.xlsx', '30 Dec 2021, 11:12', 'Grapes', <TableAction />],
    ['grapes-1213-prediction.xlsx', '30 Dec 2021, 11:12', 'Grapes', <TableAction />],
    ['grapes-1213-prediction.xlsx', '30 Dec 2021, 11:12', 'Grapes', <TableAction />],
    ['grapes-1213-prediction.xlsx', '30 Dec 2021, 11:12', 'Grapes', <TableAction />],
    ['grapes-1213-prediction.xlsx', '30 Dec 2021, 11:12', 'Grapes', <TableAction />],
    ['grapes-1213-prediction.xlsx', '30 Dec 2021, 11:12', 'Grapes', <TableAction />],
    ['grapes-1213-prediction.xlsx', '30 Dec 2021, 11:12', 'Grapes', <TableAction />],
  ],
};

function Predict() {
  return (
    <>
      <div className="px-2 mb-6">
        <Appbar title="Predict" />
        <div>
          <h6 className="font-semibold text-h4 text-dark mb-1.5">Produce</h6>
          <SelectField />
        </div>
      </div>
      <div className="flex mb-16 gap-16">
        <div className="flex gap-8 flex-col">
          <div>
            <FileUplaod />
          </div>
          <div className="w-full max-w-[426px]">
            <Button className="w-full" text="Predict" />
          </div>
        </div>
        <div>
          <div className="bg-neutral-375 rounded-[20px] px-4 py-7 text-md text-neutral-900 max-w-max">
            <p>Your files should include the following fields:</p>
            <br />
            <p className="px-2">
              id
              <br />
              pick_date
              <br />
              pick_location
              <br />
              grape_type
              <br />
              grape_variety
              <br />
              product_type
              <br />
            </p>
          </div>
        </div>
      </div>
      <div>
        <h4 className="font-semibold text-h2 text-dark mb-4">Files</h4>
        <Table datam={table} />
      </div>
    </>
  );
}

export default Predict;
