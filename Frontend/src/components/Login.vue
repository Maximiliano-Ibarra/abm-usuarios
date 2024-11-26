<template>
  <div class="login-container">
    <h1>Bienvenido</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">Usuario</label><br>
        <input
          type="text"
          id="username"
          v-model="user"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">Contraseña</label><br>
        <input
          type="password"
          id="password"
          v-model="pass"
          required
        />
      </div>
      <p class="register" @click="registerUser()">No tienes un usuario? Regístrate aquí</p><br>
      <button type="submit" style="font-size: 16px;">Iniciar Sesión</button>
    </form>
    <div v-if="error" class="error-message">{{ error }}</div>
  </div>
</template>

<script>
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
  data() {
    return {
      user: '',
      pass: '',
      error: ''
    };
  },
  setup() {
    const router = useRouter();
    return { router };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('/api/login', {
          user: this.user,
          pass: this.pass,
        });
        localStorage.setItem('authToken', response.data.token); // Guarda el token
        this.router.push('/VerUsuarios'); // Redirige a la página del dashboard
      } catch (error) {
        this.errorMessage = 'Usuario o contraseña incorrectos';
      }
    },
    registerUser() {
      this.$router.push({ path: `/AltaUsuario` });
    }
  }
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: auto;
  border: 5px solid rgb(117, 92, 92); /* Cambia el color y el grosor del borde */
            padding: 20px; /* Espacio interno */
      background-color:#f8ffd7;
  border-radius: 5px;
}

.register {
  color:rgb(14, 93, 240);
  cursor: pointer;
}

.form-group {
  margin-bottom: 15px;
}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>