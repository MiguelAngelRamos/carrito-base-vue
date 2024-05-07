<template>

  <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- .d-none .d-md-none .d-lg-block -->
      <a class="navbar-brand d-none d-md-none d-lg-block" href="#">Navbar</a>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <!-- <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form> -->
          <!-- .d-md-block .d-lg-none -->
   
      </div>
    </div>

        <div class="icon-carrito d-none d-md-none d-lg-block mx-4">
          <i class="fa-solid fa-cart-shopping"></i>
        </div>

      <!-- .d-md-block .d-lg-none -->
      <div class="icon-carrito d-md-block d-lg-none mx-4">
        <i class="fa-solid fa-cart-shopping"></i>
      </div>

  </nav>


</template>


<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.icon-carrito {
  color: white;
}

.navbar {
  flex-wrap:nowrap;
  font-size: 1.3rem;
}
</style>