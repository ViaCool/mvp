import React, { useContext, Fragment } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import caBlack from "../../images/cancel_black_24dp 1.svg";
import deBlack from "../../images/description_black_24dp 1 (1).svg";
import clBlack from "../../images/cloud_upload_black_24dp 1.svg";
import chBlack from "../../images/chevron_right_black_24dp (2) 1.svg";
import { OrganizationContext } from "../../context/OrganizationContext";
import { v4 as uuidv4 } from "uuid";
import { useDropzone } from "react-dropzone";

const RenderFilename = ({ id, name, removeFile }) => (
  <li className="flex gap-2 items-center">
    <p className="text-neutral-900 text-md tracking-[1%]">{name}</p>
    <button type="button">
      <img
        src={caBlack}
        className="w-[14px] h-[14px] cursor-pointer z-50"
        alt=""
        onClick={() => {
          setTimeout(() => {
            removeFile(id);
          }, 50);
        }}
      />
    </button>
  </li>
);
const id = Math.random();
function FileUplaod({ preview = false }) {
  const { pushFiles, clearFiles, removeFile, Files } =
    useContext(OrganizationContext);

  const { getRootProps } = useDropzone({
    accept: "*",
    onDrop: (acceptedFiles) =>
      acceptedFiles?.map((file) => pushFiles({ file: file, id: uuidv4() })),
  });

  const handleClearAll = () => {
    clearFiles();
  };

  return (
    <div>
      <label
        htmlFor={preview && Files?.length > 0 ? "" : id}
        className="border-neutral-400 border-dashed bg-white rounded-[20px] p-5  w-[426px] min-h-[345px] flex items-center justify-center text-center  relative"
      >
        <div
          {...getRootProps({
            className: "dropzone",
            onClick: (e) => {
              Files?.length > 0 && e.stopPropagation();
            },
          })}
        >
          <div className="flex flex-col items-center">
            <div className="relative inline-block">
              <img
                className="w-20 h-20 block mb-6 mx-auto"
                src={preview && Files?.length > 0 ? deBlack : clBlack}
                alt=""
              />
              {preview && Files?.length > 0 && (
                <span className="absolute min-w-[24px] min-h-[24px] flex items-center justify-center -top-3 bg-primary-blue rounded-full text-white text-sm -right-2">
                  {preview && Files?.length}
                </span>
              )}
            </div>
          </div>
          {preview && Files?.length > 0 ? (
            <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={200}>
              <ul className="list-none flex gap-3 flex-col pr-3 z  ">
                {preview &&
                  Files?.map((file) => (
                    <RenderFilename
                      id={file.id}
                      name={file?.file?.name}
                      key={file.id}
                      removeFile={removeFile}
                    />
                  ))}
              </ul>
            </Scrollbars>
          ) : (
            <Fragment>
              {" "}
              {/* <input className="input-zone" {...getInputProps()} /> */}
              <p className="font-semibold text-h3 text-neutral-900">
                Drag &amp; Drop Files Here <br /> or Click to Select <br /> File
                CSV
              </p>{" "}
            </Fragment>
          )}
        </div>
        {preview && Files?.length > 0 ? (
          <button
            type="button"
            className="absolute bottom-5 flex items-center"
            onClick={handleClearAll}
          >
            <span className="font-semibold text-md tracking-[1%] text-primary-blue hover:cursor-pointer">
              Clear all
            </span>
            <img className="w-6 h-6" src={chBlack} alt="" />
          </button>
        ) : (
          <></>
        )}
      </label>
    </div>
  );
}

export default FileUplaod;
