<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link :to="{name: 'home'}" class="navbar-item">
          Inicio
        </router-link>
        <router-link :to="{name: 'empleados'}" class="navbar-item">
          Empleados
        </router-link>
      </div>
    </div>
  </nav>
  <div class="columns is-centered">
    <router-view/>
  </div>
</template>

<style lang="scss">
.app {
  
}
</style>
