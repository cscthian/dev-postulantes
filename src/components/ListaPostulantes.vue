<template>
  <div class="table-container">
    <table class="table">
      <thead>
        <th>Nombres</th>
        <th>Edad</th>
        <th>Acciones</th>
      </thead>
      <tbody>
        <tr v-for="n in 15" :key="n">
          <td>Juan Carlos Candillan Minares</td>
          <td>20 años</td>
          <td>
            <div class="buttons">
              <button class="button is-warning">Aprobar</button>
              <button class="button is-danger">Rechazar</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>