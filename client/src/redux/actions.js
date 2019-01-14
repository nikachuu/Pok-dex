import axios from "axios";
 /*nao faco ideia se ta certo...*/
 
const config = {
  baseURL: "http://localhost:3001/"
};

const api = axios.create(config);

export function showPokemon(data) {

  const json = {
    _id: data._id,
    photo: data.photo,
    name: data.name,
    type: data.type ,
    description: data.description,
    keywords: [ data.keywords ]
  };

  return (dispatch) => {
    api
      .get("/search", json)
      .then(response => {
        data._id = response.data._id;
        data.photo = response.data.photo;
        data.name = response.data.name;
        data.type = response.data.type;
        data.description = response.data.description;
        data.keywords = [ response.data.keywords ];
        dispatch({ type: "SHOW_SPECIFIC", data })
      })
  }
};
