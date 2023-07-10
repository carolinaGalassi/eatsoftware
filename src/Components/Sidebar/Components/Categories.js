import { useEffect, useState } from "react";
import { OptionSelected } from "./OptionSelected";

export const Categories = ({ getData, title }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getAll = () => {
      getData().then((theData) => setData(theData));
    };
    getAll();
  }, [getData]);

  return <OptionSelected title={title} data={data} />;
};
