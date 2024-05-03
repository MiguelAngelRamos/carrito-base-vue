<template>
  <div class="container">

   <input v-model="searchQuery" class="mt-5 form-control" placeholder="Buscar Productos"/>

   <p>Lo existe dentro de la Instancia Vue: {{ searchQuery }}</p>
 
   <ul>
     <li v-for="product in filterProduct" :key="product.id">
       {{ product.nombre }} - ${{ product.precio }}
     </li>
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