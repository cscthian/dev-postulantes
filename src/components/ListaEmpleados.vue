<template>
  <div class="table-container">
    <table class="table">
      <thead>
        <th>Codigo</th>
        <th>Nombres</th>
        <th>AREA</th>
        <th>Edad</th>
        <th>Acciones</th>
      </thead>
      <tbody>
        <tr v-for="n in 15" :key="n">
          <td>CFGT0021</td>
          <td>Juan Carlos Candillan Minares</td>
          <td>Informática</td>
          <td>20 años</td>
          <td>
            <div class="buttons">
              <button class="button is-warning">Editar</button>
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