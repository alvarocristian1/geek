// --------------------------------------
const cryptoList = () => {
  return fetch("http://localhost:3000/cryptos")
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

//------------------------------------------

const cryptoCreate = (name, price, img) => {
  return fetch("http://localhost:3000/cryptos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      price,
      img,
    }),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

//---------------------------------------

const cryptoDelete = (id) => {
  return fetch(`http://localhost:3000/cryptos/${id}`, {
    method: "DELETE",
   // headers: {
    //  "Content-Type": "application/json",
   // },
  })
    .then((res) => res.json())
   .catch((err) => console.log(err));
};

//------------------------------------------

export const servicesCryptos = {
  cryptoList,
  cryptoCreate,
  cryptoDelete,
};
