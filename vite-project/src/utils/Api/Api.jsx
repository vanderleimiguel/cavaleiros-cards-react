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

  updateCavaleiro: async (cavaleiroUpdate, id) => {
    const response = await fetch(defaultUrl + "/update-cavaleiro/" + id, {
      method: "PUT",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(cavaleiroUpdate),
    });
    const cavaleiroUpdated = await response.json();
    return cavaleiroUpdated
  },



  deleteCavaleiro: async (cavaleiroId) => {
    const response = await fetch(defaultUrl + "/delete-cavaleiro/" + cavaleiroId, {
      method: "DELETE",
      headers: new Headers({ "Content-Type": "application/json" }),
    });
    const cavaleiroDeleted = await response.json();
    return cavaleiroDeleted;
  },
};

