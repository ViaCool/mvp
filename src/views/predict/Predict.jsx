import React, { useContext, useState } from "react";
import Button from "../../components/common/Button";
import FileUplaod from "../../components/common/FileUplaod";
import SelectField from "../../components/common/SelectField";
import Table from "../../components/common/Table";
import Appbar from "../../components/layout/Appbar";
import { FormatContext } from "../../context/FormatContext";
import deBlack from "../../images/delete_black_24dp (1) 3.svg";
import gr from "../../images/Group 1191.svg";
import { formatsApi } from "../../apiServices/formatsApi";
import { OrganizationContext } from "../../context/OrganizationContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UploadFileApi } from "../../apiServices/organizationApi";

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
  cols: ["Name", "Uploaded", "Produce", ""],
  rows: [
    [
      "grapes-1213-prediction.xlsx",
      "30 Dec 2021, 11:12",
      "Grapes",
      <TableAction />,
    ],
    [
      "grapes-1213-prediction.xlsx",
      "30 Dec 2021, 11:12",
      "Grapes",
      <TableAction />,
    ],
    [
      "grapes-1213-prediction.xlsx",
      "30 Dec 2021, 11:12",
      "Grapes",
      <TableAction />,
    ],
    [
      "grapes-1213-prediction.xlsx",
      "30 Dec 2021, 11:12",
      "Grapes",
      <TableAction />,
    ],
    [
      "grapes-1213-prediction.xlsx",
      "30 Dec 2021, 11:12",
      "Grapes",
      <TableAction />,
    ],
    [
      "grapes-1213-prediction.xlsx",
      "30 Dec 2021, 11:12",
      "Grapes",
      <TableAction />,
    ],
    [
      "grapes-1213-prediction.xlsx",
      "30 Dec 2021, 11:12",
      "Grapes",
      <TableAction />,
    ],
    [
      "grapes-1213-prediction.xlsx",
      "30 Dec 2021, 11:12",
      "Grapes",
      <TableAction />,
    ],
    [
      "grapes-1213-prediction.xlsx",
      "30 Dec 2021, 11:12",
      "Grapes",
      <TableAction />,
    ],
    [
      "grapes-1213-prediction.xlsx",
      "30 Dec 2021, 11:12",
      "Grapes",
      <TableAction />,
    ],
  ],
};

function Predict() {
  const {
    setFormatData,
    SetSelectedProduceType,
    format,
    setProduceTypes,
    produceTypes,
    selectedProduceTypeId,
  } = useContext(FormatContext);
  const { organization, Files, pushFileReport } =
    useContext(OrganizationContext);
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

      return;
    }
  };
  React.useEffect(() => {
    InitData();
  }, [!format, organization]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handlePredict = async () => {
    setLoading(true);
    const res = await UploadFileApi(
      organization?.id,
      selectedProduceTypeId,
      Files
    );
    console.log(res);
    if (!res?.error) {
      pushFileReport(...res?.data?.files);
      toast.success("File has been uploaded succesfully", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
        <Table datam={table} />
      </div>
    </>
  );
}

export default Predict;
