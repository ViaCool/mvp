import React, { useContext, useState } from "react";
import Button from "../../components/common/Button";
import FileUplaod from "../../components/common/FileUplaod";
import SelectField from "../../components/common/SelectField";
import Table from "../../components/common/Table";
import Appbar from "../../components/layout/Appbar";
import { FormatContext } from "../../context/FormatContext";

import { formatsApi } from "../../apiServices/formatsApi";
import { OrganizationContext } from "../../context/OrganizationContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getReports, UploadFileApi } from "../../apiServices/organizationApi";

function Predict() {
  const {
    setFormatData,
    SetSelectedProduceType,
    format,
    setProduceTypes,
    produceTypes,
    selectedProduceTypeId,
  } = useContext(FormatContext);
  const {
    organization,
    Files,
    setReport,
    reports,
    setFilesResponse,
    clearFiles,
  } = useContext(OrganizationContext);
  const InitData = async () => {
    const res = await formatsApi();
    if (!res?.error) {
      setFormatData(res?.data);
      const uniqueIds = [
        ...new Set(organization?.ml_models?.map((d) => d?.produce_type_id)),
      ];
      const dataArray = [];
      res?.data &&
        Object?.keys(res?.data?.produce_types)?.map((d) =>
          uniqueIds?.map(
            (id) =>
              id === res?.data?.produce_types[d] &&
              dataArray?.push({
                value: res?.data?.produce_types[d],
                name: d,
              })
          )
        );
      setProduceTypes(dataArray);
      SetSelectedProduceType(dataArray[0]?.value);
    }
    if (organization?.id) {
      const reports = await getReports(organization?.id);
      if (!reports?.error) {
        setReport(reports);
      }
    }
  };
  React.useEffect(() => {
    InitData();
  }, [!format, organization]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handlePredict = async () => {
    if (Files?.length === 0) {
      toast.error(
        `Files are empty, Please choose files first`,
        {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
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
          <SelectField options={produceTypes} />
        </div>
      </div>
      <div className="flex mb-16 gap-16">
        <div className="flex gap-8 flex-col">
          <div>
            <FileUplaod />
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
            {organization?.ml_models?.map((ml_model, i) => {
              if (
                ml_model?.produce_type_id === selectedProduceTypeId &&
                i === 0
              ) {
                return (
                  <p className="px-2">
                    {ml_model?.input_fields
                      ?.toString()
                      ?.split(",")
                      ?.map((inputField) => (
                        <React.Fragment>
                          {inputField}
                          <br />
                        </React.Fragment>
                      ))}
                  </p>
                );
              }
              return;
            })}
          </div>
        </div>
      </div>
      <div>
        <h4 className="font-semibold text-h2 text-dark mb-4">Files</h4>
        <Table cols={["Name", "Uploaded", "Produce", ""]} rows={reports} />
      </div>
    </>
  );
}

export default Predict;
