<script setup>
  import { ref, onMounted } from 'vue';
  import { getCardSakuraList } from '../service/apiService.js';
  import { RouterLink } from 'vue-router';


   
    const sakuraCards = ref([]);
    const selectedCards = ref([]);
    const cardStatus = ref("Seleccione una carta para ver su pasado");
    /* const setTime = ref("Pasado"); */
    const showLink = ref (false);

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
        event.target.style.border = "12px dashed #FDAA08";
        event.target.style.animation = "border-color-animation 2s infinite";
      }
      if (selectedCards.value.length === 0){
        cardStatus.value = "Seleccione una carta para ver su pasado";      
      } else if (selectedCards.value.length === 1) {
        cardStatus.value = "Ahora seleccione una carta para ver su presente";
        /* setTime.value="PASADO";  */
      } else if (selectedCards.value.length === 2) {
        cardStatus.value = "Por ultimo seleccione una carta para ver su futuro";
        /* setTime.value="PRESENTE"; */
        showLink.value = false;
      } else if (selectedCards.value.length === 3){
        /* setTime.value="FUTURO"; */
        cardStatus.value = "";
        showLink.value = true;
      } 
    }

   
</script>


<template>
  <div class="status">{{ cardStatus }} </div>
  <div class="btn" v-if="showLink">
    
      <RouterLink :to="{ path: '/cards', query: { selectedCards: JSON.stringify(selectedCards) /* setTime: JSON.stringify(setTime) */ }}" class="btn-card">Mostrar cartas seleccionadas</RouterLink>

  </div>

      <div class="cards-container">
    <div class="cards" v-for="card in sakuraCards" :key="card.id">
      <img :src="card.cardsReverse.sakuraReverse" alt="" @click="borderMark($event, card)">
        </div>
        
    </div> 
    <!-- <router-view/> -->
</template>

  <style scoped>
  @import url('https://fonts.cdnfonts.com/css/sakura');


 .status{
  text-align: center;
  margin-top: 40px;
  font-weight: bold;
  font-family: 'Sakura', sans-serif;
  font-size: 30px;
  color: #FDAA08;
 }

 .btn {
  display: flex;
  justify-content: center;
  margin-top: 30px;
 }

 .btn-card{
  text-decoration: underline;
  border-radius: 5px;
  font-family: 'Sakura', sans-serif;
  color: #FDAA08;
  font-size: 30px;
  background-color: aliceblue;
  padding: 10px;
  text-decoration: none;
 }

 .btn-card:hover{
  color: aliceblue;
  background-color: #FDAA08;
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
  width: 120px;
  margin: 8px;
  cursor: pointer;

}
@keyframes border-color-animation {
  0% {
    border-color: #FDAA08;
  }
  50% {
    border-color: #FF0000;
  }
  100% {
    border-color: #FDAA08;
  }
}


</style>
  
  