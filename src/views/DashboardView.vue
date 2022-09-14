<template>
 <Layout>
  <div class="container">
   
    <div class="row mt-4">

     <!-- card -->
      <div class="col ">
        <h5 class="text-center">Venta Mensual</h5>
        <div class="d-flex mensual justify-content-center align-items-center">
        <div class="porsentaje">
       
          <span>{{Math.trunc(porsentajeMensual)}}%</span>
        </div>

        <div class="mes d-block">
          
          
         
          <span>{{vmensual.valor}}</span>
       
          
          <p >venta del mes</p>
        </div>

        <div class="meta d-block">
         
         
         <span>{{vmensual.meta}}</span>
         <p>meta de venta del mes</p>
        </div>

        </div>

      </div>


      <div class="col ">
         <h5 class="text-center">Venta anual</h5>

        <div class="d-flex mensual justify-content-center align-items-center">
        <div class="porsentaje">
        
         <span>{{Math.trunc(porsentajeAnual)}}%</span>

        </div>

        <div class="año">
         
          <span>{{ vanual.valor}}</span>
          <p>venta del mes</p>
        </div>

        <div class="meta">
         
         <span>{{Intl.NumberFormat().format(vanual.meta)}}</span>
         <p>meta de venta del mes</p>
        </div>
        </div>         
      </div>
    </div>
<!-- card -->
      <div class="row p-3 mt-4">
        <div class="col-12 col-lg-6">
          <h4>Rankin de vendedores</h4>
          <table class="table">
  <thead>
    <tr>
      <th scope="col">ID Vendedor</th>
      <th scope="col">vendedor</th>
      <th scope="col">Monto</th>
      <th scope="col">Unidades</th>
      <th scope="col"></th>

    </tr>
  </thead>
  <tbody>
    <tr v-for="rankingV of rankingVendedores" :key="rankingV.id_vendedor">
      <th scope="row">{{rankingV.id_vendedor}}</th>
      <td>{{rankingV.nombre}}</td>
      <td>{{Intl.NumberFormat().format(rankingV.monto)}}</td>
      <td>{{rankingV.unidades}}</td>
      <td><button type="button" class="btn btn-link">ver detalle</button></td>
    </tr>
    
  </tbody>
</table>

        </div>

        <div class="col-12 col-lg-6">
          <h4>Rankin de productos</h4>
          <table class="table">
  <thead>
    <tr>
      <th scope="col">Cod productos</th>
      <th scope="col">Uroducto</th>
      <th scope="col">Unidades</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="rankingP of rankingProducto" :key="rankingP.id">
      <th scope="row">{{rankingP.cod_producto}}</th>
      <td>{{rankingP.poducto}}</td>
      <td>{{rankingP.unidades}}</td>
      <td><button type="button" class="btn btn-link">ver detalle</button></td>
      
    </tr>
    
  
  </tbody>
</table>
        </div>
      </div>


  </div>

</Layout>
</template>

<script>

import { mapActions, mapState, mapGetters } from "vuex";
import Layout from "../layout/Layout.vue";

export default {

  components: {
    Layout
  },
 
    methods: {
    ...mapActions({
      listado: "getListadoOrdenesApi",
     
    })
  },

    computed: {
    // ...mapState(["rankingVendedores"]),
    // ...mapState(["rankingProducto"]),
    // ...mapState(["porsentajes"])
   ...mapState({
    rankingVendedores: 'rankingVendedores',
    rankingProducto: 'rankingProducto',
    vmensual: 'vmensual',
    vanual: 'vanual'
   }),

  ...mapGetters(['porsentajeMensual', 'porsentajeAnual'])
   
  },
  created() {
    this.listado();
  }



}
</script>

<style lang="scss" scoped>

.porsentaje {
  width: 10rem;
}

.mes {
  width: 10rem;
}

.meta {
  width: 10rem;
}

.año {
  width: 10rem;
}

.mensual {
  border: 1px solid black;
  padding: 12px;
  
}


span {
  font-size: 25px;
  font-weight: bold;
}
</style>