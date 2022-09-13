const defaultUrl = "https://cavaleiro-api.herokuapp.com/cavaleiros";

export const api = {
  createAnime: async (link) => {
    const response = await fetch(defaultUrl + "/create", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(link),
    });
    const newLink = await response.json();
    return newLink;
  },

  getAllAnimes: async () => {
    const response = await fetch(defaultUrl + "/");
    const allLinks = await response.json();

    return allLinks;
  },
};