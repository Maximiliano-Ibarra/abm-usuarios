<template>
    <main>
        <UsersList />
    </main>
</template>

<script setup>
    import UsersList from '../components/UsersList.vue'
</script>

<style scoped>
@media (min-width: 1024px) {
  .prueba {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
  h1 {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>