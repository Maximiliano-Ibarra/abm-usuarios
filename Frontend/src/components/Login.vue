<template>
  <div class="login-container">
    <h1 style="color: hsla(160, 100%, 37%, 1);">Bienvenido</h1>
    <div v-if="isLoggedIn">
      <br><p class="login-message">Hola, ya has iniciado sesión.</p><br>
      <button @click="logout">Cerrar Sesión</button>
    </div>
    <form v-else @submit.prevent="login">
      <div class="form-group">
        <label for="email">Correo electrónico</label><br>
        <input
          type="text"
          id="email"
          v-model="email"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">Contraseña</label><br>
        <input
          type="password"
          id="password"
          v-model="password"
          required
        />
      </div>
      <router-link class="register" to="/RegistrarUsuario">No tienes un usuario? Regístrate aquí</router-link><br><br>
      <button type="submit" :disabled="loading" style="font-size: 16px;">{{ loading ? "Cargando..." : "Iniciar Sesión" }}</button>
    </form>
    <div v-if="error" class="error-message">{{ error }}</div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      email: '',
      password: '',
      error: '',
      loading: false,
      isLoggedIn: false
    };
  },
  created() {
  const token = localStorage.getItem('token');
  if (token) {
    this.isLoggedIn = true;
  }
  },
  methods: {
    async login() {
      this.loading = true;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      this.error = 'El correo electrónico no tiene un formato válido.';
      this.loading = false;
      return;
    }

      if (this.password.length < 6) {
      this.error = 'La contraseña debe tener al menos 6 caracteres.';
      this.loading = false;
      return;
    }

      try {
        const response = await fetch('http://localhost:3000/api/login', {
          method: 'POST',
            headers: { 
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: this.email,
              password: this.password,
            })
        });
        const data = await response.json()
        if(!response.ok) {
          throw new Error(data.message || 'Error en el inicio de sesión');
        }
        if(response.status === 401) {
          this.error = 'Usuario o contraseña incorrectos'
          return
        }
        console.log(data);
        localStorage.setItem('token', data.token); // Guarda el token
        console.log('Token guardado:', localStorage.getItem('token'));
        alert("Usuario logueado correctamente");
        this.email = '',
        this.password = '',
        this.error = ''
      } 
      catch (error) {
        const serverMessage = error.message || 'Error en el inicio de sesión';
        this.error = serverMessage;
      }
      finally {
        this.loading = false;
      }
    },
    logout() {
      localStorage.removeItem('token');
      this.isLoggedIn = false;
      alert('Sesión cerrada correctamente');
    },
    registerUser() {
      this.$router.push({ path: `/RegistrarUsuario` });
    }
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  margin: auto;
  border: 5px solid rgb(117, 92, 92);
  padding: 20px;
  background-color:#f8ffd7;
  border-radius: 5px;
}

label {
  color: rgb(49, 187, 141);
}

.login-container {
  color: rgb(49, 187, 141);
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