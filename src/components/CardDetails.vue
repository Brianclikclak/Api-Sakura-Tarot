<script>
    export default{
        data() {
            return {
                selectedCards: [],
                discoverCards: false,
            };
        },
        methods:{
            toggleRotation (){
                this.discoverCards = !this.discoverCards;
            }
        },
        created() {
            this.selectedCards = JSON.parse(this.$route.query.selectedCards);

        },
    };
</script>

<template>
 

<div class="card-container">
    <div class="cards" v-for="card in selectedCards" :key="card.id">
        <div class="cards-back" >
            <img :src="card.cardsReverse.sakuraReverse" alt="">
        </div>
       <div class="cards-front" >
            <img :src="card.sakuraCard" alt="">
          <span>{{ card.kanji }} {{ card.englishName }}</span>
            <span>{{ card.meaning }}</span> 
        </div>
    </div>
</div>
<div class="btn">
    <button class="discover" @click="toggleRotation">Veamos que dicen tus cartas</button>
    <RouterLink to="/" class="btn-card">Reiniciar lectura </RouterLink>
</div>
</template>

<style scoped>
.card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center; 
}

.card{
    position: relative;
    margin: 10px;
    width: 250px;
    height: 350px;
}

.cards-front , .cards-back {
    display: flex;
    flex-direction: column;
    margin: 10px;
    width: 220px;
}

.cards-back{
    position: absolute;
    z-index:2;
}

.cards-front{ 
    position: relative;
    z-index: 1;
}

span{
  font-family: 'Sakura', sans-serif;
  text-align: center;
  font-size: 19px;
  color:#FDAA08;
  margin-top: 20px;
  border: 1px dashed white;
 
  
  
}
.btn{
  display: flex;
  justify-content: center;
  margin-top: 20px;
  
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
}

.btn-card{
    padding-top: 5px;
}



</style>

