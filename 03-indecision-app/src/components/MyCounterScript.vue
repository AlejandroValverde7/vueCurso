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

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';

export default defineComponent({
    props: {
        value: {
            type: Number,
            required: true
        }
    },
    setup(props) {
        const counter = ref(props.value);
        const squareCounter = computed(() => counter.value * counter.value);

        return {
            counter,
            squareCounter
        };
    },
});

</script>

<!-- Con scoped solo aplica a este componente -->
<style scoped>
h1{
    color: red;
}
</style>