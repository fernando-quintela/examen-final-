<template>
<div class="layout">

    <Natvar />
    
  <div class="renderisar ">
    <slot/>

  </div>

</div>
  
</template>

<script>
import Natvar from '../components/Natbar.vue';

export default {
  components: {
   Natvar
  }
}
</script>

<style lang="scss" scoped>

</style>