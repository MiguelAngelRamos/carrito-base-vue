<template>
  <Layout>
    <h1 v-if="carrito.length > 0">Detalle del carrito de compras</h1>
    <div v-if="carrito.length === 0" class="alert alert-danger">No existen productos en carrito de compras</div>
    <div v-if="carrito.length > 0" class="table-responsive">
      <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Image</th>
          <th scope="col">Producto</th>
          <th scope="col">Precio</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Acciones</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for = "(item, index) in carrito" :key="item.id">
          <th scope="row">{{ index }}</th>
          <td><img v-bind:src="item.image" class="img-fluid" style="max-width: 100px;"></td>
          <td>{{item.nombre}}</td>
          <td>{{ item.precio.toLocaleString('es-CL', {
                style: 'currency',
                currency: 'CLP'
              }) }} 
          </td>
          <td>{{ item.cantidad }}</td>
          <td>
            <button class="btn btn-outline-danger btn-sm" @click="removeItem(item)">
            <i class="fa-solid fa-trash"></i>
            </button>
          </td>
          <td>
            {{ (item.precio * item.cantidad).toLocaleString('es-CL',{
                style: 'currency',
                currency: 'CLP'
              }) }}
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="6" class="fw-bold">Total de la compra</td>
          <td class="fw-bold" >{{ totalCompra.toLocaleString('es-CL',{
                style: 'currency',
                currency: 'CLP'
              }) }}</td>
        </tr>
      </tfoot>
     </table>
    </div>
    <button class="mt-3 btn btn-success"  @click="continuarCompra" v-if="carrito.length > 0">Continuar con la Compra</button>
  </Layout>

</template>


<script>
import Navbar from '@/components/Navbar.vue'
import Layout from '@/layout/Layout.vue'

export default {
  name: 'CarritoView',
  components: {
    Navbar,
    Layout
  },
  data() {
    return {
      carrito: []
    }
  },
  methods: {
    loadCarrito() {
      const carritoStorage = localStorage.getItem('carrito');
      this.carrito = carritoStorage ? Object.values(JSON.parse(carritoStorage)):[];
      console.log(this.carrito);
    },
    removeItem(product) {
      let carrito = JSON.parse(localStorage.getItem('carrito'));
      if(carrito[product.id]) {
        delete carrito[product.id];
        localStorage.setItem('carrito', JSON.stringify(carrito));
        this.loadCarrito();
      }
    },
    continuarCompra() {
      alert('Proceso de compra en desarrollo.')
    }
  },
  computed: {
    totalCompra() {
      return this.carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);
    }
  },
  created() {
    this.loadCarrito();
  }
}
</script>

<style></style>