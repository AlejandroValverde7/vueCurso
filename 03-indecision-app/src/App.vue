<template>
    <h1>Mi primera app</h1>
    <hr>
    <!-- Enviamos un valor desde la clase padre con v-bind -->
    <MyCounter :value="5"></MyCounter> 
    <MyCounterScript :value="2"></MyCounterScript>
    <MyCounterScript2 :value="10"></MyCounterScript2>
</template>

<script lang="ts" setup>
    import MyCounter from './components/MyCounter.vue';
    import MyCounterScript from './components/MyCounterScript.vue';
    import MyCounterScript2 from './components/MyCounterScript2/MyCounterScript2.vue';
</script>