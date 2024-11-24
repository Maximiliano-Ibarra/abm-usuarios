<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="/AltaUsuario">Nuevo Usuario</RouterLink>
        <RouterLink to="/VerUsuarios">Lista de Usuarios</RouterLink>
      </nav>
    </div>

    <img alt="Vue logo" class="logo" src="@/assets/logo.png" width="300" height="125" />
  </header>

  <RouterView />
</template>

<style scoped>
header {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  line-height: 1.5;
  max-height: 100vh;
  display: grid;
  grid-template-columns: 80% 20%;
}

.logo {
  grid-column: 2;
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 30px;
  position: 0;
  grid-column: 1;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  margin-top: 5rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (max-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    display: grid;
    grid-template-columns: 80% 20%;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>