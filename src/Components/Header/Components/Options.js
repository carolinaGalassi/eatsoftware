const DropDownButton = ({ handleDropDown, title, index }) => {
  return (
    <button
      onClick={handleDropDown}
      className="text-gray-700 w-full block px-4 py-2 text-sm hover:bg-slate-300"
      role="menuitem"
      tab-index="-1"
      id={`menu-item-${index}`}
    >
      {title}
    </button>
  );
};

export const Options = ({ openDropDown, handleDropDown }) => {
  return (
    <div
      className={`${
        openDropDown ? "block" : "hidden"
      } absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabIndex="-1"
    >
      <div className="py-1" role="none">
        <DropDownButton
          title="Guardar y salir"
          handleDropDown={handleDropDown}
          index={1}
        />
        <DropDownButton
          title="Salir sin guardar"
          handleDropDown={handleDropDown}
          index={2}
        />
      </div>
    </div>
  );
};
