<script setup>
import CardsComponent from '../components/CardsComponent.vue'
import { ref, onMounted } from 'vue';
import { getCardSakuraList } from '../service/apiService';

  let sakuraCards = ref([])

  onMounted(async()=>{
  sakuraCards.value = await getCardSakuraList()
  console.log(sakuraCards);
  }) 
    
/* const selectedCards = ref([]) */
  /* function borderMark(event, card) {
  const index = selectedCards.value.indexOf(card);

    const sakuraCards = ref([]);
    const selectedCards = ref([]);
    const cardStatus = ref("Seleccione una carta para ver su pasado");
    const showLink = ref (false);
    onMounted(() => {
        
    }),(async () => {
      sakuraCards.value = await getCardSakuraList();
    });
  
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
    
    <main>
        <CardsComponent v-for="card in sakuraCards" :card="card"/>  
    </main>
</template>

<style>

/* body{
    background-image: url(../images/tarotImage.jpg);
    background-size:contain;
    
} */

main{
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    width: 80%;
    gap: 1em;
    margin: 0 auto;
}
</style>



 