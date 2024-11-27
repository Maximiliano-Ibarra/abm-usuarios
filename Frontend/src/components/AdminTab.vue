<template>

    <div>
        <h2>Admin Panel</h2>
        <p>Bienvenido, Admin!</p>
    </div>

</template>

<script>
import Login from './Login.vue';


export default { beforeCreate() {
    if (Login.user.role !== '2') {
        this.$router.push('/');}
    }
};

</script>
