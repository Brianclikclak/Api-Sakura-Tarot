<script setup>
import CardsComponent from '../components/CardsComponent.vue'
import { ref, onMounted, computed } from 'vue';
import { getCardSakuraList } from '../service/apiService';

  let sakuraCards = ref([])
  const cardStatus = ref("Seleccione una carta para ver su pasado tio");
  const selectedCards = ref([]);
  const showLink = ref(false)

  onMounted(async()=>{
  sakuraCards.value = await getCardSakuraList()
  })

  function addCard(card){
    selectedCards.value.push(card)
    // border(card)
    card.style.border="red"
  }

  function border(card){
    // card.style.border="10px"
    // card.style.borderStyle="10px"
    card.style.border="red"
  }
  console.log(selectedCards.value)

  const estoEsLaComputed = computed(() => {      
    if(selectedCards.value.length === 0) return cardStatus.value = "Seleccione una carta para ver su pasado";
    if(selectedCards.value.length === 1) return cardStatus.value = "Ahora seleccione una carta para ver su presente";
    if(selectedCards.value.length === 2) return cardStatus.value = "Por ultimo seleccione una carta para ver su futuro";
    if(selectedCards.value.length === 3){
      showLink.value = true;
      return  cardStatus.value = "";
    }
  })  
</script>


<template>
    <header>
      <span> {{ estoEsLaComputed }}</span>
    </header>
    <main>
      
        <CardsComponent v-for="card in sakuraCards" :card="card" @click="addCard(card)"/>  
        <a v-if="showLink">Pollas</a>
    </main>
</template>

<style>
@import url('https://fonts.cdnfonts.com/css/sakura');

span{
  display: flex;
  justify-content: center;
  padding: 20px;
  color: aqua;
  font-size: 30px;
  font-family: 'Sakura', sans-serif;
  
}
main{
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    width: 80%;
    gap: 1em;
    margin: 0 auto;
}
</style>



 