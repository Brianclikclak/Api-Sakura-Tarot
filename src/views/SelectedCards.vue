<script setup>
  import CardDetails from '../components/CardDetails.vue';
  import { useRouter } from 'vue-router';


  const router = useRouter();
  const selectedCards = JSON.parse(router.currentRoute.value.query.selectedCards);
</script>

<template>
    <CardDetails :selectedCards="selectedCards"/>
  </template>
  
