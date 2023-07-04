<script>
  import { ref, onMounted } from 'vue';
  import { getCardSakuraList } from '../service/apiService.js';
  import { RouterLink } from 'vue-router';

export default {
  setup() {
    const sakuraCards = ref([]);
    const selectedCards = ref([]);

    onMounted(async () => {
      sakuraCards.value = await getCardSakuraList();
    });

    function borderMark(event, card) {
      if (selectedCards.value.includes(card)) {
        const index = selectedCards.value.indexOf(card);
        selectedCards.value.splice(index, 1);
        event.target.style.border = "";
      } else if (selectedCards.value.length < 3) {
        selectedCards.value.push(card);
        event.target.style.border = "8px solid red";
      }
    }

    return {
      sakuraCards,
      selectedCards,
      borderMark
    };
  }
};
</script>


<template>
    <button class="selectedCards">
      <RouterLink to="/cards"> Mostrar cartas seleccionadas </RouterLink>
    </button>
      <div class="cards-container">
    <div class="cards" v-for="card in sakuraCards" :key="card.id">
      <img :src="card.sakuraCard" alt="" @click="borderMark($event, card)">
        <span>{{ card.cardNumber }} {{ card.kanji }} {{ card.englishName }}</span>
        <span>{{ card.meaning }}</span>
     
        </div>
        
    </div> 
      
    <RouterView/>
</template>

  <style scoped>
  @import url('https://fonts.cdnfonts.com/css/sakura');

 
.cards-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 50px auto;
  gap: 2em;
}

.cards{
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 250px;
  margin: 10px;
  
  
}

span{
  font-family: 'Sakura', sans-serif;
  text-align: center;
  font-size: 15px;
  
}

</style>
  
  