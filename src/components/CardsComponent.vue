<script setup>
  import { ref, onMounted } from 'vue';
  import { getCardSakuraList } from '../service/apiService.js';
  

  const props = defineProps({
    
    card: {
      type: Object,
      default: null
    },
    /* cardStatus: {
      type: String,
      default: "Seleccione una carta para ver su pasado"
    }, */
    showLink: {
      type: Boolean,
      default: false
    }
  });





    /* const sakuraCards = ref([]); */
    /* const selectedCards = ref([]);
    const cardStatus = ref("Seleccione una carta para ver su pasado");
    const showLink = ref (false); */

    /* onMounted(async () => {
      sakuraCards.value = await getCardSakuraList();
    }); */

    /* function borderMark(event, card) {
  const index = selectedCards.value.indexOf(card);
  
  if (index !== -1) {
    selectedCards.value.splice(index, 1);
    event.target.style.border = "";
  } else if (selectedCards.value.length < 3) {
    selectedCards.value.push(card);
    event.target.style.border = "8px solid red";
  }
  switch(selectedCards.value.length) {
    case 0:
      cardStatus.value = "Seleccione una carta para ver su pasado";
      break;
    case 1:
      cardStatus.value = "Ahora seleccione una carta para ver su presente";
      break;
    case 2:
      cardStatus.value = "Por ultimo seleccione una carta para ver su futuro";
      showLink.value = false;
      break;
    default:
      cardStatus.value = "";
      showLink.value = true;
      break;
  }
} */

      
 
  

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
  <img :src="card.cardsReverse.sakuraReverse" alt="" @click="borderMark($event, card)">
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
  
  