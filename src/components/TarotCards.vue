<script>
import { ref, onBeforeMount } from 'vue';
import { getSakuraTarot } from '../service/apiService';

export default {
    setup(){
        const tarotCards = ref([]);

        onBeforeMount (async () =>{
            tarotCards.value = await getSakuraTarot();
        });
        
        return {
            tarotCards,
        }
    }
}
</script>

<template>
    <div class="mainContainer">
        <h1>Sakura Tarot</h1>
        <h3>Conoce tu presente, pasado y futuro</h3>
        <h5>Elige 3 cartas</h5>
    </div>
    <div class="cardContainer">
        <ul>
      <li v-for="card in tarotCards" :key="card.id">
        {{ card.spanishName }} - {{ card.meaning }}
      </li>
    </ul>
    </div>

</template>
