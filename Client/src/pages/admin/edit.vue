<script setup lang="ts">
import { ref } from 'vue'
import { Product, getById } from '@/models/products'

const product = ref<Product>()
</script>

<template>
  <div>
    <h1>{{}} Product</h1>
  </div>
</template>

<style scoped></style>
