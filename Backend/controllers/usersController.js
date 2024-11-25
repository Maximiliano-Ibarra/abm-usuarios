import User from '../models/usersModel.js'

export const userController = {
    createUser: async(req, res) => {
        try {
            const { username, password, email } = req.body;
            const newUser = await User.createUser({username, password, email})
            res.status(201).json(newUser);
        }
        catch (error) {
            res.status(500).json({error: 'Error al insertar usuario:'});
        }
    },
    getAllUsers : async(req, res) => {
        try {
            const users = await User.findAll()
            res.status(200).json(users);
        }
        catch (error) {
            res.status(500).json({error: 'Error al obtener usuario:', details: error.message});
        }
    },
    updateUser : async(req, res) => {
        try {
            const { id } = req.params;
            const { password, email } = req.body;
            const user = await User.findByPk(id);
            if(!user) {
                return res.status(404).json({error: 'Usuario no encontrado'});
            }
            await User.update({password, email})
            res.status(200).json(usuario)
        }
        catch (error) {
            res.status(500).json({error: 'Error al actualizar usuario:'});
        }
    },
    deleteUser : async(req, res) => {
        try {
            const { id } = req.params;
            const user = await User.findByPk(id);
            if (!user) {
                return res.status(404).json({ message: 'Usuario no encontrado' });
            }
            await User.destroy();
            res.status(204).send();
        }
        catch (error) {
            res.status(500).json({error: 'Error al eliminar usuario:'})
        }
    }
}

// exports.createUser = async(req, res) => {
//     try {
//         const { username, password, email } = req.body;
//         const newUser = await user.createUser({username, password, email})
//         res.status(201).json(newUser);
//     }
//     catch (error) {
//         res.status(500).json({error: 'Error al insertar usuario:'});
//     }
// }

// exports.getUsers = async(req, res) => {
//     try {
//         const users = await user.findAll()
//         res.status(200).json(users);
//     }
//     catch (error) {
//         res.status(500).json({error: 'Error al obtener usuario:'});
//     }
// }

// exports.updateUser = async(req, res) => {
//     try {
//         const { id } = req.params;
//         const { password, email } = req.body;
//         const user = await user.findByPk(id);
//         if(!user) {
//             return res.status(404).json({error: 'Usuario no encontrado'});
//         }
//         await user.update({password, email})
//         res.status(200).json(usuario)
//     }
//     catch (error) {
//         res.status(500).json({error: 'Error al actualizar usuario:'});
//     }
// }

// exports.deleteUser = async(req, res) => {
//     try {
//         const { id } = req.params;
//         const user = await user.findByPk(id);
//         if (!user) {
//             return res.status(404).json({ message: 'Usuario no encontrado' });
//         }
//         await user.destroy();
//         res.status(204).send();
//     }
//     catch (error) {
//         res.status(500).json({error: 'Error al eliminar usuario:'})
//     }
// }