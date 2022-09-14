<template>
<Layout>
  <div class="container">
    <div class="row">
      <div class="col">
       <h1>Monitor de Vendedores</h1>
       
      </div>
    </div>

    <div class="row">
      <div class="col">

        <table class="table">

          <thead>
            <tr>
              <th scope="col">ID Vendedor</th>
              <th scope="col">Vendedor</th>
              <th scope="col">Venta Unidades</th>
              <th scope="col"> Venta Pesos</th>
              <th scope="col">Menta Venta</th>
              <th scope="col">Cumplimiento Meta</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="vendedore of vendedores" :key="vendedore.id_vendedor">
              <td>{{vendedore.id_vendedor}}</td>
              <td>{{vendedore.nombre}}</td>
              <td>{{vendedore.venta_unid}}</td>
              <td>{{Intl.NumberFormat().format(vendedore.venta_pesos)}}</td>
              <td>{{Intl.NumberFormat().format(vendedore.meta_venta)}}</td>
              <td>
                <div class="progress">
                  <div 
                    class="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax= "{{vendedore.meta_venta}}"
                    :style="'width:' + (vendedore.venta_pesos * 100) / vendedore.meta_venta + '%'"
                  >
                     {{Math.trunc((vendedore.venta_pesos * 100) / vendedore.meta_venta) + "%"}}
                  </div>
                </div>
              </td>
              <td>

                <router-link to="/ficha-vendedores" role="button" class="btn btn-primary " :class="vendedore.id_vendedor !== 2334 ? 'disabled' : '' " 
                aria-disabled="true"    
                  >ver detalle</router-link>

              </td>

            </tr>
          </tbody>

        </table>

      </div>
    </div>
  </div>
  



</Layout>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import Layout from "../layout/Layout.vue";
export default {

    components: {
    Layout
  },
  setup(){
    const store = useStore()

    onMounted(() => {
      store.dispatch('getListaVendedores')
    })

      const vendedores = computed(() => {
      return store.state.vendedores
    })



    return {
      vendedores,
 
    }
  }

}
</script>

<style>

</style>