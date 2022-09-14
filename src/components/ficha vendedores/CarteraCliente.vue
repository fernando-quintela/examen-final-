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
        <router-link class="nav-link active" :to="{name: 'carta cliente'}">Carta Cliente</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{name: 'cumplimiento'}" >Cumplimiento</router-link>
      </li>
    </ul>
  </div>
  <div class="card-body">
  <table class="table">
  <thead>
    <tr>
      <th scope="col">ID cliente</th>
      <th scope="col">Nombre</th>
      <th scope="col">Segmento</th>
      <th scope="col"></th>
      <th scope="col">venta Periodo</th>
      <th scope="col">Meta Periodo</th>
      <th scope="col">Cumplimiento</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="cartera in carteras" :key="cartera.id_cliente">
      <td >{{cartera.id_cliente}}</td>
      <td>{{cartera.nombre}}</td>
      <td>{{cartera.Segmento}}</td>
      <td>
        <div class="status">
          <span :class="(cartera.venta * 100) / cartera.meta >= 100 ? 'verde' : 
          (cartera.venta * 100) / cartera.meta >= 80 ? 'amarillo'
           : 'rojo' ">

          </span>
        </div>
      </td>
      <td>{{Intl.NumberFormat().format(cartera.venta)}}</td>
      <td>{{Intl.NumberFormat().format(cartera.meta)}}</td>
      <td>
        <div class="progress">
        <div 
           class="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
           aria-valuemin="0"
            aria-valuemax= "{{cartera.meta}}"
            :style="'width:' + (cartera.venta * 100) / cartera.meta + '%'"
            >
             {{Math.trunc((cartera.venta * 100) / cartera.meta) + "%"}}
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
    ...mapState(['carteras'])
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