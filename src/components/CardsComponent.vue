<script setup>
  import { ref, onMounted } from 'vue';
  import { getCardSakuraList } from '../service/apiService.js';
  import { RouterLink } from 'vue-router';


    const sakuraCards = ref([]);
    const selectedCards = ref([]);
    const cardStatus = ref("Seleccione una carta para ver su pasado");
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
        event.target.classList.add("borderMovement");
        event.target.style.border = "10px solid #FDAA08";
      }
      if (selectedCards.value.length === 0){
        cardStatus.value = "Seleccione una carta para ver su pasado";      
      } else if (selectedCards.value.length === 1) {
        cardStatus.value = "Ahora seleccione una carta para ver su presente";
      } else if (selectedCards.value.length === 2) {
        cardStatus.value = "Por ultimo seleccione una carta para ver su futuro";
        showLink.value = false;
      } else if (selectedCards.value.length === 3){
        cardStatus.value = "";
        showLink.value = true;
      } 
    }

   
</script>


<template>
  <div class="status">{{ cardStatus }} </div>
    <div class="btn" v-if="showLink">
      <RouterLink :to="{ path: '/cards', query: { selectedCards: JSON.stringify(selectedCards)}}" class="btn-card">Mostrar cartas seleccionadas</RouterLink>
    </div>

    <div class="cards-container">
        <div class="cards" v-for="card in sakuraCards" :key="card.id">
            <img class="img-reverse" :src="card.cardsReverse.sakuraReverse" alt="" @click="borderMark($event, card)">
          </div>  
    </div> 

</template>

  <style scoped>
  @import url('https://fonts.cdnfonts.com/css/sakura');
  

 .status{
  text-align: center;
  margin-top: 30px;
  font-weight: bold;
  font-family: 'Sakura', sans-serif;
  font-size: 30px;
  color: #f56a6a;
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
  color: #f56a6a;
  font-size: 20px;
  background-color: aliceblue;
  padding: 10px;
  text-decoration: none;
 }

 .btn-card:hover{
  color: aliceblue;
  background-color: #f56a6a
 }
 
.cards-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 50px auto;
  gap: 2em;
  height: 100%;
}

.cards{
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 120px;
  margin: 8px;
  cursor: pointer;
}

@keyframes borderMovement {
  0% {
    border-color: #fdca40;
  }
  50% {
    border-color: #f56a6a;
  }
  100% {
    border-color: #fdca40;
  }
}


.borderMovement {
  animation: borderMovement 1s linear infinite;
}
 </style>
  