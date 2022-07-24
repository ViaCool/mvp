import React, { useContext, useEffect, useState } from "react";
import Button from "../../components/common/Button";
import FileUplaod from "../../components/common/FileUplaod";
import SelectField from "../../components/common/SelectField";
import Table from "../../components/common/Table";
import Appbar from "../../components/layout/Appbar";
import { FormatContext } from "../../context/FormatContext";
import { OrganizationContext } from "../../context/OrganizationContext";
import { toast } from "react-toastify";

import Progress from "./Progress";
import Modal from "../../components/common/Modal";
import { UploadFileApi } from "../../apiServices/organizationApi";

function Predict() {
  const [open, setOpen] = useState(false);
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
  const { produceTypes, selectedProduceTypeId } = useContext(FormatContext);
  const { organization, Files, reports, UploadResponse, setFilesResponse } =
    useContext(OrganizationContext);

  const [inputRules, setRules] = useState(null);
  useEffect(() => {
    const data = organization?.ml_models?.filter(
      (item) => item?.produce_type_id === selectedProduceTypeId
    );
    organization?.ml_models?.filter &&
      setRules(
        ...data?.map((ml_model, i) => {
          return (
            ml_model?.produce_type_id === selectedProduceTypeId &&
            i === 0 &&
            ml_model?.input_fields?.toString()?.split(",")
          );
        })
      );
  }, [organization, selectedProduceTypeId]);

  const [loading, setLoading] = useState(false);
  const handlePredict = async () => {
    if (Files?.length === 0) {
      toast.error(`Files are empty, Please choose files first`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    setLoading(true);
    const res = await UploadFileApi(
      organization?.id,
      selectedProduceTypeId,
      Files
    );
    if (!res?.error) {
      setFilesResponse(res?.data);
      setLoading(false);
      setOpen(true);
      return;
    }
    setLoading(false);
    toast.error(`Error Found: ${JSON.stringify(res?.error?.message)}`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <div className="px-2 mb-6">
        <Appbar title="Predict" />
        <div>
          <h6 className="font-semibold text-h4 text-dark mb-1.5">Produce</h6>
          <SelectField options={produceTypes} />
        </div>
      </div>
      <div className="flex mb-16 gap-16">
        <div className="flex gap-8 flex-col">
          <div>
            <FileUplaod preview={true} />
          </div>
          <div className="w-full max-w-[426px]">
            {loading ? (
              <Button
                className="w-full"
                text="Loading ..."
                onClick={handlePredict}
              />
            ) : (
              <Button
                className="w-full"
                text="Predict"
                onClick={handlePredict}
              />
            )}
          </div>
        </div>
        <div>
          <div className="bg-neutral-375 rounded-[20px] px-4 py-7 text-md text-neutral-900 max-w-max">
            <p>Your files should include the following fields:</p>
            <br />
            <ul className="px-2">
              {inputRules?.map((inputField, index) => (
                <React.Fragment key={index}>
                  <li> {inputField}</li>
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>
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
      <div>
        <h4 className="font-semibold text-h2 text-dark mb-4">Files</h4>
        <Table cols={["Name", "Uploaded", "Produce", ""]} rows={reports} />
      </div>
    </>
  );
}

export default Predict;
