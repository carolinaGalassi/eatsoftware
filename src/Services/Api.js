import axios from "axios";

export const data = {
  getEquipamento: () => {
    return axios
      .get(
        "https://us-central1-prueba-front-280718.cloudfunctions.net/equipamiento"
      )
      .then(({ data }) => {
        return data;
      });
  },
  getAberturas: () => {
    return axios
      .get(
        "https://us-central1-prueba-front-280718.cloudfunctions.net/aberturas"
      )
      .then(({ data }) => {
        return data;
      });
  },
  getTerminaciones: () => {
    return axios
      .get(
        "https://us-central1-prueba-front-280718.cloudfunctions.net/terminaciones"
      )
      .then(({ data }) => {
        return data;
      });
  },
};
