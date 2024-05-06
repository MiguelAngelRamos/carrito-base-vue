<template>
  <div class="container">

    <input v-model="searchQuery" class="mt-5 form-control" placeholder="Buscar Productos" />
    <div v-if="products.length === 0">Cargando productos...</div>
    <div class="row mt-3">
      <template v-for="product in filterProduct" :key="product.id">
        <!-- los productos con stock superior a cero, son los productos que necesitamos renderizar  -->
        <div v-if="product && product.stock > 0" :key="product.id" class="col-sm-6 col-md-4 col-lg-3 mb-4">
          <div class="card h-100">
            <img v-bind:src="product.image" class="card-img-top" alt="producto">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">{{ product.nombre }}</h5>
              <p class="card-text">{{ product.precio }}</p>
              <div class="mt-auto">
                <div class="input-group mb-3">
                  <!-- Estos botones son para aumentar la cantidad o disminuir la cantidad -->
                  <button class="btn btn-outline-danger">-</button>
                  <input class="form-control text-center" type="text">
                  <button class="btn btn-outline-success">+</button>
                </div>

                <button class="btn btn-success w-100 mb-2">Añadir al carrito</button>
                <button class="btn btn-dark w-100">Ver el detalle</button>


              </div>
            </div>
          </div>
        </div>
      </template>
    </div>


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
<style scoped>
img {
  width: 250px;
  height: 350px;
  object-fit: contain;
  margin: 0 auto;
}
</style>