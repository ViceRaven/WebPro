<script setup lang="ts">
import { ref } from 'vue'
import { getAll, type Product } from '@/models/products'

const products = ref([] as Product[])

getAll().then((data) => {
  products.value = data.data
})
</script>

<template>
  <div>
    <table class="table is-stripled is-narrow is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Price</th>
          <th>Thumbnail</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.title }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.category }}</td>

          <td><img :src="product.thumbnail" :alt="product.title" /></td>
          <td>
            <router-link :to="{ name: 'EditProduct', params: { id: product.id } }">
              <button class="button is-primary">Edit</button>
            </router-link>
            <button class="button is-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
