export async function getUsers() {
    try {
        const response = await fetch('http://localhost:3000/api/usuarios');
        const users = await response.json();
        return users;
    }
    catch (error) {
        console.error('Error al obtener usuarios', error);
    }
}

export async function deleteUserById(userId) {
    try {
        const response = await fetch(`http://localhost:3000/api/usuarios/${userId}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Error al eliminar usuario');
        }
    } catch (error) {
        console.error('Error al eliminar usuario:', error);
    }
}