<template>
  <div class="login-container">
    <h1>Iniciar Sesión</h1>
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
      <button type="submit">Iniciar Sesión</button>
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
      background-color:rgb(176, 196, 186);
  border-radius: 5px;
}

.form-group {
  margin-bottom: 15px;
}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>