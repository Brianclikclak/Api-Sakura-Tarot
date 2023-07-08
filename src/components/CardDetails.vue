<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps ({
    selectedCards: {
        type: Object,
    },
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
    <div class="btn">
        <button class="discover" @click="toggleRotation">Veamos qué dicen tus cartas</button>
        <router-link to="/" class="btn-card">Reiniciar lectura</router-link>
    </div>


    <div class="container">
        <div class="cards-container" v-for="card in selectedCards" :key="card.id">
          <span class="time"> {{ card.time }}</span>
        <div class="cards" :class="{ flipped: discoverCards }">
            
            <img class="cards-front" :src="card.cardsReverse.sakuraReverse" alt="">
            <img class="cards-back" :src="card.sakuraCard" alt="">
        </div>

        <div class="meaning">
            <h3 v-if="showMeaning">{{ card.kanji }} {{ card.englishName }} </h3>
            <span v-if="showMeaning">{{ card.meaning }}</span>
        </div>

        </div>
    </div>
    
  
</template>

<style scoped>

.container{
    display: flex;
    justify-content: center;
    gap: 3em;
    flex-wrap: wrap;
    padding: 5em;
    
}
.cards-container {
    display: flex;
    
    flex-direction: column;
    justify-content: center;
    row-gap: 5em;
}
.time{
  font-family: 'Sakura', sans-serif; 
    text-align: center;
    margin-right: 2em;
}

.cards{
    position: relative;
    width: 250px;
    height: 350px;
    margin-left: 3em;
    
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
    width: 180px;
    transition: transform 2s ease;
    backface-visibility:hidden;
    transform-style: preserve-3d;
}

.cards-back{
    position: absolute;
    transform: rotateY(180deg);
}

.cards-front{ 
    position: absolute;
}

.meaning {
    text-align: center;
    width: 250px;
    background: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 70%);
 
}

h3, span{
  font-family: 'Sakura', sans-serif;
  font-size: 18px;
  /* text-align: center; */
  color:#f56a6a;
}
  

.btn{
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  margin: 3em;
  justify-content: space-evenly;
}

.btn-card , .discover{
  text-decoration: none;
  border-radius: 8px;
  font-family: 'Sakura', sans-serif;
  color: #f56a6a;
  font-size: 20px;
}

.btn-card{
    padding-top:0.2em;
    background-color: aliceblue;
}

.discover{
    cursor: pointer;
}

.discover:hover{
    background-color:  #f56a6a;
    color: aliceblue;
}

.btn-card:hover{
    background-color:  #f56a6a;
    color: aliceblue;
}

</style>

