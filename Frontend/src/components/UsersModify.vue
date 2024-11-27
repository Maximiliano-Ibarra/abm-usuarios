<template>
  <div class="edit-user">
    <h2>Modificar Usuario</h2>
    <h3>Ingrese los datos para actualizar el usuario</h3><br>
    <form @submit.prevent="updateUser">
      <div class="form-group">
        <label for="username">Usuario</label><br/>
        <input id="username" class="input-field" v-model="user.username" placeholder="Ingrese su nuevo nombre de usuario" required />
      </div>
      <div class="form-group">
        <label for="email">Correo Electrónico</label><br/>
        <input id="email" class="input-field" v-model="user.email" placeholder="Ingrese su nuevo correo electrónico" required />
      </div>
      <button @click="usersList()" style="margin-right: 200px;">Volver</button>
      <button type="submit" >Actualizar</button>
    </form>

    <div v-if="successMessage" class="success-message">
      {{ successMessage }}
    </div>
    <div v-if="errorMessage" class="error-message">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        email: "",
      },
      successMessage: "",
      errorMessage: "",
    };
  },
  methods: {
    usersList() {
      this.$router.push({ path: `/VerUsuarios` });
    },
    async updateUser() {
      const userId = this.$route.params.id;
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`http://localhost:3000/api/usuarios/${userId}`, {
          method: 'PUT',
            headers: {
              'authorization': `Bearer ${token}`,
              'Content-Type': 'application/json' },
            body: JSON.stringify(this.user)
        });

        if(!response.ok) {
          throw new Error(data.message || 'Error en el inicio de sesión');
        }
        const data = await response.json();
        console.log(data);

        alert("Usuario actualizado con éxito.");
        this.usersList();
        this.errorMessage = "";
      } catch (error) {
        this.errorMessage =
          error.response?.data?.error || "Error al actualizar el usuario.";
        this.successMessage = "";
      }
    },
  },
  async mounted() {
    const userId = this.$route.params.id; // Supone que el ID del usuario viene como parámetro en la ruta
    try {
      const response = await fetch(`http://localhost:3000/api/usuarios/${userId}`);
      if (!response.ok) throw new Error("Error al cargar datos del usuario");

      const data = await response.json();
      this.user = data;
    } catch (error) {
      this.errorMessage =
        error.response?.data?.error || "Error al cargar los datos del usuario.";
    }
  }
};
</script>

<style scoped>
.edit-user {
  max-width: 500px;
  margin: auto;
  border: 5px solid rgb(117, 92, 92); /* Cambia el color y el grosor del borde */
            padding: 20px; /* Espacio interno */
  background-color:#f8ffd7;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 25px;
  align-content: center;
}

.input-field {
  width: 100%; /* Ajusta el ancho según tus necesidades */
  padding: 5px; /* Ajusta el relleno según tus necesidades */
  font-size: 16px; /* Ajusta el tamaño de la fuente según tus necesidades */
}

.error-message {
  color: red;
  margin-top: 10px;
}

h2 {
  color: rgb(49, 187, 141);
}

label {
  color: rgb(49, 187, 141);
}
</style>