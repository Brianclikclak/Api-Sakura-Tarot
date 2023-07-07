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
 

<div class="container">
    <div class="cards-container" v-for="card in selectedCards" :key="card.id">
        <div class="cards" :class="{flipped: discoverCards}" >
            <img  class="cards-front" :src="card.cardsReverse.sakuraReverse" alt="">
            <img class="cards-back" :src="card.sakuraCard" alt="">
        </div>

       <div class="meaning" > 
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

.container{
    display: flex;
}
.cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10em;
    width: 100%;

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
span{
  font-family: 'Sakura', sans-serif;
  text-align: center;
  font-size: 15px;
  
}
.btn{
  display: flex;
  justify-content: center;
  margin-top: 20px;
  
}
.btn-card , .discover{
  text-decoration: none;
  background-color: pink;
  border-radius: 5px;
  font-family: 'Sakura', sans-serif;
  color: darkmagenta;
  font-size: 20px;
  
}

.discover{
    margin-right: 50px;
    cursor: pointer;
}
.discover:hover{
    background-color: darkmagenta;
    color: pink;
}

.btn-card{
    padding-top: 5px;
    
}

.btn-card:hover{
    background-color: darkmagenta;
    color: pink;
}



</style>