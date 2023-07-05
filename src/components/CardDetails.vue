<script>
    export default{
        data() {
            return {
                selectedCards: [],
            };
        },
        created() {
            this.selectedCards = JSON.parse(this.$route.query.selectedCards);

        },
    };
</script>

<template>
 

<div class="card-container">
<div class="cards" v-for="card in selectedCards" :key="card.id">
    <img :src="card.sakuraCard" alt="">
    <span>{{ card.kanji }} {{ card.englishName }}</span>
    <span>{{ card.meaning }}</span>
</div>
</div>
<div class="btn">
<RouterLink to="/" class="btn-card">Reiniciar lectura </RouterLink>
</div>
</template>

<style scoped>
.card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
}

.cards {
    display: flex;
    flex-direction: column;
    gap: 1em;
    margin: 10px;
    width: 250px;
}

span{
  font-family: 'Sakura', sans-serif;
  text-align: center;
  font-size: 15px;
  
}
.btn{
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
.btn-card{
  text-decoration: none;
  background-color: pink;
  border-radius: 5px;
  font-family: 'Sakura', sans-serif;
  color: darkmagenta;
  font-size: 30px;

}

</style>