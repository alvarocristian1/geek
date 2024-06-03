//-----------------------------
import { servicesCryptos } from "../services/peticiones.js"; //agregar js a peticiones

//------------------

const cryptoContainer = document.querySelector("[data-product]");
const form = document.querySelector("[data-form]");
const botonDelete = document.querySelector("[data-id]");

//----------------------

function createCard(img, name, price, id) {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `

      <div class="foto-card">
        <img src="${img}" alt="${name}">
      </div>
    
      <div class="card-container--info">
        <p class="a">${name}</p>
        <div class="card-container--value">
          <p>usd ${price}</p>
          <button data-id="${id}" class="delete-button" >
            <img src="image/bote.png" alt="cesto" class="foto_cesto">
          </button>  
        </div>
      </div>    
  `;

  //---
  const botonDelete = card.querySelector("[data-id]");
  botonDelete.addEventListener("click", async () => {
    try {
      await servicesCryptos.cryptoDelete(id);
      card.remove();
    } catch (err) {
      console.log("Error al borrar producto:", err);
    }
  });

  //---

  cryptoContainer.appendChild(card);
  return card;
}

const render = async () => {
  try {
    const listaFinal = await servicesCryptos.cryptoList(); // ctrl espacio y te da el import

    //  listaFinal.forEach((crypto) => {
    //    cryptoContainer.appendChild(
    //      createCard(crypto.img, crypto.name, crypto.price, crypto.id)
    //    );
    //  });

    listaFinal.forEach((crypto) => {
      cryptoContainer.appendChild(
        createCard(crypto.img, crypto.name, crypto.price, crypto.id)
      );
    });
  } catch (err) {
    console.log(err);
  }
};

//--------------------------------------------------

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("[data-name]").value;
  const price = document.querySelector("[data-price]").value;
  const img = document.querySelector("[data-img]").value;

  //console.log(name);
  //console.log(price);
  //console.log(img);
  servicesCryptos
    .cryptoCreate(name, price, img)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
});

render();

//----------------------------------------
