<template>
  <Layout>
    <h1>Detalle del carrito de compras</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Image</th>
          <th scope="col">Producto</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Acciones</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>

      </tbody>
    </table>
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
    }
  },
  created() {
    this.loadCarrito();
  }
}
</script>

<style></style>