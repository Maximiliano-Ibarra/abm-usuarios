<template>
<div>
    <button @click="newUser()">Agregar Usuario</button>
</div>
<br>
<div class = "userlist-container">
    <table>
        <thead>
            <tr>
                <th>Usuario</th>
                <th>E-mail</th>
                <th>Rol</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in users" :key="user.id">
                <td>{{ user.username }}</td>
                <td>{{ user.email }}</td>
                <td style="text-align: center;">{{ user.role }}</td>
                <td>
                    <button @click="confirmEditUser(user.id)" style="margin-right: 10px;"><img src="@/assets/pencil.png" width="16" height="16" title="Modificar usuario"></img></button>
                    <button @click="confirmDeleteUser(user.id)"><img src="@/assets/delete.png" width="16" height="16" title="Eliminar usuario"></img></button>
                </td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<style>
    .user-list-container {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    }

    table {
    width: 100%;
    border-collapse: collapse;
    }

    th {
        border: 1px solid black;
        background-color: #f4f4f4;
        color: rgb(49, 187, 141);
        padding: 8px;
        text-align: center;
        font-weight: bold;
    }

    td {
        border: 1px solid black;
        background-color: #f8ffd7;
        color: rgb(49, 187, 141);;
        padding: 8px;
        text-align: left;
    }

    .no-users-message {
    margin-top: 20px;
    color: gray;
    }

    .selected-users {
    margin-top: 20px;
    font-weight: bold;
    }
</style>

<script>

import NewUser from '@/views/NewUser.vue';
import { getUsers, deleteUserById } from '../components/getUsers.js'

export default {
    
    async created() {
        try {
            const users = await getUsers();
            if (!users || users.length === 0) {
                console.warn('No hay usuarios disponibles.');
                this.users = [];
            } else {
                console.log('Usuarios cargados correctamente:', users);
                this.users = users;
            }
        } catch (error) {
            console.error('Error al cargar usuarios:', error.message);
            this.users = [];
        }
    },
    data() {
      return {
        users: []
      };
    },
    methods: {
    confirmDeleteUser(userId) {
        if (confirm("¿Estás seguro de que quieres eliminar este usuario?")) {
            this.deleteUser(userId);
        }
    },
    confirmEditUser(userId) {
        if (confirm("¿Estás seguro de que quieres modificar este usuario?")) {
            this.editUser(userId);
        }
    },
    async deleteUser(userId) {
        try {
            await deleteUserById(userId);
            this.users = this.users.filter(user => user.id !== userId);
        }
        catch (error) {
            console.error('Error al eliminar usuario:', error);
        }
    },
    editUser(userId) {
        this.$router.push({ path: `/ModificarUsuario/${userId}` });
    },
    newUser() {
        this.$router.push({ path: `/AltaUsuario` });
    }
  }
};
</script>