<template>
    <section>
        <h3>Counter: {{ counter }}</h3>
        <h3>Square: {{ squareCounter }}</h3>
    </section>

    <div>
        <button @click="counter++">+1</button>
        <button @click="counter--">-1</button>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

// Declaramos las props que recibimos desde el componente padre
const props = defineProps({
    value: {type: Number, required: true}
})

const counter = ref(props.value);
const squareCounter = computed(() => counter.value * counter.value);

</script>

<!-- Con scoped solo aplica a este componente -->
<style scoped>
h1{
    color: red;
}
</style>