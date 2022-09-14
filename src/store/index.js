import { createStore } from 'vuex';
import router from '@/router';

export default createStore({
  state: {
    usuarioLogeado: null,
    rankingVendedores: [],
    rankingProducto: [],
    vmensual: {},
    vanual: {},
    vendedores: [],
    fichageneral: {},
    carteras: [],
    cumplimientos: []

  },
  getters: {
    porsentajeMensual(state) {
      return (state.vmensual.valor * 100) / state.vmensual.meta
    },

    porsentajeAnual(state) {
      return (state.vanual.valor * 100) / state.vanual.meta
    },



  },
  mutations: {
    setUsuario(state, payload) {
      state.usuarioLogeado = payload;
    },

    rankingV(state, payload) {
      state.rankingVendedores = payload;
      // console.log(state.rankingVendedores)
      
    },
    rankingP(state, payload) {
      state.rankingProducto = payload;
    },

    mensual(state, payload) {
      state.vmensual = payload;
      console.log(state.vmensual)
    },
    anual(state, payload) {
      state.vanual = payload;
    },

    getVendedores(state, payload) {
      state.vendedores = payload;
      console.log(state.vendedores)
    },

    listaFicha(state, payload) {
      state.fichageneral = payload;
      console.log(state.fichageneral)
    },

    getCartera(state, payload) {
      state.carteras = payload;
    },

    getCumplimiento(state, payload) {
      state.cumplimientos = payload;
    },

    cerrar(state) {
     state.usuarioLogeado = null
    }


  },
  actions: {
    async onLoagin({commit}, usuario) {
      const usuarioLogeado = {
        email: usuario.email,
        password: usuario.password
      };

      commit('setUsuario', usuarioLogeado)
      router.push('/dashoard')
    },

    async getListadoOrdenesApi({commit}) {
      try {
        const response = await fetch('dashboard.json');
        const data = await response.json();
        
        commit('rankingV', data.ranking_vendedores);
        commit('rankingP', data.ranking_productos);
        
        commit('mensual', data.kpis[0].venta_mensual);
        commit('anual', data.kpis[1].venta_anual);
      } catch (error) {
        throw error;
      }
    },

    async getListaVendedores({commit}) {
      try {
        const response = await fetch('vendedores.json');
        const data = await response.json();

        commit('getVendedores', data.vendedores)
        
      } catch (error) {
        throw error;
      }
    },

    async getFichaVendedor ({commit}) {
      try {
        const response = await fetch('ficha_vendedor.json');
        const data = await response.json();

        commit('listaFicha', data.vendedor);
        commit('getCartera', data.cartera);
        commit('getCumplimiento', data.cumplimiento);
        
      } catch (error) {
        throw error;
      }
    },

    cerrarSection({commit}) {
      commit('cerrar');
       router.push('/');
    }

  },
  modules: {
  }
})
