<template>
  <div class="container">

    <input v-model="searchQuery" class="mt-5 form-control" placeholder="Buscar Productos" />

    <p>Lo existe dentro de la Instancia Vue: {{ searchQuery }}</p>
    <p>Lo existe dentro de la Instancia Vue: {{ searchQuery.length }}</p>

    <ul>
      <template v-for="product in filterProduct" :key="product.id">
        <li v-if="product && product.stock > 0" :key="product.id">
          Nombre: {{ product.nombre }} - Precio: ${{ product.precio }} - Stock: {{ product.stock }}

          <button
            @click="addCart(product)" 
            type="button" 
            class="btn btn-outline-dark"
            style="--bs-btn-padding-y: .15rem; --bs-btn-padding-x: .3rem; --bs-btn-font-size: .45rem;"> 
          Agregar carrito
          </button>
        </li>
      </template>

    </ul>
  </div>
</template>

<script>
import productService from '@/services/api';

export default {
  name: 'Products',
  data() {
    return {
      products: [],
      searchQuery: ''
    };
  },
  computed: {
    filterProduct() {
      const result = this.products.filter(product => product.nombre && product.nombre.toLowerCase().includes(this.searchQuery.toLowerCase()));
      console.log(result);
      return result;
    }
  },
  methods: {
    loadProducts() {
      productService.all()
        .then(data => {
          this.products = data;
        }).catch(error => console.log(error))
    },
    addCart(product) {
      let carrito = JSON.parse(localStorage.getItem('carrito')) || {};
      let productId = product.id.toString();

      if(carrito[productId]) {
        //* +=1
        // carrito[productId].cantidad = carrito[productId].cantidad + 1;
        carrito[productId].cantidad += 1;
      } else {
        carrito[productId] = {
          ...product,
          cantidad: 1
        }
      }
      localStorage.setItem('carrito', JSON.stringify(carrito)); 
    }
  },
  created() {
    this.loadProducts();
  }
}
</script>

<!-- 
   V && V  = V
   V && F = F
   F && V = F
   F && F = F
 
 -->
<style></style>