import { useContext, useState } from "react";
import { OptionDetails } from "./OptionsDetails";
import { EatContext } from "../../../Context/Context";

export const OptionSelected = ({ title, data }) => {
  const [showData, setShowData] = useState({ show: true, id: "" });
  const { updateStep, step } = useContext(EatContext);

  return (
    <div>
      {step === 1 ? (
        <>
          <h3 className="text-xl font-medium text-slate-500">{title}</h3>
          <div className="flex flex-col gap-2 mt-2">
            {data.map((op, index) => {
              return (
                <button
                  key={index}
                  className="rounded-md bg-white flex items-center font-light justify-between p-2 hover:bg-slate-200"
                  onClick={(e) => {
                    setShowData({ show: false, id: index });
                    updateStep(2);
                  }}
                >
                  {op.name}
                  <img
                    className="object-cover h-4 w-4 rotate-180"
                    src={"./asset/activo.png"}
                    alt="logo of the software"
                  />
                </button>
              );
            })}
          </div>
        </>
      ) : (
        <OptionDetails
          title={title}
          data={data[showData.id]}
          setShowData={setShowData}
          updateStep={updateStep}
          step={step}
        />
      )}
    </div>
  );
};
