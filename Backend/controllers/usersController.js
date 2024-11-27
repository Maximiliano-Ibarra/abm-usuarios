import User from '../models/usersModel.js'
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
const SECRET_KEY = 'clave_secreta'

export const userController = {
    login: async(req, res) => {
        const email = req.body.email
        const password = req.body.password

        try {
            const user = await User.findOne( { where: { email: email } })
            if(!user) {
                return res.status(401).json({message: "Usuario o contraseña incorrectos"})
            }

            const foundUser = await bcrypt.compare(password, user.password);
            if(!foundUser) {
                return res.status(401).json({message: "Usuario o contraseña incorrectos"})
            }

            const token = jwt.sign(
                {
                    id: user.id, email: user.email
                },
                SECRET_KEY,
                {
                    expiresIn: '5m'
                }
            )

            res.header('Authorization').json({ token : token });
        }
        catch(error) {
            console.error(error);
            res.status(500).json({message: "Error del servidor al iniciar sesión"})
        }
    },
    createUser: async(req, res) => {
        try {
            const { username, email, password } = req.body;

            if (!username || !email || !password) {
                return res.status(400).json({ error: 'Faltan datos requeridos.' });
            }

            const hashedPass = await bcrypt.hash(password, 10);
            console.log('hashedPass:', typeof hashedPass);
            console.log(hashedPass);
            const newUser = await User.create({username: username, email: email, password: hashedPass})
            res.status(201).json(newUser);
        }
        catch (error) {
            res.status(500).json({error: 'Error al insertar usuario:', details: error.message});
            console.error('Error en createUser:', error.message, error.stack);
        }
    },
    getAllUsers : async(req, res) => {
        try {
            const users = await User.findAll()
            res.status(200).json(users);
        }
        catch (error) {
            res.status(500).json({error: 'Error al obtener usuarios:', details: error.message});
        }
    },
    getUser : async(req, res) => {
        try {
            const userId = req.params.id
            const user = await User.findByPk(userId)
            res.status(200).json(user);
        }
        catch (error) {
            res.status(500).json({error: 'Error al obtener usuario:', details: error.message});
        }
    },
    updateUser : async(req, res) => {
        try {
            const id = req.params.id;
            const { username, email } = req.body;
            const user = await User.findByPk(id);
            if(!user) {
                return res.status(404).json({error: 'Usuario no encontrado', details: error.message});
            }

            const updateData = {}
            if(username) updateData.username = username;
            if(email) updateData.email = email;

            const updatedUser = await user.update(updateData)
            res.status(200).json({
                message: 'Usuario actualizado con éxito.',
                user: updatedUser
            })
        }
        catch (error) {
            res.status(500).json({error: 'Error al actualizar usuario:'});
        }
    },
    deleteUser : async(req, res) => {
        try {
            const userId = req.params.id;
            const result = await User.destroy({ where: { id: userId } });
            if (result === 0) {
                return res.status(404).json({ error: 'Usuario no encontrado' });
            }
            res.status(204).send();
        }
        catch (error) {
            res.status(500).json({error: 'Error al eliminar usuario:', details: error.message})
        }
    }
}