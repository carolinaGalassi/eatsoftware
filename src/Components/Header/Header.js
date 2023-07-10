import { DropDown } from "./Components/Dropdown";

export const Header = () => {
  return (
    <header className="bg-zinc-800 flex justify-around items-center">
      <img
        className="object-cover h-20 w-20 p-2 hover:animate-ping"
        src="./asset/logo.png"
        alt="logo of the software"
      />
      <DropDown />
    </header>
  );
};
