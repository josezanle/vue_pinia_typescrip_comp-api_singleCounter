<template>
    <div>
        <h1>Home View</h1>

        <p>Valor del Counter: {{ counter}}</p>
        <hr>
        <p>Cantidad de Cambios de State: {{ numberOfChanges}}</p>
    </div>
</template>

<script setup lang="ts">
import {useCounterStore} from '../stores/counter'

const {counter, numberOfChanges} = useCounterStore();
</script>

<style scoped>
</style>