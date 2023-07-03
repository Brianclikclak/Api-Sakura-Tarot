import axios from 'axios';

const apiUrl = "https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/";

export async function getCardSakuraList() {
  try {
    const sakuraCards = [];
    for (let i = 0; i <= 56; i++) {
      const response = await axios.get(apiUrl + i);
      const sakura = response.data;
      sakuraCards.push(sakura);
      console.log(sakuraCards);
    }
    return sakuraCards;
  } catch (error) {
    console.log("No se pudo obtener los datos", error);
    return [];
  }
}
