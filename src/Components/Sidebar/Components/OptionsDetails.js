import { Images } from "./Images";

export const OptionDetails = ({
  title,
  data,
  setShowData,
  updateStep,
  step,
}) => {
  return (
    <>
      <button
        onClick={(e) => {
          setShowData({ show: true, id: "" });
          updateStep(1);
        }}
        className="ml-1 text-sm font-normal text-slate-400 hover:text-slate-300 "
      >{`<${title}`}</button>
      <h3 className="text-xl font-medium text-slate-500">{data.name}</h3>
      <section className="flex gap-2">
        <Images data={data} />
      </section>
    </>
  );
};
