<template>
<div class = "userlist-container">
    <table>
        <thead>
            <tr>
                <th>-</th>
                <th>Usuario</th>
                <th>E-mail</th>
                <th>Rol</th>
                <th>-</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in users" :key="user.id">
                <td><router-link :to="{ path: '/ModificarUsuarios', query: { id: user.id } }"><img src="@/assets/pencil.png" width="16" height="16" title="Modificar usuario"></router-link></td>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.role }}</td>
                <td><router-link :to="{ path: '/BorrarUsuarios', query: { id: user.id } }"><img src="@/assets/delete.png" width="16" height="16" title="Borrar usuario"></router-link></td>
            </tr>
        </tbody>
    </table>
    <div v-if="!users.length" class="no-users-message">
      No hay usuarios registrados.
    </div>
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

    th, td {
        border: 1px solid black;
        padding: 8px;
        text-align: left;
    }

    th {
        background-color: #f4f4f4;
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

export default {
  data() {
    return {
      users: [{id: 1, name: 'Juan Pérez', email: 'juan@example.com', role: 'usuario-comun'}]
    };
  }
};
</script>