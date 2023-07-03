import axios from 'axios';

const apiUrl = "https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/";

export async function getCardSakuraList() {
  try {
    const response = await axios.get(apiUrl);
    const cards = response.data;
    return cards;
  } catch (error) {
    console.log("No se pudo obtener los datos", error);
    return [];
  }
}
