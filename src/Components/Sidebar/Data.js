import { data } from "../../Services/Api";
import { Categories } from "./Components/Categories";

export const sidebarOptions = [
  {
    id: "XX1",
    img: "./asset/Sidebar/Aberturas.png",
    title: "Aberturas",
    alt: "Imagen opcion aberturas",
  },
  {
    id: "XX2",
    img: "./asset/Sidebar/Equipamiento.png",
    title: "Equipamiento",
    alt: "Imagen opcion equipamiento",
  },
  {
    id: "XX3",
    img: "./asset/Sidebar/Terminaciones.png",
    title: "Terminaciones",
    alt: "Imagen opcion terminaciones",
  },
];

export const options = {
  XX2: <Categories getData={data.getEquipamento} title="Equipamiento" />,
  XX1: <Categories getData={data.getAberturas} title="Aberturas" />,
  XX3: <Categories getData={data.getTerminaciones} title="Terminaciones" />,
};
