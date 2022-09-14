<template>
  <nav class="navbar navbar-expand-lg bg-light ">
    
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarNav">
        <ul class="navbar-nav ">
          <li class="nav-item ">
            <router-link class="nav-link active" aria-current="page" to="/dashoard">Home</router-link>
          </li>
          <li class="nav-item ">
            <router-link class="nav-link"  to="/vendedores">vendedores</router-link>
          </li>
          <li class="nav-item ">
            <a class="nav-link disabled" href="#">pedidos</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link disabled" href="#">company</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link disabled" href="#">Oficina Virtual</a>
          </li>

          <li>
            <button type="button"
             class="btn btn-outline-dark"
             @click="cerrarSection">
              cerrar sesion
            </button>
          </li>

        </ul>
      </div>
    
  </nav>
  
</template>

<script>
import {mapActions} from 'vuex';
export default {
  methods: {
   ...mapActions(['cerrarSection'])
  },
};
</script>

<style lang="scss" scoped>
</style>