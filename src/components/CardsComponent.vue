<script setup>
  import { ref, onMounted } from 'vue';
  import { getCardSakuraList } from '../service/apiService.js';
  

  const props = defineProps({
    
    card: {
      type: Object,
      default: null
    },

    borderMark: {
      type: Function,
      
    }
    /* cardStatus: {
      type: String,
      default: "Seleccione una carta para ver su pasado"
    }, */
    /* selectedCards:{
      type: Function
    } */

    /* showLink: {
      type: Boolean,
      default: false
    } */
  });


</script>


<template>
  <!-- <div class="status">{{ props.cardStatus }} </div>
  <div class="btn" v-if="props.showLink">
    
      <RouterLink :to="{ path: '/cards', query: { selectedCards: JSON.stringify(selectedCards) } }" class="btn-card">Mostrar cartas seleccionadas</RouterLink>

  </div>

      <div class="cards-container">
    <div class="cards" v-for="card in sakuraCards" :key="card.id">
      <img :src="sakuraCards.cardsReverse.sakuraReverse" alt="" @click="borderMark($event, card)">
        </div>
        
    </div>  -->
<div>

  <!-- <h1>
      {{ card.spanishName }}
      
      
  </h1> -->
  <img :src="card.cardsReverse.sakuraReverse" alt="" >
</div>
    
</template>

  <style scoped>
  div{
    width: 15em;
    height: 30em;
    /* background-color: red; */
    
  }
 /*  @import url('https://fonts.cdnfonts.com/css/sakura');

 .status{
  text-align: center;
  margin-top: 10px;
  font-weight: bold;
  font-family: 'Sakura', sans-serif;
  font-size: 30px;
 }
 .btn {
  display: flex;
  justify-content: center;
  margin-top: 30px;
 }
 .btn-card{
  text-decoration: none;
  background-color: pink;
  border-radius: 5px;
  font-family: 'Sakura', sans-serif;
  color: darkmagenta;
  font-size: 30px;
 }
 
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
 */
</style>
  
  