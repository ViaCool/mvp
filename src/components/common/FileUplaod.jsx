import React from 'react';
import { useState } from 'react';
import Scrollbars from 'react-custom-scrollbars-2';
import caBlack from '../../images/cancel_black_24dp 1.svg';
import deBlack from '../../images/description_black_24dp 1 (1).svg';
import clBlack from '../../images/cloud_upload_black_24dp 1.svg';
import chBlack from '../../images/chevron_right_black_24dp (2) 1.svg';

const RenderFilename = ({ name }) => (
  <li className="flex gap-2 items-center">
    <p className="text-neutral-900 text-md tracking-[1%]">{name}</p>
    <button type="button">
      <img src={caBlack} className="w-[14px] h-[14px]" alt="" />
    </button>
  </li>
);
const id = Math.random();
function FileUplaod({ files }) {
  const [fileNames, setFileNames] = useState(files);

  return (
    <div>
      <label
        htmlFor={fileNames?.length > 0 ? '' : id}
        className="border-neutral-400 border-dashed bg-white rounded-[20px] p-10 pb-16 w-[426px] min-h-[345px] flex items-center justify-center text-center cursor-pointer relative"
      >
        <div className="flex flex-col items-center">
          <div className="relative inline-block">
            <img
              className="w-20 h-20 block mb-6 mx-auto"
              src={
                fileNames?.length > 0
                  ? deBlack
                  : clBlack
              }
              alt=""
            />
            {fileNames?.length > 0 && (
              <span className="absolute min-w-[24px] min-h-[24px] flex items-center justify-center -top-3 bg-primary-blue rounded-full text-white text-sm -right-2">
                {fileNames?.length}
              </span>
            )}
          </div>
          {fileNames?.length > 0 ? (
            <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={150}>
              <ul className="list-none flex gap-3 flex-col pr-3">
                {files.map((_, i) => (
                  <RenderFilename name={_} key={i} />
                ))}
              </ul>
            </Scrollbars>
          ) : (
            <p className="font-semibold text-h3 text-neutral-900">
              Drag &amp; Drop Files Here <br /> or Click to Select <br /> File CSV
            </p>
          )}
        </div>
        {fileNames?.length > 0 ? (
          <button
            type="button"
            className="absolute bottom-5 flex items-center"
            onClick={() => setFileNames([])}
          >
            <span className="font-semibold text-md tracking-[1%] text-primary-blue">Clear all</span>
            <img className="w-6 h-6" src={chBlack} alt="" />
          </button>
        ) : (
          <></>
        )}
      </label>
      {fileNames?.length > 0 ? <></> : <input id={id} type="file" className="hidden" />}
    </div>
  );
}

export default FileUplaod;
