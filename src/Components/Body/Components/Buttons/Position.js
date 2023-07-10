const positionsOptions = [
  {
    id: "XX1",
    action: (e) => console.log("Click en flecha arriba"),
    className: "flex justify-center  col-span-2 bg-white hover:bg-slate-200 ",
    alt: "Flecha para ir para arriba",
  },
  {
    id: "XX2",
    action: (e) => console.log("Click en flecha izquierda"),
    className: "flex justify-center -rotate-90 bg-white hover:bg-slate-200",
    alt: "Flecha para ir para la izquierda",
  },
  {
    id: "XX3",
    action: (e) => console.log("Click en flecha derecha"),
    className: "flex justify-center rotate-90 bg-white hover:bg-slate-200 ",
    alt: "Flecha para ir para la derecha",
  },
  {
    id: "XX4",
    action: (e) => console.log("Click en flecha abajo"),
    className:
      "flex justify-center rotate-180 col-span-2 bg-white hover:bg-slate-200  ",
    alt: "Flecha para ir para abajo",
  },
];

export const Position = () => {
  return (
    <div className="grid grid-cols-2 rounded-lg ring-1 ring-black ring-opacity-5 p-0.5">
      {positionsOptions.map((position) => {
        return (
          <button
            key={position.id}
            onClick={position.action}
            className={position.className}
          >
            <img
              className="object-cover h-8 w-8"
              src="./asset/Buttons/Flecha.png"
              alt={position.alt}
            />
          </button>
        );
      })}
    </div>
  );
};
