<template>
  <div class="column is-8">
    <h2>Postulantes Registrados</h2>
    <lista-postulantes />
  </div>
</template>

<script>

  import ListaPostulantes from '@/components/ListaPostulantes.vue';

  export default {
    components: {
      ListaPostulantes,
    },
  }
</script>

<style lang="scss" scoped>

</style>