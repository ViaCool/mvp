import React from "react";
import { useState } from "react";

import Modal from "../../components/common/Modal";
import SelectField from "../../components/common/SelectField";
import Appbar from "../../components/layout/Appbar";
import { OrganizationContext } from "../../context/OrganizationContext";
import Progress from "./Progress";

function UploadProgress() {
  const [open, setOpen] = useState(true);
  const { UploadResponse } = React.useContext(OrganizationContext);
  const handleDownload = () => {
    let Text = "";
    UploadResponse?.files
      ?.filter((item) => item.status >= 400)
      ?.map((item) => (Text += `${item?.name} - ${item?.detail}\n`));
    const element = document.createElement("a");
    const file = new Blob([Text], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = "errors-log.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };
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
        <Modal
          open={open}
          title={`Uploading ${UploadResponse?.files?.length || 0} Files`}
          close={() => setOpen(false)}
        >
          {UploadResponse?.files?.map(({ name, status, detail }, i) => (
            <ul className="list-none flex flex-col gap-5 mb-14" key={i}>
              <Progress filename={name} status={status} error={detail} />
            </ul>
          ))}
          <div className="flex justify-end mr-12">
            {UploadResponse?.files?.some((file) => file?.status >= 400) && (
              <button
                type="button"
                className="uppercase text-primary-blue text-md tracking-[0.2px]"
                onClick={handleDownload}
              >
                ERROR LOG FILE
              </button>
            )}
          </div>
        </Modal>
      </div>
    </>
  );
}

export default UploadProgress;
