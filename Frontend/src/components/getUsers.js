export async function getUsers() {
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            console.error('Token no encontrado. El usuario no está autenticado.');
            return []; // Devolvemos un valor seguro
        }

        console.log('Token encontrado:', token);

        const response = await fetch('http://localhost:3000/api/usuarios', {
            method: 'GET',
            headers: {
                "authorization": `Bearer ${token}`
            }
        });

        console.log('Respuesta obtenida del servidor:', response);

        if (!response) {
            throw new Error("No se recibió respuesta del servidor");
        }

        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
        }

        const users = await response.json();
        console.log('Usuarios obtenidos:', users);
        return users;
    } catch (error) {
        console.error('Error al obtener usuarios:', error.message);
        return [];
    }
}

export async function deleteUserById(userId) {
    try {
        const token = localStorage.getItem('token');
        const response = await fetch(`http://localhost:3000/api/usuarios/${userId}`, {
            method: 'DELETE',
            headers: {
                "authorization" : `Bearer ${token}`
            }
        });
        if (!response.ok) {
            throw new Error('Error al eliminar usuario');
        }
    } catch (error) {
        console.error('Error al eliminar usuario:', error);
    }
}