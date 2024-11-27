<template>
  <div class="register-container">
    <h2>Ingrese los datos para dar de alta un usuario</h2>
    <form @submit.prevent="registerUser">
      <div class="form-group">
        <label for="username">Usuario</label><br>
        <input class="input-field"v-model="user.username" id="username" required />
      </div>
      <div class="form-group">
        <label for="email">Correo electrónico</label><br>
        <input class="input-field" v-model="user.email"id="email" required />
      </div>
      <div class="form-group">
        <label for="password">Contraseña</label><br>
        <input class="input-field" v-model="user.password" type="password" id="password" required />
      </div>
      <button @click="usersList()" style="margin-right: 320px;">Volver</button>
      <button type="submit">Registrar</button>
      <br/>
    </form>
    <p class="error-message" v-if="statusMessage">{{ statusMessage }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          username: '',
          email: '',
          password: ''
        },
          statusMessage: ''
      };
    },
    methods: {
      usersList() {
        this.$router.push({ path: `/VerUsuarios` });
      },
      async registerUser() {
        try {
          const response = await fetch('http://localhost:3000/api/usuarios', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              username: this.user.username,
              email: this.user.email,
              password: this.user.password
            })
            }
          );
          const data = await response.json();
          this.statusMessage = 'Usuario registrado correctamente'
          console.log(data);

          this.cleanFields();
        }
        catch (error) {
          this.statusMessage = 'Ocurrió un problema al registrar el usuario'
          console.error('Error:', error);
        }
      },
      cleanFields() {
        this.user.username = '',
        this.user.email = '',
        this.user.password = ''
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