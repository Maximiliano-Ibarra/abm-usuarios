<template>
    <main>
        <AdminTab />
    </main>
</template>

<script setup>
    import AdminTab from '../components/AdminTab.vue'
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