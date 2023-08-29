<template>
  <div class="column is-8">
    <h2>Empleados Registrados</h2>
    <lista-empleados/>
  </div>
</template>

<script>
  import ListaEmpleados from '@/components/ListaEmpleados.vue';

  export default {
    components: {
      ListaEmpleados,
    },
  }
</script>

<style lang="scss" scoped>

</style>