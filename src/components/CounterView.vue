<template>
    <div>
        <h1>Counter View: {{ counterStore.counter }} </h1>
        <button @click="counterStore.incrementBy(1)">+1</button>
        <button @click="counterStore.incrementBy(2)">+2</button>
        <button @click="counterStore.incrementBy(5)">+5</button>
    </div>
</template>

<script setup lang="ts">
import {useCounterStore} from '../stores/counter'

const counterStore = useCounterStore()

</script>

<style scoped>

</style>