import jwt from 'jsonwebtoken'
const SECRET_KEY = 'clave_secreta'

export const authenticate = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    console.log(authHeader)
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        console.log(token);
        if(!token) {
            return res.status(401).json({message: "Acceso denegado. Token no proporcionado"});
        }

        try {
            const verified = jwt.verify(token, SECRET_KEY);

            req.user = verified;
            next();
        }
        catch(error) {
            console.error(error);
            return res.status(403).json({message: "Token inválido o expirado"});
        }
    }
    else {
        return res.status(401).json({message: "Acceso denegado. Error de header"});
    }
}