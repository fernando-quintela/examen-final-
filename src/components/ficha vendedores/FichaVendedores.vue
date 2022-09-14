<template>
<Layout>
  <div class="container">
    <div class="row">
      <h2>ficha vendedores</h2>
      <div class="col">
       <div class="card text-center">
  <div class="card-header">
    <ul class="nav nav-pills card-header-pills">
      <li class="nav-item">
        <router-link class="nav-link active" to="/ficha-vendedores">General</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{name: 'carta cliente'}">Carta Cliente</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{name: 'cumplimiento'}" >Cumplimiento</router-link>
      </li>
    </ul>
  </div>
  <div class="card-body">
    <div class="col-12 col-md-6">
   <table class="table table-light table-sm ">
    <tbody>
      <tr>
      <th scope="row">ID Vendedor</th>
      <td>{{fichageneral.id}}</td> 
      <!-- <td>patar</td>     -->
    </tr>
    <tr>
      <th scope="row">Nombre</th>
      <td>{{fichageneral.nombre}}</td>
    </tr>
        <tr>
      <th scope="row">Email</th>
      <td>{{fichageneral.email}}</td>
    </tr>
        <tr>
      <th scope="row">Telefono</th>
      <td>{{fichageneral.fono}}</td>
    </tr>
        <tr>
      <th scope="row">Oficina</th>
      <td>{{fichageneral.oficina}}</td>
    </tr>
        <tr>
      <th scope="row">Manager</th>
      <td>{{fichageneral.Manager}}</td>
    </tr>
 
    </tbody>
  
   </table>
   </div>
  </div>
</div>
      </div>
    </div>
  </div>

</Layout>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import Layout from "../../layout/Layout.vue";
export default {
    components: {
    Layout
    },

     methods: {
    ...mapActions({
      ficha: "getFichaVendedor",
    })
  },

  computed: {

   ...mapState(['fichageneral'])

   
  },

  created() {
    this.ficha();
  }

}
</script>

<style lang="scss" scoped>

</style>