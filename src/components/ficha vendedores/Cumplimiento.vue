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
        <router-link class="nav-link " to="/ficha-vendedores">General</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{name: 'carta cliente'}">Carta Cliente</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link active" :to="{name: 'cumplimiento'}" >Cumplimiento</router-link>
      </li>
    </ul>
  </div>
  <div class="card-body">
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Periodo</th>
      <th scope="col">Venta Unidad</th>
      <th scope="col">color</th>
      <th scope="col">Venta Pesos</th>
      <th scope="col">meta Periodo</th>
      <th scope="col">Cumplimiento</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="cumplimiento in cumplimientos" :key="cumplimiento.id">
      <td>{{cumplimiento.periodo}}</td>
      <td>{{cumplimiento.venta_unidades}}</td>
      <td>
        <div class="status">
          <span :class="(cumplimiento.venta_pesos * 100) / cumplimiento.meta >= 100 ? 'verde' : 
          (cumplimiento.venta_pesos * 100) / cumplimiento.meta >= 80 ? 'amarillo'
           : 'rojo' ">

          </span>
        </div>
      </td>
      <td>{{Intl.NumberFormat().format(cumplimiento.venta_pesos)}}</td>
      <td>{{Intl.NumberFormat().format(cumplimiento.meta)}}</td>
      <td>
        <div class="progress">
        <div 
           class="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
           aria-valuemin="0"
            aria-valuemax= "{{cumplimiento.meta}}"
            :style="'width:' + (cumplimiento.venta_pesos * 100) / cumplimiento.meta + '%'"
            >
             {{Math.trunc((cumplimiento.venta_pesos * 100) / cumplimiento.meta) + "%"}}
          </div>
          </div>
      </td>
    </tr>
    
  </tbody>
</table>
  </div>
</div>
      </div>
    </div>
  </div>

</Layout>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Layout from "../../layout/Layout.vue";
export default {
    components: {
    Layout
    },

     computed: {
    ...mapState(['cumplimientos'])
   }

}
</script>

<style lang="scss" scoped>

 .status{
      display: flex;
      align-items: center;
      margin-top: 0.4rem;
      span {
        
        &:first-child {
          width: 15px;
          height: 15px;
          border-radius: 50%;
          
          
        }
      }
      .verde {
        background-color: green;
      }
      .rojo {
        background-color: red;
      }
      .amarillo {
        background-color: yellow;
      }
    }

</style>