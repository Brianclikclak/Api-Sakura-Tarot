<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps ({
    selectedCards: {
        type: Object,
    },
    /* setTime: {
        type: String,
    }, */
});
const sortedCards = ref([...props.selectedCards].sort((a, b) => a.index - b.index));


sortedCards.value.forEach((card, index) => {
    if (index === 0){
        card.time = 'PASADO';
    } else if (index === 1) {
        card.time = 'PRESENTE';
    } else if ( index === 2) {
        card.time = 'FUTURO';
    }
    
});
const discoverCards = ref(false);
const showMeaning = ref(false);

function toggleRotation() {
  discoverCards.value = !discoverCards.value;
  showMeaning.value = !showMeaning.value;
}

</script>

<template>
  <div class="container">
    <div class="cards-container" v-for="card in selectedCards" :key="card.id">
      <div class="cards" :class="{ flipped: discoverCards }">
        <div class="time"> {{ card.time }}</div>
        <!-- <div class="time" v-if="setTime === 'Pasado'">PASADO</div>
        <div class="time" v-else-if="setTime === 'Presente'">PRESENTE</div>
        <div class="time" v-else-if="setTime === 'Futuro'">FUTURO</div> -->
        <img class="cards-front" :src="card.cardsReverse.sakuraReverse" alt="">
        <img class="cards-back" :src="card.sakuraCard" alt="">
      </div>

      <div class="meaning">
        <h3 v-if="showMeaning">{{ card.kanji }} {{ card.englishName }} </h3>
        <span v-if="showMeaning">{{ card.meaning }}</span>
      </div>
    </div>
  </div>
  <!-- <div class="btn-container"> -->
  <div class="btn">
    <button class="discover" @click="toggleRotation">Veamos qué dicen tus cartas</button>
    <router-link to="/" class="btn-card">Reiniciar lectura</router-link>
  </div>
<!-- </div> -->
</template>

<style scoped>

.container{
    display: flex;
}
.cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10em;
    width: 100%;
    height: 400px;

}
.time{
    color: #FDAA08;
    text-align: center;
    font-weight: bolder;
}

.cards{
    position: relative;
    margin: 10px;
    width: 250px;
    height: 350px;
    perspective: 1000px;
}
.flipped .cards-front {
  transform: rotateY(-180deg);
}
.flipped .cards-back {
  transform: rotateY(0);
}


.cards-front , .cards-back {
    display: flex;
    flex-direction: column;
    margin: 10px;
    width: 220px;
    transition: transform 2s ease;
    backface-visibility:hidden;
    transform-style: preserve-3d;
}

.cards-back{
    position: absolute;
    z-index:1;
    transform: rotateY(180deg);
}

.cards-front{ 
    position: absolute;
    z-index: 2;
}

.meaning {
    text-align: center;
}
h3, span{
  font-family: 'Sakura', sans-serif;
  text-align: center;
  font-size: 16px;
  color:#FDAA08;
  margin-top: 20px;
  /* border: 1px dashed white; */
  /* background-color: aliceblue; */
}
  

.btn{
  /* display: flex;
  justify-content: center;
  margin-top: 20px; */
  position: fixed;
  top: 45em;
  left: 35em;
  
}


.btn-card , .discover{
  text-decoration: none;
  border-radius: 5px;
  font-family: 'Sakura', sans-serif;
  color: #FDAA08;
  font-size: 20px;
  
}

.discover{
    margin-right: 50px;
    cursor: pointer;
}
.discover:hover{
    background-color:  #FDAA08;
    color: aliceblue;
}

.btn-card{
    padding-top: 5px;
    
}

.btn-card:hover{
    background-color:  #FDAA08;
    color: aliceblue;
}



</style>

