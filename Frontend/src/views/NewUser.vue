<template>
  <div class="register-container">
    <h2>Ingrese los datos para registrar un usuario</h2>
    <form @submit.prevent="registerUser">
      <div class="form-group">
        <label for="username">Usuario</label><br>
        <input v-model="username" label="Nombre" required></input>
      </div>
      <div class="form-group">
        <label for="email">Correo electrónico</label><br>
        <input v-model="email" label="E-mail" required></input>
      </div>
      <div class="form-group">
        <label for="password">Contraseña</label><br>
        <input v-model="password" label="Contraseña" type="password" required></input>
      </div>
      <button type="submit" color="primary">Registrar</button>
    </form>
  </div>
</template>

<script>
  export const object = {
    data() {
      return {
        user: { username: '', email: '', password: '' }
      };
    },
    methods: {
      async registerUser() {
        try {
          const response = await fetch('http://localhost:3000/usuarios', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.user)
            }
          );
          const data = await response.json();
          console.log(data);
        }
        catch (error) {
          console.error('Error:', error);
        }
      }
    }
  };
</script>

<style scoped>
.register-container {
  max-width: 500px;
  margin: auto;
  border: 5px solid rgb(117, 92, 92); /* Cambia el color y el grosor del borde */
            padding: 20px; /* Espacio interno */
      background-color:rgb(176, 196, 186);
  border-radius: 5px;
}

.form-group {
  margin-bottom: 15px;
  align-content: center;
}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>