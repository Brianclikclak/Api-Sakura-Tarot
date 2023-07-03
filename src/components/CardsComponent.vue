<script>
  import { ref, onMounted } from 'vue';
  import { getCardSakuraList } from '../service/apiService.js';
  
  export default {
    setup() {
      const sakuraCards = ref([]);
  
      onMounted(async () => {
        sakuraCards.value = await getCardSakuraList();
      });
  console.log(sakuraCards);
      return {
        sakuraCards
      };
    }
  };
  </script>


<template>
    <div class="cards-container">
        <div class="cards" v-for="card in sakuraCards" :key="card.id">
            <img :src="card.sakuraCard" alt=""/>
            <span>{{card.cardNumber}} {{card.kanji}} {{ card.englishName }} </span>
            <span>{{card.meaning}} </span>
        </div>
        
    </div> 
       
    
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
  
  