import { User } from '../models/usersModel'

exports.createUser = async(req, res) => {
    try {
        const { username, password, name } = req.body;
        const newUser = await User.createUser({username, password, name})
        res.status(201).json(newUser);
    }
    catch (error) {
        res.status(500).json({error: 'Error al insertar usuario:'});
    }
}

exports.getUsers = async(req, res) => {
    try {
        const users = await User.findAll()
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({error: 'Error al obtener usuario:'});
    }
}

exports.updateUser = async(req, res) => {
    try {
        const { id } = req.params;
        const { password, name } = req.body;
        const user = await User.findByPk(id);
        if(!usuario) {
            return res.status(404).json({error: 'Usuario no encontrado'});
        }
        await usuario.update({password, name})
        res.status(200).json(usuario)
    }
    catch (error) {
        res.status(500).json({error: 'Error al actualizar usuario:'});
    }
}

exports.deleteUser = async(req, res) => {
    try {
        const { id } = req.params;
        const usuario = await Usuario.findByPk(id);
        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        await usuario.destroy();
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({error: 'Error al eliminar usuario:'})
    }
}