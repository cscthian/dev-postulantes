<template>
  <form class="content">
    <div class="field">
      <label class="label">DNI</label>
      <div class="control">
        <input class="input" type="number" placeholder="DNI">
      </div>
    </div>

    <div class="field">
      <label class="label">Nombres</label>
      <div class="control">
        <input class="input" type="text" placeholder="Nombres">
      </div>
    </div>

    <div class="field">
      <label class="label">Apellidos</label>
      <div class="control">
        <input class="input" type="text" placeholder="Apellidos">
      </div>
    </div>
    <div class="field">
      <label class="label">F. Nacimiento</label>
      <div class="control">
        <input class="input" type="date" placeholder="Nacimiento">
      </div>
    </div>

    <div class="field">
      <label class="label">Area:</label>
      <div class="select">
        <select>
          <option>Informática</option>
          <option>Contabilidad</option>
          <option>Administracion</option>
          <option>Caja</option>
        </select>
      </div>
    </div>

    <div class="field">
      <label class="label">Codigo Empleado</label>
      <div class="control">
        <input class="input" type="text" placeholder="Codigo">
      </div>
    </div>
    <button class="button is-primary">Actualizar Datos</button>
  </form>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>