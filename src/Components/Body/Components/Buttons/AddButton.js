export const AddButton = () => {
  return (
    <button
      onClick={(e) => console.log("Click en +")}
      className="rounded-md bg-white hover:bg-slate-200 "
    >
      <img
        className="object-cover h-8 w-8"
        src="./asset/Buttons/+.png "
        alt="Boton para incrementar"
      />
    </button>
  );
};
