import React from 'react';
import { useState } from 'react';
// import Button from '../../components/common/Button';
// import FileUplaod from '../../components/common/FileUplaod';
import Modal from '../../components/common/Modal';
import SelectField from '../../components/common/SelectField';
import Appbar from '../../components/layout/Appbar';
import Progress from './Progress';

function Predict() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <div className="px-2 mb-6">
        <Appbar title="Predict" />
        <div>
          <h6 className="font-semibold text-h4 text-dark mb-1.5">Produce</h6>
          <SelectField />
        </div>
      </div>
      <div className="w-full min-h-[300px] flex items-center justify-center">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="text-h2 bg-neutral-300 duration-200 uppercase font-semibold hover:bg-neutral-400 px-6 py-3"
        >
          OPEN File uploading modal
        </button>
      </div>
      <div>
        <Modal open={open} title="Uploading 4 Filles" close={() => setOpen(false)}>
          <ul className="list-none flex flex-col gap-5 mb-14">
            <Progress parcent={100} />
            <Progress parcent={75} />
            <Progress error="Missing field grape_variety" parcent={25} />
            <Progress parcent={0} />
          </ul>
          <div className="flex justify-end mr-12">
            <button type="button" className="uppercase text-primary-blue text-md tracking-[0.2px]">
              ERROR LOG FILE
            </button>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default Predict;
