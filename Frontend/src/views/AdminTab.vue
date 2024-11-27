<template>
    <main>
        <AdminTab />
        <UsersList />
        <UsersModify />
    </main>
</template>

<script setup>
    import AdminTab from '../components/AdminTab.vue'
    import UsersList from './UsersList.vue';
    import UsersModify from './UsersModify.vue';
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