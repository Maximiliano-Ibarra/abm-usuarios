<template>
    <main>
      <div id="login">
        <h1>Iniciar sesión</h1>
       <form>
        <label for="Usuario">Usuario</label>
        <br/>
        <input type="text" required v-model="user"></input>
        <br/>
        <label for="Pass">Contraseña</label>
        <br/>
        <input type="password" required v-model="pass"></input>
        <br><br>
        <button @submit="Autenticar">Ingresar</button>
       </form>
      </div>
    </main>
  </template>

<style>
    #login{
      border: 5px solid rgb(117, 92, 92); /* Cambia el color y el grosor del borde */
            padding: 20px; /* Espacio interno */
            margin: 20px;
      background-color:rgb(57, 83, 70);
    }
    h1{
        font-size: 48px;
    }
</style>

<script>
    
</script>