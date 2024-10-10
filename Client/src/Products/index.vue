<script setup lang="ts">
import { ref } from 'vue'
import { getAll, type Product } from '@/models/products'

const products = ref<Product[]>([])

products.value = getAll().data
</script>

<template>
  <div class="shelf">
    <h1>Products</h1>
  </div>
</template>

<style scoped>
.shelf {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}
</style>
