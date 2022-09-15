const defaultUrl = "https://cavaleiro-api.herokuapp.com/cavaleiros";

export const api = {

  createCavaleiro: async (cavaleiro) => {
    const response = await fetch(defaultUrl + "/create-cavaleiro", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(cavaleiro),
    });
    const newCavaleiro = await response.json();
    return newCavaleiro;
  },

  getAllCavaleiros: async () => {
    const response = await fetch(defaultUrl + "/all-cavaleiros");
    const allCavaleiros = await response.json();

    return allCavaleiros;
  },
};