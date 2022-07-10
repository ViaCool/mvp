import React, { useState, useContext } from "react";
import Button from "../../components/common/Button";
import FileUplaod from "../../components/common/FileUplaod";
import SelectField from "../../components/common/SelectField";
import Appbar from "../../components/layout/Appbar";
import { OrganizationContext } from "../../context/OrganizationContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FormatContext } from "../../context/FormatContext";
import { UploadFileApi } from "../../apiServices/organizationApi";

function Predict() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { selectedProduceTypeId } = useContext(FormatContext);
  const { Files, setFilesResponse, organization } =
    React.useContext(OrganizationContext);
  const handlePredict = async () => {
    if(Files?.length===0)
    {
      toast.error(`Files are empty, Please choose files first`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return
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
      navigate("/demo-upload-progress");
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
          <SelectField />
        </div>
      </div>
      <div className="flex gap-8 flex-col mb-16">
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
            <Button className="w-full" text="Predict" onClick={handlePredict} />
          )}
        </div>
      </div>
    </>
  );
}

export default Predict;
