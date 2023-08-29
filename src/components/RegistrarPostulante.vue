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

    <button class="button is-primary">Registrar</button>
  </form>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>